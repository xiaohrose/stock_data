import { getCsvData } from './code';
import { getStockURL } from './urls';
import { fetchAllCompanyCodes } from './fetchCode';

describe('fetchAllCompanyCodes', () => {
  it('should fetch all company codes from CSV files in the assets directory', async () => {
    const result = await fetchAllCompanyCodes();
    expect(result).toBeInstanceOf(Object);
    expect(Object.keys(result).length).toBeGreaterThan(0);

    for (const filename in result) {
      expect(filename.endsWith('.csv')).toBe(true);
      expect(Array.isArray(result[filename])).toBe(true);
      expect(result[filename].length).toBeGreaterThan(0);
      result[filename].forEach((entry) => {
        expect(entry).toHaveProperty('name');
        expect(entry).toHaveProperty('code');
      });
    }
  });
})

describe('getCsvData', () => {
  it('should read and parse the CSV file correctly', async () => {
    const result = await getCsvData('oil.csv');
    expect(result).toBeInstanceOf(Array);
    expect(result.length).toBeGreaterThan(0);
    expect(result[0]).toHaveProperty('name');
    expect(result[0]).toHaveProperty('code');
  });

  it('should reject with an error if the file does not exist', async () => {
    try {
      await getCsvData('nonexistent.csv');
      fail('Expected getCsvData to throw an error for a nonexistent file');
    } catch (error) {
      expect(error).toBeDefined();
      expect(error.message).toContain('File does not exist');
    }
  }, 10000); // Increase timeout to 10 seconds for this test

  it('should generate correct stock URLs for each entry', async () => {
    const result = await getCsvData('oil.csv');
    result.forEach((entry) => {
      const url = getStockURL(entry.code);
      expect(url).toBe(`https://finance.sina.com.cn/realstock/company/${entry.code}/nc.shtml`);
    });
  });
});
