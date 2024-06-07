import { PATH_DB } from '../constants/contacts.js';
import fs from 'fs/promises';

export const thanos = async () => {
  try {
    const data = await fs.readFile(PATH_DB, 'utf8');
    const contacts = JSON.parse(data);

    const remainingContacts = contacts.filter(() => Math.random() > 0.5);

    await fs.writeFile(PATH_DB, JSON.stringify(remainingContacts, null, 2));
    console.log('Данні успішно видалені');
  } catch (error) {
    console.error('Помилка', error);
  }
};

await thanos();
