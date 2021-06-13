# customer-api
A simple API to handle customer interactions

### To Run Database Connection Test Script
```
$ ts-node sqlite3test.ts
```

### To Run Tests
```
$ npm test
```

### To Run Server
```
$ npm start
```

# Endpoints
#### getFullOrderHistoryByCustomer
```
http://localhost:8000/getFullOrderHistoryByCustomer?id=ca48570d-6265-453a-b9da-ca9bc982bfee
```
This endpoint returns a full order history from a customer ID. I picture an Order History, like the ones on Amazon or eBay, where you can see a list of your most recent purchases and track your history as well. It accepts a customer ID as a parameter.
#### getFullOrderHistoryByCustomer
```
http://localhost:8000/addCustomer?email=samir@example.com&given_name=samir&family_name=gossain
```
This endpoint creates a customer in the DB. It requires an email, given_name, and family_name to do so.
