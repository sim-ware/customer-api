import { getOrdersByCustomerId } from './orderService'
import { getItemById } from './itemService'
import { getOrderItemByOrderId } from './orderItemService'


export async function getFullCustomerOrderHistory(id: string) {
  const result: { orderId: string; supplierId: string; itemId: string; supplierName: string; itemName: string; cost: number; date: string }[] = []
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
