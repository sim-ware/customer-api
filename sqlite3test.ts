const sqlite3 = require('sqlite3');
const db = new sqlite3.Database('./customers.db');

db.all("SELECT * FROM customers", (error: any, rows: any[]) => {
  console.log('CUSTOMERS============================')
  rows.forEach((row) => {
    console.log(row);
  })
  console.log('=====================================')
});

db.all("SELECT * FROM items", (error: any, rows: any[]) => {
  console.log('ITEMS=================================')
  rows.forEach((row) => {
    console.log(row);
  })
  console.log('=====================================')
});


db.all("SELECT * FROM orders", (error: any, rows: any[]) => {
  console.log('ORDERS===============================')
  rows.forEach((row) => {
    console.log(row);
  })
  console.log('=====================================')
});

db.all("SELECT * FROM orders_items", (error: any, rows: any[]) => {
  console.log('ORDER_ITEMS==========================')
  rows.forEach((row) => {
    console.log(row);
  })
  console.log('=====================================')
});
