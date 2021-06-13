export interface Order {
  id: string;
  customer_id: string;
  date: string;
}

export interface Item {
  id: string;
  name: string;
  cost: number;
  supplier: string;
}

export interface OrderItem {
  order_id: string;
  item_id: string;
}

export interface CustomerOrderHistoryDetail {
  orderId: string;
  supplierId: string;
  itemId: string;
  supplierName: string;
  itemName: string;
  cost: number;
  date: string
}