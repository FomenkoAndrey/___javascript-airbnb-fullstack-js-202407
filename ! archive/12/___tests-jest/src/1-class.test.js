import { Calculator } from "./1-class";

let calculator;

beforeEach(() => {
  calculator = new Calculator();
});

describe("Calculator", () => {
  test("adds 1 + 2 to equal 3", () => {
    expect(calculator.add(1, 2)).toBe(3);
  });

  test("subtracts 2 - 1 to equal 1", () => {
    expect(calculator.subtract(2, 1)).toBe(1);
  });

  test("multiplies 2 * 3 to equal 6", () => {
    expect(calculator.multiply(2, 3)).toBe(6);
  });

  test("divides 6 / 2 to equal 3", () => {
    expect(calculator.divide(6, 2)).toBe(3);
  });

  test("throws an error when dividing by zero", () => {
    expect(() => calculator.divide(6, 0)).toThrow("Cannot divide by zero");
  })
});
