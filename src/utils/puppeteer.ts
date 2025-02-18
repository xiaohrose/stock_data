import puppeteer from 'puppeteer';

// 单例浏览器实例
// @ts-ignore
let browserInstance: puppeteer.Browser | null = null;
let isClosing = false;

/**
 * 获取浏览器实例
 * @returns {Promise<puppeteer.Browser>} 返回浏览器实例
 */
// @ts-ignore
const getBrowser = async (): Promise<puppeteer.Browser> => {
    if (!browserInstance) {
        browserInstance = await puppeteer.launch({
            headless: true, // 使用新的headless模式
            args: [
                '--no-sandbox',
                '--disable-setuid-sandbox',
                '--disable-dev-shm-usage'
            ]
        });
    }
    return browserInstance;
};

/**
 * 关闭浏览器实例
 */
export const closeBrowser = async () => {
    if (browserInstance && !isClosing) {
        isClosing = true;
        try {
            if (browserInstance) {
                await browserInstance.close();
                browserInstance = null;
            }
        } catch (error) {
            console.error('关闭浏览器时出错:', error);
        } finally {
            isClosing = false;
        }
    }
};

/**
 * 从HTML页面获取数据
 * @param {string} url - 要访问的URL
 * @param {string|string[]|Function} selectors - 选择器或自定义处理函数
 * @param {Function} [getData=data=>data] - 数据处理函数
 * @returns {Promise<any>} 返回处理后的数据
 */
export async function getDataFromHtml(url: string, selectors: string | string[] | Function, getData: (data: any) => any = data => data): Promise<any> {
    const browser = await getBrowser();
    const page = await browser.newPage();
    
    try {
        // 配置页面设置
        await page.setDefaultNavigationTimeout(120000); // 2分钟
        await page.setDefaultTimeout(120000);
        await page.setViewport({ width: 1280, height: 800 });

        // 访问页面
        const response = await page.goto(url, { waitUntil: 'networkidle2' });
        if (!response || !response.ok()) {
            throw new Error(`页面加载失败，状态码: ${response ? response.status() : '未知'}`);
        }

        let data;
        if (typeof selectors !== 'function') {
            const elements = Array.isArray(selectors) ? selectors : [selectors];
            data = await Promise.all(elements.map(async (selector) => {
                return await page.evaluate((sel) => {
                    const element = document.querySelector(sel);
                    return element?.textContent?.trim() || element?.innerHTML?.trim();
                }, selector);
            }));
        } else {
            data = await selectors(page, browser);
        }

        return getData(data);
    } catch (error) {
        console.error('获取数据时出错:', error);
        throw error;
    } finally {
        await page.close();
    }
}
