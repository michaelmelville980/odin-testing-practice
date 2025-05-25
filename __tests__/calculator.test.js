const calculator = require('../calculator');

describe('calculator', () => {

    describe('add ()', () => {

        test('adds two positive numbers', () => {
            expect(calculator.add(1, 5)).toBe(6);
        });

         test('adds two negative numbers', () => {
            expect(calculator.add(-5, 5)).toBe(0);
        });

    });

    describe('subtract ()', () => {

         test('subtracts two positive numbers', () => {
            expect(calculator.add(1, 5)).toBe(-4);
        });

    });

    describe('divide ()', () => {

    });

    describe('multiply ()', () => {

    });
    
})

test("capitalizes 1st character in string input with 1 lower cased character", () => {
  expect(capitalize("s")).toBe("S");
});


