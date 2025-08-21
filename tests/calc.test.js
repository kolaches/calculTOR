import { describe, it, expect } from "vitest";
import { add } from "../src/calc.js";

describe("add()", () => {
  it("складывает числа", () => {
    expect(add(2, 3)).toBe(5);
    expect(add("10", "5")).toBe(15);
  });

  it("бросает ошибку при неверном вводе", () => {
    expect(() => add("a", 1)).toThrow();
  });
});