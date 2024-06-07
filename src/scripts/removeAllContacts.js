import { PATH_DB } from '../constants/contacts.js';
import fs from 'fs/promises';

export const removeAllContacts = async () => {
  try {
    await fs.writeFile(PATH_DB, JSON.stringify([]));
    console.log('Данні успішно видалені');
  } catch (error) {
    console.error('Помилка видалення данних', error);
  }
};

await removeAllContacts();
