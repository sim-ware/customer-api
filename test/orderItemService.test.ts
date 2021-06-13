import { getOrderItemByOrderId } from "../src/services/orderItemService";


describe("test getCustomerOrderHistory()", () => {
  it("should return all Orders with specified Customer ID", async () => {
    const resultOne = await getOrderItemByOrderId('fbe2b58f-75f0-44ae-a3b0-fe681da5f14d')
    const resultTwo = await getOrderItemByOrderId('b45f16df-30b1-4437-b942-fd7c0fa46038')
    const resultThree = await getOrderItemByOrderId('invalid-id')

    expect(resultOne).toEqual(
      [
        {
          order_id: 'fbe2b58f-75f0-44ae-a3b0-fe681da5f14d',
          item_id: 'b0f421ab-363a-4d77-bc1e-be77c24744d2'
        },
        {
          order_id: 'fbe2b58f-75f0-44ae-a3b0-fe681da5f14d',
          item_id: '448dbf0c-7d55-47ca-adba-28e33a086ae0'
        }
      ]
    );
    expect(resultTwo).toEqual(
      [
        {
          order_id: 'b45f16df-30b1-4437-b942-fd7c0fa46038',
          item_id: 'b0f421ab-363a-4d77-bc1e-be77c24744d2'
        },
        {
          order_id: 'b45f16df-30b1-4437-b942-fd7c0fa46038',
          item_id: 'b57c64ae-5756-44f2-8cfb-d69f0e70713a'
        },
        {
          order_id: 'b45f16df-30b1-4437-b942-fd7c0fa46038',
          item_id: '448dbf0c-7d55-47ca-adba-28e33a086ae0'
        }
      ]
    );
    expect(resultThree).toEqual([]);
  });
});
