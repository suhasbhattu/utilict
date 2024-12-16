import { describe, expect, test } from "@jest/globals";
import {
  capitalize,
  getWords,
  isStringPalindrome,
  reverseString,
  sortString,
  stringCount,
  titleCase,
} from "../../src";

describe("String tests", () => {
  test("Reverse String", () => {
    expect(reverseString("JavaScript")).toBe("tpircSavaJ");
    expect(reverseString("Gravitational Force")).toBe("ecroF lanoitativarG");
  });
  test("Palindrome String", () => {
    expect(isStringPalindrome("madam")).toBe(true);
    expect(isStringPalindrome("Physics")).toBe(false);
  });
  test("Get Words", () => {
    expect(getWords("")).toStrictEqual([]);
    expect(getWords("///>>??")).toStrictEqual([]);
    expect(
      getWords("Lorem ipsum dolor sit amet, consectetur adipiscing elit"),
    ).toStrictEqual([
      "Lorem",
      "ipsum",
      "dolor",
      "sit",
      "amet",
      "consectetur",
      "adipiscing",
      "elit",
    ]);
    expect(
      getWords(
        "To be, or not to be, that is the question: Whether 'tis nobler in the mind to suffer The slings and arrows of outrageous fortune",
      ),
    ).toStrictEqual([
      "To",
      "be",
      "or",
      "not",
      "to",
      "be",
      "that",
      "is",
      "the",
      "question",
      "Whether",
      "tis",
      "nobler",
      "in",
      "the",
      "mind",
      "to",
      "suffer",
      "The",
      "slings",
      "and",
      "arrows",
      "of",
      "outrageous",
      "fortune",
    ]);
  });
  test("String Count", () => {
    expect(stringCount("This is it.", "is")).toBe(2);
    expect(stringCount("Real eyes realise real lies.", "real")).toBe(2);
    expect(stringCount("Teamwork", "I")).toBe(0);
  });
  test("Capitalize String", () => {
    expect(capitalize("pizza with cheese toppings in the Venice, Italy.")).toBe(
      "Pizza with cheese toppings in the venice, italy.",
    );
    expect(capitalize("")).toBe("");
  });
  test("Title Case", () => {
    expect(titleCase("pizza with cheese toppings in the Venice, Italy.")).toBe(
      "Pizza With Cheese Toppings In The Venice, Italy.",
    );
    expect(titleCase("")).toBe("");
  });
  test("Sort String", () => {
    expect(sortString("mississippi")).toBe("iiiimppssss");
    expect(sortString("structure", true)).toBe("uuttsrrec");
    expect(sortString("vision-2040")).toBe("-0024iinosv");
  });
});
