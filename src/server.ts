import express from 'express';
import { getFullCustomerOrderHistory } from './services/customerService'
const app = express();
const PORT = 8000;

app.get('/', (_, res) => res.send('⚡️⚡️⚡️ Customer API Express + TypeScript Server ⚡️⚡️⚡️'));

app.get('/getFullCustomerOrderHistory', (_, res) => {
  const exampleId = 'ca48570d-6265-453a-b9da-ca9bc982bfee'
  const customerOrderHistory = getFullCustomerOrderHistory(exampleId)
  res.send(customerOrderHistory)
});

app.listen(PORT, () => {
  console.log(`⚡️[server]: Server is running at https://localhost:${PORT}`);
});