import { expect, test, describe } from "vitest";
import { lowercase, uppercase, toArray } from ".";

describe("lowercase", () => {
  test("transformar um texto em letras minusculas", () => {
    expect(lowercase("Raphael")).toEqual("raphael");
    expect(lowercase("RAPHAEL")).toEqual("raphael");
    expect(lowercase("raphael")).toEqual("raphael");
  });
});

describe("uppercase", () => {
  test("transformar um texto em letras maiusculas", () => {
    expect(uppercase("Raphael")).toEqual("RAPHAEL");
    expect(uppercase("RAPHAEL")).toEqual("RAPHAEL");
    expect(uppercase("raphael")).toEqual("RAPHAEL");
  });
});

describe("toArray", () => {
  test("transformar um texto em uma lista", () => {
    expect(toArray("Raphael")).toEqual(["R", "a", "p", "h", "a", "e", "l"]);
    expect(toArray("texto com espaço")).toEqual([
      "t",
      "e",
      "x",
      "t",
      "o",
      " ",
      "c",
      "o",
      "m",
      " ",
      "e",
      "s",
      "p",
      "a",
      "ç",
      "o",
    ]);
  });
});
