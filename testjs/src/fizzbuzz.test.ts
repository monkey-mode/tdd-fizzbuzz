import { fizzbuzz } from "./fizzbuzz";

describe("FizzBuzz", () => {
    it("should return 1 when input is 1", () => {
        const input = 1;

        const result = fizzbuzz(input);

        expect(result).toEqual("1");
    })


    it("should return 2 when input is 2", () => {
        const input = 2;

        const result = fizzbuzz(input);

        expect(result).toEqual("2");
    })

    it("should return Fizz when input is 3", () => {
        const input = 3;

        const result = fizzbuzz(input);

        expect(result).toEqual("Fizz");
    })

    it("should return Buzz when input is 5", () => {
        const input = 5;

        const result = fizzbuzz(input);

        expect(result).toEqual("Buzz");
    })

    it("should return Fizz when input is 6", () => {
        const input = 6;

        const result = fizzbuzz(input);

        expect(result).toEqual("Fizz");
    })

    it("should return Buzz when input is 10", () => {
        const input = 10;

        const result = fizzbuzz(input);

        expect(result).toEqual("Buzz");
    })

    it("should return 11 when input is 11", () => {
        const input = 11;

        const result = fizzbuzz(input);

        expect(result).toEqual("11");
    })

    it("should return FizzBuzz when input is 15", () => {
        const input = 15;

        const result = fizzbuzz(input);

        expect(result).toEqual("FizzBuzz");
    })

    it("should return FizzBuzz when input is 30", () => {
        const input = 30;

        const result = fizzbuzz(input);

        expect(result).toEqual("FizzBuzz");
    })
});
