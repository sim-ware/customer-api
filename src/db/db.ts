const sqlite3 = require('sqlite3');
const db = new sqlite3.Database('./customers.db');


export async function dbAll(query: string): Promise<any[]> {
  return new Promise(function (resolve, reject) {
    db.all(query, function (err: any, rows: any[]) {
      if (err) return reject(err);
      resolve(rows);
    });
  });
}

export async function dbGet(query: string): Promise<any> {
  return new Promise(function (resolve, reject) {
    db.get(query, function (err: any, row: any) {
      if (err) return reject(err);
      if (!row) {
        reject(new Error('Invalid ID - Data does not exist'))
      };
      resolve(row);
    });
  });
}

export async function dbRun(query: string): Promise<any> {
  return new Promise(function (resolve, reject) {
    db.run(query, function (err: any) {
      if (err) return reject(err);
      resolve(true);
    });
  });
}

export async function dbCheckExists(query: string): Promise<any> {
  return new Promise(function (resolve, reject) {
    db.get(query, function (err: any, row: any) {
      if (err) return reject(err);
      if (!row) {
        resolve(false)
      };
      resolve(true);
    });
  });
}

export async function dbDeleteRecord(query: string): Promise<any> {
  return new Promise(function (resolve, reject) {
    db.run(query, function (err: any) {
      if (err) return reject(err);
      resolve(true);
    });
  });
}