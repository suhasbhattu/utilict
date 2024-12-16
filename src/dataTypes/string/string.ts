import { sort } from "../../utils/utils";

/**
 * Reverses the given string. It doesn't perform in place reverse but returns a new reverse string.
 * @param string
 * @returns the reversed string.
 */
export const reverseString = (string: string): string => {
  let reverse = "";
  let i = string.length - 1;
  while (i >= 0) {
    reverse += string[i];
    i--;
  }
  return reverse;
};

/**
 * Checks if the given string is a palindrome or not
 * @param string
 * @returns 'true' if string is palindrome, otherwise 'false'.
 */
export const isStringPalindrome = (string: string): boolean => {
  let i = 0;
  let j = string.length - 1;
  while (i <= j) {
    if (string[i] !== string[j]) {
      return false;
    }
    i++;
    j--;
  }
  return true;
};

/**
 * Returns a list of words in the given sentence. It will ignore spaces, special characters in the sentence.
 * @param string
 * @returns The list of all the words in the given sentence.
 */
export const getWords = (string: string): string[] => {
  if (string.length === 0) {
    return [];
  }
  const matches = string.match(/\b\S+\b/g);
  return matches ?? [];
};

/**
 * Returns the count of substring occurrence in the given string. This will not include the overlapped substring match. Also, the occurrence match is case-sensitive.
 * @param string
 * @param substring
 * @returns The occurrence count of `substring` in the `string`;
 */
export const stringCount = (string: string, substring: string): number => {
  const regExp = new RegExp(`${substring}`, "g");
  return (string.match(regExp) || []).length;
};

/**
 * This makes the first letter of the string in the uppercase and rest of the string in the lowercase.
 * @param string
 * @returns The capitalized string.
 */
export const capitalize = (string: string): string => {
  if (string.length === 0) {
    return string;
  }
  const firstChar = string[0];
  return firstChar.toUpperCase() + string.slice(1).toLowerCase();
};

/**
 * This makes the first letter of each word in the string or the sentence in the uppercase.
 * @param string
 * @returns The string in the title case.
 */
export const titleCase = (string: string): string => {
  if (string.length === 0) {
    return "";
  }
  return string.replace(
    /\b\S+\b/g,
    (text) => text.charAt(0).toUpperCase() + text.substring(1).toLowerCase(),
  );
};

/**
 * Sort the given string in ascending and descending order
 * @param string
 * @param descending
 * @returns Sorted string
 */
export const sortString = (string: string, descending?: boolean): string => {
  const array = [...string];
  sort(array, descending);
  return array.join("");
};
