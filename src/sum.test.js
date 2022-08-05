function sum(a, b) {
    return a + b;
  }
  export { Sum };

import { Divide, Multiply, Sum } from "./Sum";
import { Subtract } from "./Subtract";

test('adds 1 + 2 to equal 3', () => {
  expect(sum("1", "2")).toBe("12");
});

test('subtract 5 - 3 to equal to 2', () => {
    expect(Subtract(5, 3)).toBe(2);
})

test('divide 8 / 2 to equal to 4', () => {
    expect(Divide(8, 2)).toBe(4);
})

test("Multiply 4 * 4 equal to 16", () => {
    expect(Multiply("4","4")).toBe(16);
})