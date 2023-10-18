import { expect, test, describe } from "vitest";
import { length, push, pop, clear, arrayMultipliedBy2 } from ".";

describe("length", () => {
  test("deve retornar o tamanho de uma lista", () => {
    expect(length([1, 2, 3])).toEqual(3);
    expect(length([1, 2, 3, 4, 5])).toEqual(5);
    expect(length([])).toEqual(0);
  });
});

describe("push", () => {
  test("deve inserir um item no final da lista", () => {
    expect(push([1, 2, 3], 5)).toEqual([1, 2, 3, 5]);
    expect(push([], 8)).toEqual([8]);
    expect(push([1, 0, 1, 0, 1], 8)).toEqual([1, 0, 1, 0, 1, 8]);
  });
});

describe("pop", () => {
  test("deve remover o ultimo item da lista", () => {
    expect(pop([1, 2, 3])).toEqual([1, 2]);
    expect(pop([1, 2, 3, 4, 5])).toEqual([1, 2, 3, 4]);
    expect(pop([])).toEqual([]);
  });
});

describe("clear", () => {
  test("deve remover todos os itens da lista", () => {
    expect(clear([1, 2, 3])).toEqual([]);
    expect(clear([1, 2, 3, 4, 5])).toEqual([]);
    expect(clear([])).toEqual([]);
  });
});

describe("arrayMultipliedBy2", () => {
  test("deve multiplicar todos os itens da lista por 2", () => {
    expect(arrayMultipliedBy2([2, 4, 8, 10])).toEqual([4, 8, 16, 20]);
    expect(arrayMultipliedBy2([1, 1, 2])).toEqual([2, 2, 4]);
    expect(arrayMultipliedBy2([])).toEqual([]);
  });
});
