import { getFullCustomerOrderHistory } from "../src/services/customerService";


describe("test getFullCustomerOrderHistory()", () => {
  it("should return a detailed History of the Customers Orders", async () => {
    const result = await getFullCustomerOrderHistory('ca48570d-6265-453a-b9da-ca9bc982bfee')
    expect(result).toStrictEqual([
      {
        cost: 220,
        date: "2020-12-04",
        itemId: "b0f421ab-363a-4d77-bc1e-be77c24744d2",
        itemName: "Table",
        orderId: "fbe2b58f-75f0-44ae-a3b0-fe681da5f14d",
        supplierId: "5",
        supplierName: "My Desk",
      },
      {
        cost: 124.67,
        date: "2020-12-04",
        itemId: "448dbf0c-7d55-47ca-adba-28e33a086ae0",
        itemName: "Chair",
        orderId: "fbe2b58f-75f0-44ae-a3b0-fe681da5f14d",
        supplierId: "5",
        supplierName: "My Desk",
      },
      {
        cost: 220,
        date: "2020-11-30",
        itemId: "b0f421ab-363a-4d77-bc1e-be77c24744d2",
        itemName: "Table",
        orderId: "b45f16df-30b1-4437-b942-fd7c0fa46038",
        supplierId: "5",
        supplierName: "My Desk",
      },
      {
        cost: 0.86,
        date: "2020-11-30",
        itemId: "b57c64ae-5756-44f2-8cfb-d69f0e70713a",
        itemName: "Ruler",
        orderId: "b45f16df-30b1-4437-b942-fd7c0fa46038",
        supplierId: "2",
        supplierName: "Paperclips Ltd",
      },
      {
        cost: 124.67,
        date: "2020-11-30",
        itemId: "448dbf0c-7d55-47ca-adba-28e33a086ae0",
        itemName: "Chair",
        orderId: "b45f16df-30b1-4437-b942-fd7c0fa46038",
        supplierId: "5",
        supplierName: "My Desk",
      },
      {
        cost: 1.43,
        date: "2021-02-07",
        itemId: "66fa1472-c7ac-4f51-a817-a0cfe3f92d35",
        itemName: "Pen",
        orderId: "538bd487-036b-48e1-ba51-8b60ed0fd1cb",
        supplierId: "2",
        supplierName: "Paperclips Ltd",
      },
    ]);
  });
});
