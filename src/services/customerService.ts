import { v4 as uuidv4 } from 'uuid';
import { dbCheckExists, dbRun } from '../db/db';


export async function getCustomerById(
  email: string,
  given_name: string,
  family_name: string
  ) {
  const result = await dbCheckExists(`SELECT * FROM customers WHERE email='${email}' AND given_name='${given_name}' AND family_name='${family_name}'`);
  return result
}

export async function addCustomer(
  email: string,
  given_name: string,
  family_name: string
  ) {
  const uuid = uuidv4();
  const customerExists = await getCustomerById(email, given_name, family_name)

  if (!customerExists) {
    await dbRun(`INSERT INTO customers VALUES ('${uuid}', '${email}', '${given_name}', '${family_name}'); `)
    return uuid
  }
  
  return false
}