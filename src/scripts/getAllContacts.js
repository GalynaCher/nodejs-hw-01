import { PATH_DB } from '../constants/contacts.js';
import fs from 'node:fs/promises';
import path from 'node:path';

export const getAllContacts = async () => {

    const pathToWorkDir = path.join(process.cwd());
    const pathToDb = path.join(pathToWorkDir, PATH_DB);

    try {
        const data = await fs.readFile(pathToDb, 'utf-8');
        return JSON.parse(data);
    } catch (error) {
        console.error("Cannot read file: ", error);
    }
};

console.log(await getAllContacts());
