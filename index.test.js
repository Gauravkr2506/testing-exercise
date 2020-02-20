const { describe, it, expect, matchers } = require("./index");

const Adder = (...arr) => arr.reduce((a, v) => a + v);
describe("Adder", () => {
  it("add three numbers", () => {
    const result = Adder(1, 2, 3);
    expect(result).toBe(6);
  });
});

const Subtracter = (a, b) => a - b;
describe("Subtracter", () => {
  it("subtract 3 from 5", () => {
    const result = Subtracter(5, 3);
    expect(result).toBe(2);
  });
});

const Divider = (a, b) => a / b;
describe("Divider", () => {
  it("divide 6 by 2", () => {
    const result = Divider(6, 2);
    expect(result).toBe(3);
  });
});

const Multiplier = (a, b) => a * b;
describe("Multiplier", () => {
  it("multiply 6 by 2", () => {
    const result = Multiplier(6, 2);
    expect(result).toBe(12);
  });
});
