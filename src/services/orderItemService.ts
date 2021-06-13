import { dbAll } from '../db/db';
// import { Order } from '../db/schema'; // create OrderItem

export async function getOrderItemByOrderId(id: string): Promise<any[]> { // fix any
  const result = await dbAll(`SELECT * FROM orders_items WHERE order_id = '${id}'`);

  return result
}
