import { PATH_DB } from '../constants/contacts.js';
import path from 'node:path';
import fs from 'node:fs/promises';

export const countContacts = async () => {

    const pathToWorkDir = path.join(process.cwd());
    const pathToDb = path.join(pathToWorkDir, PATH_DB);

    try {
        const data = await fs.readFile(pathToDb, 'utf-8');
        const dbContent = JSON.parse(data);
        // console.log(dbContent);
        return dbContent.length;
    } catch (error) {
        console.error("Cannot read file: ", error);
    }

};

console.log(await countContacts());
