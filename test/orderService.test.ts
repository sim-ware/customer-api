import { getOrdersByCustomerId } from "../src/services/orderService";


describe("test getCustomerOrderHistory()", () => {
  it("should return all Orders with specified Customer ID", async () => {
    const resultOne = await getOrdersByCustomerId('ca48570d-6265-453a-b9da-ca9bc982bfee')
    const resultTwo = await getOrdersByCustomerId('40a0700a-e6b8-4f1d-877d-58364e4b6ead')
    const resultThree = await getOrdersByCustomerId('93665bcc-70bf-4bb3-a279-f98341c037b3')

    expect(resultOne).toEqual(
      [
        {
          id: 'fbe2b58f-75f0-44ae-a3b0-fe681da5f14d',
          customer_id: 'ca48570d-6265-453a-b9da-ca9bc982bfee',
          date: '2020-12-04'
        },
        {
          id: 'b45f16df-30b1-4437-b942-fd7c0fa46038',
          customer_id: 'ca48570d-6265-453a-b9da-ca9bc982bfee',
          date: '2020-11-30'
        },
        {
          id: '538bd487-036b-48e1-ba51-8b60ed0fd1cb',
          customer_id: 'ca48570d-6265-453a-b9da-ca9bc982bfee',
          date: '2021-02-07'
        }
      ]
    );

    expect(resultTwo).toEqual(
      [
        {
          id: '3153af10-0c2e-4a40-950e-d78f800c700c',
          customer_id: '40a0700a-e6b8-4f1d-877d-58364e4b6ead',
          date: '2021-01-14'
        },
        {
          id: '76cb3483-c515-4432-b205-a4f551aaa514',
          customer_id: '40a0700a-e6b8-4f1d-877d-58364e4b6ead',
          date: '2021-03-02'
        }
      ]
    );

    expect(resultThree).toEqual([])
  });
});
