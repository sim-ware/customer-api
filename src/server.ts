import express from 'express';
import { getFullCustomerOrderHistory } from './services/customerService'
const app = express();
const PORT = 8000;

app.get('/', (_, res) => res.send('⚡️⚡️⚡️ Customer API Express + TypeScript Server ⚡️⚡️⚡️'));

app.get('/getFullCustomerOrderHistory', async (req, res) => {
  if (!req.query.id) {
    const errorMessage = 'No Customer ID supplied'
    res.status(400).send(errorMessage);
    // throw new Error(errorMessage)
  }

  const customerOrderHistory = await getFullCustomerOrderHistory(req.query.id as string)
  res.send(customerOrderHistory)
});

app.listen(PORT, () => {
  console.log(`⚡️[server]: Server is running at https://localhost:${PORT}`);
});