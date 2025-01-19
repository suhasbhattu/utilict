import { describe, expect, test } from "@jest/globals";
import { ComplexNumber } from "../../src";

describe("Complex Number", () => {
  test("Complex Number Operations", () => {
    const complexNumber = new ComplexNumber(3, 2);
    complexNumber.add(new ComplexNumber(1, 7));
    expect(complexNumber.getReal()).toBe(4);
    expect(complexNumber.getImag()).toBe(9);
    complexNumber.add(new ComplexNumber(4, -3));
    expect(complexNumber.getReal()).toBe(8);
    expect(complexNumber.getImag()).toBe(6);
    complexNumber.subtract(new ComplexNumber(9, 8));
    expect(complexNumber.getReal()).toBe(-1);
    expect(complexNumber.getImag()).toBe(-2);
    const complexNumber2 = new ComplexNumber(3, 2);
    complexNumber2.multiply(new ComplexNumber(1, 7));
    expect(complexNumber2.getReal()).toBe(-11);
    expect(complexNumber2.getImag()).toBe(23);
    const complexNumber3 = new ComplexNumber(1, 1);
    complexNumber3.multiply(new ComplexNumber(1, 1));
    expect(complexNumber3.getReal()).toBe(0);
    expect(complexNumber3.getImag()).toBe(2);
    const complexNumber4 = new ComplexNumber(2, 3);
    complexNumber4.divide(new ComplexNumber(4, -5));
    expect(complexNumber4.getReal()).toBe(-0.17073);
    expect(complexNumber4.getImag()).toBe(0.53659);
  });
});
