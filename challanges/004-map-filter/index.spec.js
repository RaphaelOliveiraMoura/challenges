import { expect, test, describe } from "vitest";
import { filterEvenNumbers, filterStudents } from ".";

describe("filtrar valores", () => {
  test("deve filtrar uma lista de numeros, somente com valores pares", () => {
    expect(filterEvenNumbers([1, 5, 8, 10, 6, 3, 4, 5])).toEqual([8, 10, 6, 4]);
    expect(filterEvenNumbers([])).toEqual([]);
    expect(filterEvenNumbers([3, 3, 5, 7, 7, 9])).toEqual([]);
    expect(filterEvenNumbers([2, 2, 2, 2, 2])).toEqual([2, 2, 2, 2, 2]);
  });

  test("deve filtrar uma lista de alunos, somente alunos com nota maior que 7", () => {
    expect(
      filterStudents([
        { nome: "raphael", nota: 2 },
        { nome: "jessica", nota: 8 },
        { nome: "pedro", nota: 7 },
        { nome: "helena", nota: 10 },
      ])
    ).toEqual([
      { nome: "jessica", nota: 8 },
      { nome: "helena", nota: 10 },
    ]);
  });
});
