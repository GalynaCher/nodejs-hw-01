import { PATH_DB } from '../constants/contacts.js';
import path from 'node:path';
import fs from 'node:fs/promises';

export const removeLastContact = async () => {

    let dbContent = [];

    const pathToWorkDir = path.join(process.cwd());
    const pathToDb = path.join(pathToWorkDir, PATH_DB);

    try {
        const data = await fs.readFile(pathToDb, 'utf-8');
        dbContent = JSON.parse(data);
    } catch (error) {
        console.error("Cannot read file: ", error);
    }

    try {
        const newDbContent = dbContent.slice(0, -1);
        return await fs.writeFile(pathToDb, JSON.stringify(newDbContent, null, 2));
    } catch (error) {
        console.error("Cannot write to file: ", error);
    }

};

removeLastContact();
