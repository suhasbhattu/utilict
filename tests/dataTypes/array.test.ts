import { describe, expect, test } from "@jest/globals";
import {
  minArray,
  maxArray,
  arrayProduct,
  arrayDifference,
  rotateArray,
  gcd,
  histogram,
  lcm,
  matrixAddition,
  matrixMultiplication,
  matrixSubtraction,
  mean,
  median,
  mode,
  removeDuplicates,
  rootMeanSquare,
  standardDeviation,
  variance,
  matrixTranspose,
  scalarMatrixMultiplication,
  matrixInverse,
  matrixAdjoint,
  matrixDeterminant,
  matrixFlatten,
} from "../../src";

describe("Array Tests", () => {
  test("Minimum Array", () => {
    expect(minArray([1, 3, 2, 6, 5, 8, 7, 0, 3])).toBe(0);
    expect(minArray([32, 67, 98, 23, 54, 61, 29, 74], 4)).toBe(54);
  });
  test("Maximum Array", () => {
    expect(maxArray([1, 3, 2, 6, 5, 8, 7, 0, 3])).toBe(8);
    expect(maxArray([32, 67, 98, 23, 54, 61, 29, 74], 4)).toBe(61);
  });
  test("Array Product", () => {
    expect(arrayProduct([2, 3, 6, 34, 90, 1])).toBe(110160);
    expect(arrayProduct([-34, -90, 45, 9, -3])).toBe(-3717900);
    expect(arrayProduct([90, 87, 0, -34, -900, -1245])).toBe(0);
    expect(arrayProduct([90, 87, 0, -34, 900, -1245])).toBe(0);
  });
  test("Array Difference", () => {
    expect(arrayDifference([1, 2, 2, 4, 3], [2, 4])).toStrictEqual([1, 2, 3]);
    expect(
      arrayDifference(["John", "Paul", "George", "Ringo"], ["John", "George"]),
    ).toStrictEqual(["Paul", "Ringo"]);
    expect(
      arrayDifference(
        [1, "String", true, { name: "Steven", age: 24 }],
        [true, 1],
      ),
    ).toStrictEqual(["String", { name: "Steven", age: 24 }]);
    expect(
      arrayDifference(
        [
          { name: "Steven", age: 24 },
          { name: "Alex", age: 54 },
        ],
        [
          { age: 24, name: "Steven" },
          { age: 43, name: "Alex" },
        ],
      ),
    ).toStrictEqual([{ name: "Alex", age: 54 }]);
    expect(
      arrayDifference([{ name: "Alex", age: 54 }], [{ age: 43 }]),
    ).toStrictEqual([{ name: "Alex", age: 54 }]);
    expect(
      arrayDifference(
        [{ name: "Alex", address: { city: "Wakanda" } }],
        [{ name: "Alex", address: { city: "Gotham" } }],
      ),
    ).toStrictEqual([{ name: "Alex", address: { city: "Wakanda" } }]);
  });
  test("Rotate Array", () => {
    const list = [1, 2, 3, 4, 5];
    rotateArray(list, 3);
    expect(list).toStrictEqual([3, 4, 5, 1, 2]);
    rotateArray(list, 3, "left");
    expect(list).toStrictEqual([1, 2, 3, 4, 5]);
    rotateArray(list, 126);
    expect(list).toStrictEqual([5, 1, 2, 3, 4]);
    rotateArray(list, 126, "left");
    expect(list).toStrictEqual([1, 2, 3, 4, 5]);
    rotateArray(list, -3);
    expect(list).toStrictEqual([4, 5, 1, 2, 3]);
    rotateArray(list, -123, "right");
    expect(list).toStrictEqual([2, 3, 4, 5, 1]);
    rotateArray(list, -1, "left");
    expect(list).toStrictEqual([1, 2, 3, 4, 5]);
  });
  test("Array Mean", () => {
    expect(mean([3, 5, 9, 5, 7, 2])).toBe(5.17);
    expect(mean([2, 6, 4, 5, 8])).toBe(5);
    expect(mean([4, 10, 16, 24], "geometric")).toBe(11.13);
    expect(mean([10, 25, 5, 30], "geometric")).toBe(13.92);
    expect(mean([1, 3, 5, 7], "harmonic")).toBe(2.39);
    expect(mean([10, 2, 4, 7], "harmonic")).toBe(4.03);
    expect(mean([1, 3, 5, 7, 9], "rms")).toBe(5.74);
    expect(mean([6, 5, 4, 2, 7], "rms")).toBe(5.1);
    expect(mean([2, 3, 5, 7, 11], "rms")).toBe(6.45);
  });
  test("Array Median", () => {
    expect(
      median([4, 12, 14, 17, 22, 23, 23, 24, 25, 29, 40, 67, 77, 82, 92]),
    ).toBe(24);
    expect(median([142, 140, 130, 150, 160, 135, 158, 132])).toBe(141);
  });
  test("Array Mode", () => {
    expect(mode([3, 3, 6, 9, 16, 16, 16, 27, 27, 37, 48])).toBe(16);
    expect(mode([3, 3, 3, 9, 16, 16, 16, 27, 37, 48])).toStrictEqual([3, 16]);
  });
  test("Root Mean Square", () => {
    expect(rootMeanSquare([1, 2, 3, 4, 5])).toBe(3.32);
    expect(rootMeanSquare([4, 6, 8, 10])).toBe(7.35);
  });
  test("Variance", () => {
    expect(variance([46, 69, 32, 60, 52, 41])).toBe(177.2);
    expect(variance([4, 2, 5, 8, 6])).toBe(5);
  });
  test("Standard Deviation", () => {
    expect(standardDeviation([46, 69, 32, 60, 52, 41])).toBe(13.31);
    expect(standardDeviation([4, 2, 5, 8, 6])).toBe(2.24);
  });
  test("Remove Duplicates", () => {
    expect(
      removeDuplicates([1, 2, 3, 3, 2, 1, 4, 5, 1, 5, 8, 3]),
    ).toStrictEqual([1, 2, 3, 4, 5, 8]);
    expect(removeDuplicates([52, 56, 41, 98, 52, 41, 109, 254])).toStrictEqual([
      52, 56, 41, 98, 109, 254,
    ]);
  });
  test("Histogram", () => {
    expect(histogram([3, 3, 3, 9, 16, 16, 16, 27, 37, 48])).toStrictEqual({
      "3": 3,
      "9": 1,
      "16": 3,
      "27": 1,
      "37": 1,
      "48": 1,
    });
    expect(histogram([30, 17, 63, 96, 46, 8, 96, 47, 17, 8])).toStrictEqual({
      "30": 1,
      "17": 2,
      "63": 1,
      "96": 2,
      "46": 1,
      "8": 2,
      "47": 1,
    });
  });
  test("Greatest Common Divisor", () => {
    expect(gcd([8, 12, 16])).toBe(4);
    expect(gcd([13, 17, 48, 91])).toBe(1);
    expect(gcd([108, 144])).toBe(36);
    expect(gcd([])).toBe(0);
  });
  test("Least Common Multiple", () => {
    expect(lcm([12, 18, 24])).toBe(72);
    expect(lcm([10, 12, 15, 75])).toBe(300);
    expect(lcm([])).toBe(0);
  });
  test("Matrix Addition", () => {
    expect(
      matrixAddition(
        [
          [2, 4, 3],
          [5, 7, 8],
          [9, 6, 7],
        ],
        [
          [3, 5, 7],
          [8, 3, 4],
          [5, 7, 8],
        ],
      ),
    ).toStrictEqual([
      [5, 9, 10],
      [13, 10, 12],
      [14, 13, 15],
    ]);
    expect(() => {
      matrixAddition(
        [
          [2, 5, 4],
          [4, 3, 6],
        ],
        [
          [1, 2, 3, 4],
          [7, 8, 9, 5],
        ],
      );
    }).toThrow("Order of both matrix are not same.");
  });
  test("Matrix Subtraction", () => {
    expect(
      matrixSubtraction(
        [
          [2, 4, 3],
          [5, 7, 8],
          [9, 6, 7],
        ],
        [
          [3, 5, 7],
          [8, 3, 4],
          [5, 7, 8],
        ],
      ),
    ).toStrictEqual([
      [-1, -1, -4],
      [-3, 4, 4],
      [4, -1, -1],
    ]);
    expect(() => {
      matrixSubtraction(
        [
          [2, 5, 4],
          [4, 3, 6],
        ],
        [
          [1, 2, 3, 4],
          [7, 8, 9, 5],
        ],
      );
    }).toThrow("Order of both matrix are not same.");
  });
  test("Matrix Multiplication", () => {
    expect(
      matrixMultiplication(
        [
          [1, 2, 3],
          [4, 5, 6],
        ],
        [
          [7, 8],
          [9, 10],
          [11, 12],
        ],
      ),
    ).toStrictEqual([
      [58, 64],
      [139, 154],
    ]);
    expect(matrixMultiplication([[4], [5], [6]], [[1, 2, 3]])).toStrictEqual([
      [4, 8, 12],
      [5, 10, 15],
      [6, 12, 18],
    ]);
    expect(() => {
      matrixMultiplication(
        [
          [1, 2],
          [5, 4],
        ],
        [
          [56, 43, 67],
          [65, 34, 89],
          [12, 34, 65],
        ],
      );
    }).toThrow(
      "Number of columns in first matrix should be same as number of rows in second matrix",
    );
  });
  test("Matrix Scalar Multiplication", () => {
    expect(
      scalarMatrixMultiplication(
        [
          [1, 6],
          [9, 3],
          [6, 0],
        ],
        -2,
      ),
    ).toStrictEqual([
      [-2, -12],
      [-18, -6],
      [-12, 0],
    ]);
  });
  test("Matrix Transpose", () => {
    expect(
      matrixTranspose([
        [1, 2, 3],
        [4, 5, 6],
        [7, 8, 9],
      ]),
    ).toStrictEqual([
      [1, 4, 7],
      [2, 5, 8],
      [3, 6, 9],
    ]);
    expect(
      matrixTranspose([
        [0, 4],
        [7, 0],
        [3, 1],
      ]),
    ).toStrictEqual([
      [0, 7, 3],
      [4, 0, 1],
    ]);
    expect(
      matrixTranspose(
        matrixTranspose([
          [0, 4],
          [7, 0],
          [3, 1],
        ]),
      ),
    ).toStrictEqual([
      [0, 4],
      [7, 0],
      [3, 1],
    ]);
  });
  test("Matrix Determinant", () => {
    expect(
      matrixDeterminant([
        [1, 2, 1],
        [0, 3, 4],
        [3, 1, 4],
      ]),
    ).toBe(23);
    expect(
      matrixDeterminant([
        [1, 0, 3],
        [-1, -1, -3],
        [0, 0, 6],
      ]),
    ).toBe(-6);
    expect(() =>
      matrixDeterminant([
        [1, 2, -1],
        [0, 3, 4],
      ]),
    ).toThrow(
      "Given matrix is not a square matrix, determinant cannot be calculated.",
    );
  });
  test("Matrix Adjoint", () => {
    expect(
      matrixAdjoint([
        [1, 2, 3],
        [4, 5, 6],
        [7, 8, 9],
      ]),
    ).toStrictEqual([
      [-3, 6, -3],
      [6, -12, 6],
      [-3, 6, -3],
    ]);
    expect(
      matrixAdjoint([
        [5, -2, 2, 7],
        [1, 0, 0, 3],
        [-3, 1, 5, 0],
        [3, -1, -9, 4],
      ]),
    ).toStrictEqual([
      [-12, 76, -60, -36],
      [-56, 208, -82, -58],
      [4, 4, -2, -10],
      [4, 4, 20, 12],
    ]);
    expect(() =>
      matrixAdjoint([
        [1, 0, 0, 3],
        [3, 2, 4, 5],
      ]),
    ).toThrow(
      "Given matrix is not a square matrix, adjoint cannot be calculated.",
    );
  });
  test("Matrix Inverse", () => {
    expect(
      matrixInverse([
        [1, 2, 3],
        [0, 1, 4],
        [5, 6, 0],
      ]),
    ).toStrictEqual([
      [-24, 18, 5],
      [20, -15, -4],
      [-5, 4, 1],
    ]);
    expect(
      matrixMultiplication(
        [
          [1, 2, 3],
          [0, 1, 4],
          [5, 6, 0],
        ],
        [
          [-24, 18, 5],
          [20, -15, -4],
          [-5, 4, 1],
        ],
      ),
    ).toStrictEqual([
      [1, 0, 0],
      [0, 1, 0],
      [0, 0, 1],
    ]);
    expect(
      matrixInverse([
        [0, 0, -1, 2],
        [0, 1, 0, 0],
        [9, 0, 0, 0],
        [0, 0, 0, 1],
      ]),
    ).toStrictEqual([
      [0, 0, 0.111111, 0],
      [0, 1, 0, 0],
      [-1, 0, 0, 2],
      [0, 0, 0, 1],
    ]);
    expect(
      matrixInverse([
        [5, -2, 2, 7],
        [1, 0, 0, 3],
        [-3, 1, 5, 0],
        [3, -1, -9, 4],
      ]),
    ).toStrictEqual([
      [-0.136364, 0.863636, -0.681818, -0.409091],
      [-0.636364, 2.363636, -0.931818, -0.659091],
      [0.045455, 0.045455, -0.022727, -0.113636],
      [0.045455, 0.045455, 0.227273, 0.136364],
    ]);
    expect(() =>
      matrixInverse([
        [1, 0, 0, 3],
        [3, 2, 4, 5],
      ]),
    ).toThrow(
      "Given matrix is not a square matrix, inverse cannot be calculated.",
    );
    expect(() =>
      matrixInverse([
        [2, 1, -1],
        [1, 0, 1],
        [2, 1, -1],
      ]),
    ).toThrow("This is a singular matrix, cannot find its inverse!!");
    expect(matrixInverse([[5]])).toStrictEqual([[0.2]]);
  });
  test("Matrix Flatten", () => {
    expect(matrixFlatten([0, 1, 2, [3, 4]])).toStrictEqual([0, 1, 2, 3, 4]);
    expect(matrixFlatten([0, 1, [2, [3, [4, 5]]]])).toStrictEqual([
      0, 1, 2, 3, 4, 5,
    ]);
    expect(
      matrixFlatten([
        [1, 2, 3],
        [0, 1, 4],
        [5, 6, 0],
      ]),
    ).toStrictEqual([1, 2, 3, 0, 1, 4, 5, 6, 0]);
  });
});
