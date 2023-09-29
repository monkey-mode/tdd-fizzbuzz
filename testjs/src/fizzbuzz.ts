/**
 * Returns "Fizz" if the input number is divisible by 3, "Buzz" if it's divisible by 5,
 * "FizzBuzz" if it's divisible by both 3 and 5, and the input number as a string otherwise.
 * @param n - The input number to check.
 * @returns The corresponding string based on the input number's divisibility.
 */
export const fizzbuzz = (n: number): string => {
  if (n % 15 == 0) {
    return "FizzBuzz";
  }
  
  if (n % 3 == 0) {
    return "Fizz";
  }

  if (n % 5 == 0) {
    return "Buzz";
  }

  return n.toString();
};
