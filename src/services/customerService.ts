import { getOrdersByCustomerId } from './orderService'
import { getItemById } from './itemService'


export async function getCustomerOrderHistory(id: string) {
    const allCustomerOrders = await getOrdersByCustomerId(id)
    const allCustomerOrdersWithDetails = allCustomerOrders.map((order) => {
        console.log('Order:', order)
        // for each order, go and fetch all the order_items, while grabbing the date
        const { date } = order;
        // use the order_items to get item_id and look up Item information
        // const getOrdersByCustomerId(order.)
    })
}
