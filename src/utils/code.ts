import * as fs from 'fs';
import * as path from 'path';
import * as csvParser from 'csv-parser';

export function getCsvData(filename: string): Promise<Array<{ name: string, code: string }>> {
    return new Promise((resolve, reject) => {
        const results: Array<{ name: string, code: string }> = [];
        const filePath = path.join(__dirname, '..', 'assets', filename);

        // Check if the file exists before attempting to read it
        fs.access(filePath, fs.constants.F_OK, (err) => {
            if (err) {
                if (err.code === 'ENOENT') {
                    reject(new Error('File does not exist'));
                } else {
                    reject(err);
                }
                return;
            }

            fs.createReadStream(filePath)
                .pipe(csvParser())
                .on('data', (data) => results.push(data))
                .on('end', () => resolve(results))
                .on('error', (err) => reject(err));
        });
    });
}
