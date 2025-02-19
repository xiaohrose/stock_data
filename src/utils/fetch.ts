import { getDataFromHtml, codes } from './index';
import  selectors  from '../constants';
import _ from 'lodash-es';
import {join} from 'path';

function zipWith (value: string, obj: {id: string; title: string; select?: string;}) {
    return {value, name: obj.id}
}

type Item = {name:string; value: string;};

let result: Array<{name: string; code: string; data: Array<Item>}> = [];

async function appendToJsonFile(obj: object) {
    const fs = require('fs').promises;
    const filePath = join(__dirname,'../assets/temp.json');
    try {
        // Read existing content if any
        let fileContent = '';
        try {
            fileContent = await fs.readFile(filePath, 'utf8');
        } catch (err) {
            // If the file does not exist, it will be created. No need to handle this error.
            if (err.code !== 'ENOENT') {
                throw err;
            }
        }

        // Parse existing JSON content or initialize as empty array
        let jsonData: Array<object> = [];
        if (fileContent) {
            jsonData = JSON.parse(fileContent);
        }

        // Append new object to the JSON data
        jsonData.push(obj);

        // Write the updated JSON back to the file
        await fs.writeFile(filePath, JSON.stringify(jsonData, null, 2), 'utf8');
    } catch (error) {
        console.error('写入文件时出错:', error);
        throw error;
    }finally{
        process.exit(1);
    }
}


(async () => {
    try {
        const companyCodesWithUrls = await codes;

        for (const filename in companyCodesWithUrls) {
            const entries = companyCodesWithUrls[filename].slice(0, 1);
            for (const entry of entries) {
                const url = entry.url;
                const data = await getDataFromHtml(url, selectors.slice(2).map(item => item.select!));
                const res = _.zipWith(data, selectors.slice(2), zipWith) ;
                let obj = {
                  ...entry,
                    data: res
                }
                result.push(obj)
            }
        }

        appendToJsonFile(result);
        
    } catch (error) {
        console.error('获取数据时出错:', error);
    }
})();
