import { dbAll } from '../db/db';
import { OrderItem } from '../db/schema';

export async function getOrderItemByOrderId(id: string): Promise<OrderItem[]> {
  const result = await dbAll(`SELECT * FROM orders_items WHERE order_id = '${id}'`);
  return result
}
