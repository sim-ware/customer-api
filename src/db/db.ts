const sqlite3 = require('sqlite3');
const db = new sqlite3.Database('./customers.db');
import { Order, Item } from "./schema";

export async function dbAll(query: string): Promise<Order[]> { // update to include possibility of all included types somehow
  return new Promise(function (resolve, reject) {
    db.all(query, function (err: any, rows: Order[]) {
      if (err) return reject(err);
      resolve(rows);
    });
  });
}

export async function dbGet(query: string): Promise<Item> { // update to include possibility of all included types somehow
  return new Promise(function (resolve, reject) {
    db.get(query, function (err: any, row: Item) {
      if (err) return reject(err);
      if (!row) {
        reject(new Error('Invalid Item ID'))
      };
      resolve(row);
    });
  });
}