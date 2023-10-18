import { expect, test, describe } from "vitest";
import { sum } from ".";

describe("sum", () => {
  test("somar dois valores inteiros", () => {
    expect(sum(1, 2)).toEqual(3);
    expect(sum(2, 2)).toEqual(4);
    expect(sum(1, -2)).toEqual(-1);
    expect(sum(-1, -2)).toEqual(-3);
  });

  test("passando valores não numéricos", () => {
    expect(sum(null, null)).toEqual(null);
    expect(sum(undefined, 2)).toEqual(null);
    expect(sum({}, true)).toEqual(null);
    expect(sum(false, false)).toEqual(null);
    expect(sum(1, false)).toEqual(null);
  });
});
