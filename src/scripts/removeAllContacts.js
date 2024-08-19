import { PATH_DB } from '../constants/contacts.js';
import path from 'node:path';
import fs from 'node:fs/promises';

export const removeAllContacts = async () => {

    const pathToWorkDir = path.join(process.cwd());
    const pathToDb = path.join(pathToWorkDir, PATH_DB);

    try {
        return await fs.writeFile(pathToDb, JSON.stringify([]));
    } catch (error) {
        console.error("Cannot write to file: ", error);
    }
};

removeAllContacts();
