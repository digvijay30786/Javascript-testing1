const sum = require('./sum');

describe("Sum Testing", () => {
    test("Expects output is : 4", () => {
        expect(sum(2,2)).toBe(4);
    })


    test("Expects output is : 0", () => {
        expect(sum(2,-2)).toBe(0);
    })


    test("Expects output is : 0", () => {
        expect(sum(0,0)).toBe(0);
    })

    test("Expects output is : 3", () => {
        expect(sum(-5,-2)).toBe(-7);
    })
})