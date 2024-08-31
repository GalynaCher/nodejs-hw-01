import fs from 'node:fs/promises';
import path from 'node:path';
import { PATH_DB } from '../constants/contacts.js';
import { createFakeContact } from '../utils/createFakeContact.js';

export const addOneContact = async () => {
  let dbContent;

  const pathToWorkDir = path.join(process.cwd());
  const pathToDb = path.join(pathToWorkDir, PATH_DB);

  try {
    const data = await fs.readFile(pathToDb, 'utf-8');
    dbContent = JSON.parse(data);
  } catch (error) {
    console.error('Cannot read file content.', error);
  }

  dbContent.push(createFakeContact());

  try {
    await fs.writeFile(pathToDb, JSON.stringify(dbContent, null, 2));
  } catch (error) {
    console.error('Cannot write to file', error);
  }
};

addOneContact();
