import express from 'express';
import { getFullOrderHistoryByCustomer } from './services/orderService'
const app = express();
const PORT = 8000;

app.get('/', (_, res) => res.send('⚡️⚡️⚡️ Customer API Express + TypeScript Server ⚡️⚡️⚡️'));

app.get('/getFullOrderHistoryByCustomer', async (req, res) => {
  if (!req.query.id) {
    const errorMessage = 'No Customer ID supplied'
    res.status(400).send(errorMessage);
  }

  const customerOrderHistory = await getFullOrderHistoryByCustomer(req.query.id as string)
  res.send(customerOrderHistory)
});

app.listen(PORT, () => {
  console.log(`⚡️[server]: Server is running at https://localhost:${PORT}`);
});