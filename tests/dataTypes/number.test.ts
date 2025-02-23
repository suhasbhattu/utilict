import { describe, expect, test } from "@jest/globals";
import {
  reverseNumber,
  isPrime,
  isNumberPalindrome,
  factorial,
  permutations,
  combinations,
  changeBase,
  distance,
} from "../../src";

describe("Number Tests", () => {
  test("Reverse Number", () => {
    expect(reverseNumber(132)).toBe(231);
    expect(reverseNumber(-9658)).toBe(-8569);
    expect(reverseNumber(25000)).toBe(52);
  });
  test("Prime Number", () => {
    expect(isPrime(23)).toBe(true);
    expect(isPrime(-9658)).toBe(false);
    expect(isPrime(91)).toBe(false);
    expect(isPrime(992)).toBe(false);
    expect(isPrime(100237)).toBe(true);
  });
  test("Palindrome Number", () => {
    expect(isNumberPalindrome(23632)).toBe(true);
    expect(isNumberPalindrome(-23632)).toBe(false);
    expect(isNumberPalindrome(23)).toBe(false);
    expect(isNumberPalindrome(5)).toBe(true);
  });
  test("Factorial", () => {
    expect(factorial(5)).toBe(120);
    expect(factorial(15)).toBe(1307674368000);
    expect(() => factorial(-23)).toThrow(
      "Factorial of the negative number cannot be defined.",
    );
  });
  test("Permutations", () => {
    expect(permutations(5, 2)).toBe(20);
    expect(permutations(12, 2)).toBe(132);
    expect(() => permutations(5, 8)).toThrow(
      "Value of `k` must be smaller than or equal to `n`.",
    );
  });
  test("Combinations", () => {
    expect(combinations(5, 2)).toBe(10);
    expect(combinations(12, 2)).toBe(66);
    expect(() => combinations(5, 8)).toThrow(
      "Value of `k` must be smaller than or equal to `n`.",
    );
  });
  test("Change Base", () => {
    expect(changeBase(12, "decimal", "binary")).toBe("1100");
    expect(changeBase(12, "decimal", "octal")).toBe("14");
    expect(changeBase(12, "decimal", "hexadecimal")).toBe("c");
    expect(changeBase(12, "decimal", "decimal")).toBe(12);
    expect(changeBase("1111111111111111", "binary", "decimal")).toBe(65535);
    expect(changeBase("1111111111111111", "binary", "octal")).toBe("177777");
    expect(changeBase("1111111111111111", "binary", "hexadecimal")).toBe(
      "ffff",
    );
    expect(changeBase("462445", "octal", "decimal")).toBe(156965);
    expect(changeBase("462445", "octal", "binary")).toBe("100110010100100101");
    expect(changeBase("462445", "octal", "hexadecimal")).toBe("26525");
    expect(changeBase("A1178", "hexadecimal", "decimal")).toBe(659832);
    expect(changeBase("A1178", "hexadecimal", "binary")).toBe(
      "10100001000101111000",
    );
    expect(changeBase("A1178", "hexadecimal", "octal")).toBe("2410570");
    expect(() => changeBase("1201101010", "binary", "decimal")).toThrow(
      "The given string is not a valid binary. It should contain only 0s and 1s.",
    );
    expect(() => {
      changeBase("2189075", "octal", "decimal");
    }).toThrow(
      "The given string is not a valid octal. It should contain numbers in the range [0-7].",
    );
    expect(() => {
      changeBase("21GH9075", "hexadecimal", "decimal");
    }).toThrow(
      "The given string is not a valid hexadecimal. It should contain numbers in the range [0-9] and alphabets in the range [a-f] or [A-F].",
    );
    expect(distance(2, 2, 2, 5)).toBe(3);
    expect(distance(1, 1, 2, 2)).toBe(1.4142135623730951);
    expect(distance(-2, 2, 5, -7)).toBe(11.40175425099138);
  });
});
