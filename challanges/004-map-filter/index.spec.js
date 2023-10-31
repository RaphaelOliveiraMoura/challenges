import { expect, test, describe } from "vitest";
import {
  filterEvenNumbers,
  filterStudents,
  mapStringToNumber,
  mapNumberEvenOdd,
  mapStudentName,
  mapValueTypes,
} from ".";

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

describe("mapear valores", () => {
  test("deve retornar uma lista de strings no formato numerico", () => {
    expect(mapStringToNumber(["5", "4", "7", "9"])).toEqual([5, 4, 7, 9]);
    expect(mapStringToNumber([])).toEqual([]);
    expect(mapStringToNumber(["0", "0", "0"])).toEqual([0, 0, 0]);
    expect(mapStringToNumber(["1"])).toEqual([1]);
  });

  test("recebe uma lista de numeros, e retorna uma nova lista com as strings 'par' para numeros pares, e 'impar' para numeros impares", () => {
    expect(mapNumberEvenOdd([4, 9, 2, 3, 4, 5])).toEqual([
      "par",
      "impar",
      "par",
      "impar",
      "par",
      "impar",
    ]);
    expect(mapNumberEvenOdd([2, 2, 2])).toEqual(["par", "par", "par"]);
    expect(mapNumberEvenOdd([])).toEqual([]);
  });

  test("recebe uma lista de alunos e retorna somente o nome do aluno em letra maiuscula", () => {
    expect(
      mapStudentName([
        { nome: "raphael", nota: 2 },
        { nome: "jessica", nota: 8 },
        { nome: "pedro", nota: 7 },
        { nome: "helena", nota: 10 },
      ])
    ).toEqual(["RAPHAEL", "JESSICA", "PEDRO", "HELENA"]);
  });

  test("recebe uma lista com o tipo de cada valor passado na lista", () => {
    expect(mapValueTypes(["texto", 2, {}, true, "", false])).toEqual([
      "string",
      "number",
      "object",
      "boolean",
      "string",
      "boolean",
    ]);
  });
});
