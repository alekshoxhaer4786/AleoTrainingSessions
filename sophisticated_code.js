/*
 * Filename: sophisticated_code.js
 * Description: This code demonstrates a complex and sophisticated JavaScript program.
 */

// Class definition for a complex number
class ComplexNumber {
  constructor(real, imag) {
    this.real = real;
    this.imag = imag;
  }

  // Addition of complex numbers
  add(other) {
    return new ComplexNumber(this.real + other.real, this.imag + other.imag);
  }

  // Subtraction of complex numbers
  subtract(other) {
    return new ComplexNumber(this.real - other.real, this.imag - other.imag);
  }

  // Multiplication of complex numbers
  multiply(other) {
    const real = this.real * other.real - this.imag * other.imag;
    const imag = this.real * other.imag + this.imag * other.real;
    return new ComplexNumber(real, imag);
  }

  // Division of complex numbers
  divide(other) {
    const denominator = other.real * other.real + other.imag * other.imag;
    const real = (this.real * other.real + this.imag * other.imag) / denominator;
    const imag = (this.imag * other.real - this.real * other.imag) / denominator;
    return new ComplexNumber(real, imag);
  }

  // Get the complex conjugate of a number
  conjugate() {
    return new ComplexNumber(this.real, -this.imag);
  }

  // Get the modulus (magnitude) of a complex number
  modulus() {
    return Math.sqrt(this.real * this.real + this.imag * this.imag);
  }

  // Get the argument (phase) of a complex number
  argument() {
    return Math.atan2(this.imag, this.real);
  }

  // Convert the complex number to a string representation
  toString() {
    return `${this.real} ${this.imag >= 0 ? '+' : '-'} ${Math.abs(this.imag)}i`;
  }
}

// Function to calculate the factorial of a number
function factorial(n) {
  let result = 1;
  for (let i = 2; i <= n; i++) {
    result *= i;
  }
  return result;
}

// Fibonacci series generator
function* fibonacci() {
  let a = 0;
  let b = 1;
  while (true) {
    yield a;
    [a, b] = [b, a + b];
  }
}

// Main program
const complexNum1 = new ComplexNumber(3, 4);
const complexNum2 = new ComplexNumber(-2, 7);
const sum = complexNum1.add(complexNum2);
const difference = complexNum1.subtract(complexNum2);
const product = complexNum1.multiply(complexNum2);
const quotient = complexNum1.divide(complexNum2);
const conjugate = complexNum1.conjugate();
const modulus = complexNum1.modulus();
const argument = complexNum1.argument();
const factorialOf5 = factorial(5);
const fibonacciSeries = [...fibonacci()];
console.log('Complex Number 1:', complexNum1.toString());
console.log('Complex Number 2:', complexNum2.toString());
console.log('Sum:', sum.toString());
console.log('Difference:', difference.toString());
console.log('Product:', product.toString());
console.log('Quotient:', quotient.toString());
console.log('Conjugate of Complex Number 1:', conjugate.toString());
console.log('Modulus of Complex Number 1:', modulus);
console.log('Argument of Complex Number 1:', argument);
console.log('Factorial of 5:', factorialOf5);
console.log('Fibonacci Series:', fibonacciSeries);