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

});
