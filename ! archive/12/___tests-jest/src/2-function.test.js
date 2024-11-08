import { isPrime } from './2-function';

describe('isPrime', () => {
  test ('check if 2 is prime', () => {
    expect(isPrime(2)).toBe(true);
  })

  test ('check if 3 is prime', () => {
    expect(isPrime(3)).toBe(true);
  })

  test ('check if 4 is prime', () => {
    expect(isPrime(4)).toBe(false);
  })
});
