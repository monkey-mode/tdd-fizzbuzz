import { fizzbuzz } from "./fizzbuzz";

describe("FizzBuzz", () => {
    it("should return 1 when input is 1", () => {
        const input = 1;

        const result = fizzbuzz(input);

        expect(result).toEqual("1");
    })

});
