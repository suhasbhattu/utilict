export class ComplexNumber {
  private real: number;
  private imag: number;

  constructor(real: number, imag: number) {
    this.real = real;
    this.imag = imag;
  }

  /**
   * Get the real part of the complex number.
   */
  getReal() {
    return this.real;
  }

  /**
   * Set the real part to the complex number.
   * @param real
   */
  setReal(real: number) {
    this.real = real;
  }

  /**
   * Get the imaginary part of the complex number.
   */
  getImag() {
    return this.imag;
  }

  /**
   * Set the imaginary part to the complex number.
   * @param imag
   */
  setImag(imag: number) {
    this.imag = imag;
  }

  /**
   * Adds the complex number to this one and set the real and imaginary part to this.
   * @param complexNumber Another complex number
   */
  add(complexNumber: ComplexNumber) {
    this.setReal(this.getReal() + complexNumber.getReal());
    this.setImag(this.getImag() + complexNumber.getImag());
  }

  /**
   * Subtract the complex number from this one and sets the real and imaginary part to this.
   * @param complexNumber Another complex number
   */
  subtract(complexNumber: ComplexNumber) {
    this.setReal(this.getReal() - complexNumber.getReal());
    this.setImag(this.getImag() - complexNumber.getImag());
  }

  /**
   * Multiply the complex number to this one and sets the real and imaginary part to this.
   * @param complexNumber Another complex number
   */
  multiply(complexNumber: ComplexNumber) {
    const real =
      this.getReal() * complexNumber.getReal() -
      this.getImag() * complexNumber.getImag();
    const imag =
      this.getReal() * complexNumber.getImag() +
      this.getImag() * complexNumber.getReal();
    this.setReal(real);
    this.setImag(imag);
  }

  /**
   * Divide the complex number to this one and sets the real and imaginary part to this.
   * @param complexNumber Another complex number
   */
  divide(complexNumber: ComplexNumber) {
    const divisor =
      complexNumber.getReal() * complexNumber.getReal() +
      complexNumber.getImag() * complexNumber.getImag();
    const real =
      this.getReal() * complexNumber.getReal() +
      this.getImag() * complexNumber.getImag();
    const imag =
      this.getReal() * -complexNumber.getImag() +
      this.getImag() * complexNumber.getReal();
    this.setReal(parseFloat((real / divisor).toFixed(5)));
    this.setImag(parseFloat((imag / divisor).toFixed(5)));
  }
}
