import { dbAll } from '../db/db';
import { Order } from '../db/schema';
import { getItemById } from './itemService'
import { getOrderItemByOrderId } from './orderItemService'
import { CustomerOrderHistoryDetail } from '../db/schema'

export async function getOrdersByCustomerId(id: string): Promise<Order[]> {
  const result = await dbAll(`SELECT * FROM orders WHERE customer_id = '${id}'`);
  return result
}

export async function getFullOrderHistoryByCustomer(id: string) { // change this to getFullOrderHistoryByCustomer and move to orderService, tests too
  const result: CustomerOrderHistoryDetail[] = []
  const allCustomerOrders = await getOrdersByCustomerId(id)
  
  for (const customerOrder of allCustomerOrders) {
    const { date } = customerOrder;
    const orderItems = await getOrderItemByOrderId(customerOrder.id)

    for (const orderItem of orderItems) {
      const { item_id: itemId } = orderItem

      const itemDetails = await getItemById(itemId)
      const { name: itemName, cost, supplier } = itemDetails

      const parsedSupplier = await JSON.parse(supplier)
      const { id: supplierId, name: supplierName } = parsedSupplier
      
      const orderHistoryItem = {
        orderId: customerOrder.id,
        supplierId,
        itemId,
        supplierName,
        itemName,
        cost,
        date,
      }
      
      result.push(orderHistoryItem)
    }
  }

  return result
}