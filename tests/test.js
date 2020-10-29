const fb = require('../fizzbuzz')
const { isFizzy, 
        isBuzzy,
        fizzyBuzzy,
        fizzBuzz,
        FIZZ,
        BUZZ,
        FIZZBUZZ } = fb

test('Tests for isFizzy', () => {
  expect(isFizzy(6)).toBe(true)
  expect(isFizzy(5)).toBe(false)
  expect(isFizzy(0)).toBe(true)
})

test('Tests for isBuzzy', () => {
  expect(isBuzzy(5)).toBe(true)
  expect(isBuzzy(0)).toBe(true)
  expect(isBuzzy(6)).toBe(false)
})

test('Tests for fizzyBuzzy', () => {
  expect(fizzyBuzzy(5)).toBe(BUZZ)
  expect(fizzyBuzzy(0)).toBe(FIZZBUZZ)
  expect(fizzyBuzzy(6)).toBe(FIZZ)
  expect(fizzyBuzzy(3)).toBe(FIZZ)
  expect(fizzyBuzzy(4)).toBe('')
})

test('Tests for fizzBuzz', () => {
  expect(fizzBuzz(0)).toEqual({count:0, fizz: 0, buzz: 0, fizzBuzz: 0})
  expect(fizzBuzz(3)).toEqual({count:3, fizz: 1, buzz: 0, fizzBuzz: 0})
  expect(fizzBuzz(5)).toEqual({count:5, fizz: 1, buzz: 1, fizzBuzz: 0})
  expect(fizzBuzz(15)).toEqual({count:15, fizz: 4, buzz: 2, fizzBuzz: 1})
})