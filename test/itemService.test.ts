import { getItemById } from "../src/services/itemService";


describe("test getItemById()", () => {
  it("should return Item by specified Item ID", async () => {
    const resultOne = await getItemById('b0f421ab-363a-4d77-bc1e-be77c24744d2')
    const resultTwo = await getItemById('1816df9d-bcf0-41a7-8766-876503cfc1a4')

    expect(resultOne).toEqual({
      id: 'b0f421ab-363a-4d77-bc1e-be77c24744d2',
      name: 'Table',
      cost: 220,
      supplier: '{"name":"My Desk","id":"5"}'
    });
    expect(resultTwo).toEqual({
      id: '1816df9d-bcf0-41a7-8766-876503cfc1a4',
      name: 'Lamp',
      cost: 35.67,
      supplier: '{"name":"My Desk","id":"5"}'
    });
  });
  
  it('should throw Invalid ID errors', async () =>  {        
    await expect(getItemById('invalid-id'))
    .rejects
    .toThrow("Invalid ID - Data does not exist");
});
});
