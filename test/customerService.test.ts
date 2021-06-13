import { dbDeleteRecord } from "../src/db/db";
import { addCustomer, getCustomerById } from "../src/services/customerService";

describe("test addCustomer()", () => {
  it("should add a Customer to the DB", async () => {
    const result = await addCustomer(
      'test_email@test.com',
      'test_given_name',
      'test_full_name'
    )

    try {
      expect(typeof result).toBe('string')  
    } finally {
      await dbDeleteRecord(`DELETE FROM customers WHERE id='${result}';`)
    }
  });

  it("should not add a Customer to the DB if they exist already", async () => {
    const result = await addCustomer(
      'natalie@example.com',
      'Natalie',
      'Cook'
    )
    
    expect(result).toStrictEqual(false)
  });
});

describe("test getCustomerById()", () => {
  it("should return true if Customer exists, false if not", async () => {
    const result = await getCustomerById(
      'test_two_email@test.com',
      'test_two_given_name',
      'test_two_full_name'
    )
    const resultTwo = await getCustomerById(
      'natalie@example.com',
      'Natalie',
      'Cook'
    )
    
    expect(result).toStrictEqual(false)
    expect(resultTwo).toStrictEqual(true)
  });
});
