import express from 'express';
import { addCustomer } from './services/customerService';
import { getFullOrderHistoryByCustomer } from './services/orderService'
const app = express();
const PORT = 8000;

app.get('/', (_, res) => res.send('⚡️⚡️⚡️ Customer API Express + TypeScript Server ⚡️⚡️⚡️'));

app.get('/getFullOrderHistoryByCustomer', async (req, res) => {
  if (!req.query.id) {
    return res.status(400).send('No Customer ID supplied');
  }

  const customerOrderHistory = await getFullOrderHistoryByCustomer(req.query.id as string)
  return res.send(customerOrderHistory)
});

app.get('/addCustomer', async(req, res) => {
  const { email, given_name: givenName, family_name: familyName } = req.query
  if (!email || !givenName || !familyName) {
    return res.status(400).send('Either email, given name, or family name not supplied');
  }

  const result = await addCustomer(
    email as string,
    givenName as string,
    familyName as string
  )

  if (result) {
    return res.status(200).send('Customer Created')
  } else {
    return res.status(200).send('Customer Already Exists');
  }
});

app.listen(PORT, () => {
  console.log(`⚡️[server]: Server is running at https://localhost:${PORT}`);
});