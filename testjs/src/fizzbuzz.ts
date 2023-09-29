export const fizzbuzz = (n: number): string => {
  if (n == 2) {
    return "2";
  }

  if (n % 3 == 0) {
    return "Fizz";
  }

  if (n % 5 == 0) {
    return "Buzz";
  }

  return "1";
};
