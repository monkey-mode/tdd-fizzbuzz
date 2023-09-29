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

    
});
