import { dbAll } from '../db/db';
import { Order } from '../db/schema';

export async function getOrdersByCustomerId(id: string): Promise<Order[]> {
  const result = await dbAll(`SELECT * FROM orders WHERE customer_id = '${id}'`);
  
  return result
}
