const compareNumbers = (number1: number, number2: number): number => {
  if (number1 < number2) {
    return -1;
  } else if (number1 > number2) {
    return 1;
  } else {
    return 0;
  }
};

const compareStrings = (string1: string, string2: string) => {
  return string1.toLowerCase().localeCompare(string2.toLowerCase());
};

const compareBoolean = (flag1: boolean, flag2: boolean): boolean => {
  return flag1 === flag2;
};

const compareArrays = (arr1: any[], arr2: any[]) => {
  if (arr1.length !== arr2.length) {
    return false;
  } else {
    for (let i = 0; i < arr1.length; i++) {
      if (typeof arr1[i] !== typeof arr2[i]) {
        return false;
      }
      if (
        (typeof arr1[i] === "number" &&
          typeof arr2[i] === "number" &&
          compareNumbers(arr1[i], arr2[i]) !== 0) ||
        (typeof arr1[i] === "string" &&
          typeof arr2[i] === "string" &&
          compareStrings(arr1[i], arr2[i]) !== 0) ||
        (typeof arr1[i] === "boolean" &&
          typeof arr2[i] === "boolean" &&
          !compareBoolean(arr1[i], arr2[i])) ||
        (Array.isArray(arr1[i]) &&
          Array.isArray(arr2[i]) &&
          !compareArrays(arr1[i], arr2[i])) ||
        (typeof arr1[i] === "object" &&
          typeof arr2[i] === "object" &&
          !compareObjects(arr1[i], arr2[i]))
      ) {
        return false;
      }
    }
  }
  return true;
};

const compareObjects = (obj1: any, obj2: any): boolean => {
  const result = true;
  const keys1 = Object.keys(obj1);
  const keys2 = Object.keys(obj2);
  if (keys1.length !== keys2.length) {
    return false;
  }
  for (const key of keys1) {
    if (
      obj2[key] == null ||
      (typeof obj1[key] === "number" &&
        typeof obj2[key] === "number" &&
        compareNumbers(obj1[key], obj2[key]) !== 0) ||
      (typeof obj1[key] === "string" &&
        typeof obj2[key] === "string" &&
        compareStrings(obj1[key], obj2[key]) !== 0) ||
      (typeof obj1[key] === "boolean" &&
        typeof obj2[key] === "boolean" &&
        compareBoolean(obj1[key], obj2[key])) ||
      (Array.isArray(obj1[key]) &&
        Array.isArray(obj2[key]) &&
        !compareArrays(obj1[key], obj2[key])) ||
      (typeof obj1[key] === "object" &&
        typeof obj2[key] === "object" &&
        !compareObjects(obj1[key], obj2[key]))
    ) {
      return false;
    }
  }
  return result;
};

const compare = (item1: any, item2: any) => {
  if (typeof item1 === "number" && typeof item2 === "number") {
    return compareNumbers(item1, item2);
  } else if (typeof item1 === "string" && typeof item2 === "string") {
    return compareStrings(item1, item2);
  } else if (typeof item1 === "boolean" && typeof item2 === "boolean") {
    return compareBoolean(item1, item2);
  } else if (Array.isArray(item1) && Array.isArray(item2)) {
    return compareArrays(item1, item2);
  } else if (typeof item1 === "object" && typeof item2 === "object") {
    return compareObjects(item1, item2);
  }
};

export const isEqual = (item1: any, item2: any) => {
  if (typeof item1 !== typeof item2) {
    return false;
  }
  if (typeof item1 === "number" && typeof item2 === "number") {
    return compareNumbers(item1, item2) === 0;
  } else if (typeof item1 === "string" && typeof item2 === "string") {
    return compareStrings(item1, item2) === 0;
  } else if (typeof item1 === "boolean" && typeof item2 === "boolean") {
    return compareBoolean(item1, item2);
  } else if (Array.isArray(item1) && Array.isArray(item2)) {
    return compareArrays(item1, item2);
  } else if (typeof item1 === "object" && typeof item2 === "object") {
    return compareObjects(item1, item2);
  }
};

const cloneObject = (object: any) => {
  const clonedObject: any = {};
  const keys = Object.keys(object);
  for (const key of keys) {
    clonedObject[key] = clone(object[key]);
  }
  return clonedObject;
};

const cloneArray = (array: any[]) => {
  const clonedArray: any[] = [];
  const length = array.length;
  for (let index = 0; index < length; index++) {
    const element = array[index];
    clonedArray.push(clone(element));
  }
  return clonedArray;
};

export const clone = (item: any) => {
  if (
    typeof item === "number" ||
    typeof item === "string" ||
    typeof item === "boolean"
  ) {
    return item;
  } else if (Array.isArray(item)) {
    return cloneArray(item);
  } else if (typeof item === "object") {
    return cloneObject(item);
  }
};

const merge = (
  list: any[],
  p: number,
  q: number,
  r: number,
  descending?: boolean,
) => {
  const n1 = q - p + 1;
  const n2 = r - q;
  const left = new Array(n1);
  const right = new Array(n2);

  for (let index = 0; index < n1; index++) {
    left[index] = list[p + index];
  }
  for (let index = 0; index < n2; index++) {
    right[index] = list[q + 1 + index];
  }

  let i = 0;
  let j = 0;
  let k = p;

  while (i < n1 && j < n2) {
    const comparison =
      descending != null && descending
        ? compare(left[i], right[j]) === 1
        : compare(left[i], right[j]) === -1 || compare(left[i], right[j]) === 0;
    if (comparison) {
      list[k] = left[i];
      i++;
    } else {
      list[k] = right[j];
      j++;
    }
    k++;
  }

  while (i < n1) {
    list[k] = left[i];
    i++;
    k++;
  }

  while (j < n2) {
    list[k] = right[j];
    j++;
    k++;
  }
};

const mergeSortFunction = (
  list: any[],
  left: number,
  right: number,
  descending?: boolean,
) => {
  if (left < right) {
    const mid = Math.floor(left + (right - left) / 2);
    mergeSortFunction(list, left, mid, descending);
    mergeSortFunction(list, mid + 1, right, descending);
    merge(list, left, mid, right, descending);
  }
};

/**
 * Performs Sort on List
 * @param list List to be sorted
 * @param descending Sorting order, by default is ascending
 */
export const sort = (list: any[], descending?: boolean) => {
  mergeSortFunction(list, 0, list.length - 1, descending);
};
