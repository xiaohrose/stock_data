import { getCsvData } from './code';
import * as fs from 'fs';
import * as path from 'path';
import { getStockURL } from './urls';

/**
 * 获取资产目录中的所有文件名。
 * 
 * @returns {string[]} 文件名列表。
 */
export function getAssetFilenames(): string[] {
    const assetDir = path.join(__dirname, '..', 'assets'); // 资产目录路径
    try {
        // 读取目录并过滤出文件
        return fs.readdirSync(assetDir).filter(file => fs.statSync(path.join(assetDir, file)).isFile());
    } catch (error) {
        console.error('读取文件时出错:', error); // 捕获并输出错误信息
        return []; // 如果发生错误，返回空数组
    }
}

/**
 * 异步获取所有公司代码。
 * 
 * 该函数会从 `assets` 目录中读取所有的 CSV 文件，并解析这些文件以获取公司代码。
 * 
 * @returns {Promise<{ [filename: string]: Array<{ name: string, code: string }> }>} 
 *          返回一个对象，键为文件名，值为包含公司名称和代码的数组。
 */
export async function fetchAllCompanyCodes(): Promise<{ [filename: string]: Array<{ name: string, code: string }> }> {
    try {
        // 获取所有 CSV 文件名
        const filenames = getAssetFilenames().filter(file => file.endsWith('.csv'));
        if (filenames.length === 0) {
            console.warn('没有找到任何CSV文件');
            return {};
        }

        const allCodes: { [filename: string]: Array<{ name: string, code: string }> } = {}; // 存储所有公司代码的对象

        // 使用Promise.all优化并发读取性能
        await Promise.all(filenames.map(async (filename) => {
            try {
                // 对每个 CSV 文件调用 `getCsvData` 函数获取公司代码
                const codes = await getCsvData(filename);
                allCodes[filename] = codes; // 将结果存储到 `allCodes` 对象中
            } catch (error) {
                console.error(`处理文件 ${filename} 时出错:`, error);
                throw error; // 重新抛出错误以便调用者处理
            }
        }));

        return allCodes;
    } catch (error) {
        console.error('获取公司代码时出错:', error); // 捕获并输出错误信息
        throw error; // 重新抛出错误以便调用者处理
    }
}

/**
 * 为所有公司代码生成相应的HTML URL。
 * 
 * 该函数接收一个包含公司名称和代码的对象，并为每个公司代码生成对应的 HTML URL。
 * 
 * @param { { [filename: string]: Array<{ name: string, code: string }> } } companyCodes 
 *          包含公司名称和代码的对象。
 * @returns {Promise<{ [filename: string]: Array<{ name: string, code: string, url: string }> }>}
 *          返回一个对象，键为文件名，值为包含公司名称、代码和URL的数组。
 */
export async function generateCompanyUrls(companyCodes: { [filename: string]: Array<{ name: string, code: string }> }): Promise<{ [filename: string]: Array<{ name: string, code: string, url: string }> }> {
    try {
        const allCodesWithUrls: { [filename: string]: Array<{ name: string, code: string, url: string }> } = {};

        for (const filename in companyCodes) {
            const codesWithUrl = companyCodes[filename].map(entry => ({
                ...entry,
                url: getStockURL(entry.code)
            }));
            allCodesWithUrls[filename] = codesWithUrl;
        }

        return allCodesWithUrls;
    } catch (error) {
        console.error('生成URL时出错:', error); // 捕获并输出错误信息
        throw error; // 重新抛出错误以便调用者处理
    }
}

// TODO
export default (async function () {
    return await generateCompanyUrls(await fetchAllCompanyCodes())
})()
