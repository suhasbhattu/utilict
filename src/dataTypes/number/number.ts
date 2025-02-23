/**
 * Returns the reverse of the given number.
 * @param number
 * @returns the reversed number.
 */
export const reverseNumber = (number: number): number => {
  let reverse = 0;
  const isNegative = number < 0;
  if (isNegative) {
    number *= -1;
  }
  while (number !== 0) {
    const remainder = number % 10;
    reverse = reverse * 10 + remainder;
    number = Math.floor(number / 10);
  }
  if (isNegative) {
    reverse *= -1;
  }
  return reverse;
};

/**
 * Checks if the number is prime or not.
 * @param number
 * @returns 'true' if number is prime, otherwise 'false'.
 */
export const isPrime = (number: number): boolean => {
  if (number < 2) {
    return false;
  }
  let i = 2;
  while (i * i < number) {
    if (number % i === 0) {
      return false;
    }
    i++;
  }
  return true;
};

/**
 * Checks if the given number is palindrome or not.
 * @param number
 * @returns 'true' if number is palindrome, otherwise 'false'.
 */
export const isNumberPalindrome = (number: number): boolean => {
  if (number < 0) {
    return false;
  }
  return reverseNumber(number) === number;
};

/**
 * Returns the factorial of the given number.
 * @param number
 * @returns The factorial of the number.
 */
export const factorial = (number: number): number => {
  if (number < 0) {
    throw new Error("Factorial of the negative number cannot be defined.");
  }
  if (number === 0) {
    return 1;
  } else {
    return number * factorial(number - 1);
  }
};

/**
 * Returns the number of ways `k` items can be arranged from a set of `n` items. The order of the arrangement matters here.
 * @param n The set of items.
 * @param k The number of items out of `n` which needs to be arranged.
 * @returns The possible number of arrangements formed by selecting `k` items from a set of `n` items.
 */
export const permutations = (n: number, k: number): number => {
  if (k > n) {
    throw new Error("Value of `k` must be smaller than or equal to `n`.");
  }
  return factorial(n) / factorial(n - k);
};

/**
 * Returns the number of ways `k` items can be selected from a set of `n` items. The order of the selection doesn't matter here.
 * @param n The set of items.
 * @param k The number of items out of `n` which needs to be selected.
 * @returns The possible ways of selecting `k` items from a set of `n` items.
 */
export const combinations = (n: number, k: number): number => {
  if (k > n) {
    throw new Error("Value of `k` must be smaller than or equal to `n`.");
  }
  return factorial(n) / (factorial(k) * factorial(n - k));
};

const decimalChangeBase = (
  n: number,
  base: "binary" | "octal" | "hexadecimal",
): string => {
  let baseNum = 10;
  switch (base) {
    case "binary":
      baseNum = 2;
      break;
    case "octal":
      baseNum = 8;
      break;
    case "hexadecimal":
      baseNum = 16;
      break;
  }
  return n.toString(baseNum);
};

const binaryChangeBase = (
  n: string,
  base: "decimal" | "octal" | "hexadecimal",
): number | string => {
  let result: number | string = -1;
  switch (base) {
    case "decimal":
      result = parseInt(n, 2);
      break;
    case "octal":
      result = parseInt(n, 2).toString(8);
      break;
    case "hexadecimal":
      result = parseInt(n, 2).toString(16);
      break;
  }
  return result;
};

const octalChangeBase = (
  n: string,
  base: "decimal" | "binary" | "hexadecimal",
): number | string => {
  let result: number | string = -1;
  switch (base) {
    case "decimal":
      result = parseInt(n, 8);
      break;
    case "binary":
      result = parseInt(n, 8).toString(2);
      break;
    case "hexadecimal":
      result = parseInt(n, 8).toString(16);
      break;
  }
  return result;
};

const hexadecimalChangeBase = (
  n: string,
  base: "decimal" | "binary" | "octal",
): number | string => {
  let result: number | string = -1;
  switch (base) {
    case "decimal":
      result = parseInt(n, 16);
      break;
    case "binary":
      result = parseInt(n, 16).toString(2);
      break;
    case "octal":
      result = parseInt(n, 16).toString(8);
      break;
  }
  return result;
};

/**
 * Changes the base of the given number or string to the other base.
 * @param number This can be a decimal number or binary/octal/hexadecimal string.
 * @param sourceBase The base of the given number.
 * @param targetBase The base which the given number should get converted to.
 * @returns The converted number or string.
 */
export const changeBase = (
  number: number | string,
  sourceBase: "decimal" | "binary" | "octal" | "hexadecimal",
  targetBase: "decimal" | "binary" | "octal" | "hexadecimal",
): number | string | void => {
  if (sourceBase === targetBase) {
    return number;
  }
  if (
    sourceBase === "decimal" &&
    targetBase !== "decimal" &&
    typeof number === "number"
  ) {
    return decimalChangeBase(number, targetBase);
  } else if (
    sourceBase === "binary" &&
    targetBase !== "binary" &&
    typeof number === "string"
  ) {
    if (!/^[01]+$/.test(number)) {
      throw new Error(
        "The given string is not a valid binary. It should contain only 0s and 1s.",
      );
    } else {
      return binaryChangeBase(number, targetBase);
    }
  } else if (
    sourceBase === "octal" &&
    targetBase !== "octal" &&
    typeof number === "string"
  ) {
    if (!/^[0-7]+$/.test(number)) {
      throw new Error(
        "The given string is not a valid octal. It should contain numbers in the range [0-7].",
      );
    } else {
      return octalChangeBase(number, targetBase);
    }
  } else if (
    sourceBase === "hexadecimal" &&
    targetBase !== "hexadecimal" &&
    typeof number === "string"
  ) {
    if (!/^[0-9a-fA-F]+$/.test(number)) {
      throw new Error(
        "The given string is not a valid hexadecimal. It should contain numbers in the range [0-9] and alphabets in the range [a-f] or [A-F].",
      );
    } else {
      return hexadecimalChangeBase(number, targetBase);
    }
  }
};

/**
 * Calculates the distance between given two coordinates.
 * @param x1 x cordinate of the first point.
 * @param y1 y cordinate of the first point.
 * @param x2 x cordinate of the second point.
 * @param y2 y cordinate of the second point.
 * @returns The distance between two points.
 */
export const distance = (x1: number, y1: number, x2: number, y2: number) => {
  const xDifference = x2 - x1;
  const yDifference = y2 - y1;
  return Math.sqrt(xDifference * xDifference + yDifference * yDifference);
};
