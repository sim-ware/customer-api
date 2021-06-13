import { dbGet } from '../db/db';
import { Item } from '../db/schema';

export async function getItemById(id: string): Promise<Item> {
  const result = await dbGet(`SELECT * FROM items WHERE id = '${id}'`);

  return result
}
