const { sum, mul, sub, div } = require("./math")

describe("add multiply test cases", () => {
    beforeEach(() => {
        console.log("before each hook in first set")
    })
    afterAll(() => {
        console.log("after all hook in first set")
    })
    test("Adding 1 + 1 equals 2", () => {
        expect(sum(1, 1)).toBe(2)
    })
    test("Multiplying 1 * 1 equals 1", () => {
        expect(mul(1, 1)).toBe(1)
    })
})

describe("subtract divide test cases", () => {
    beforeEach(() => {
        console.log("before each hook in second set")
    })
    afterAll(() => {
        console.log("after all hook in second set")
    })
    test("Subtracting 1 - 1 equals 0", () => {
        expect(sub(1, 1)).toBe(0)
    })
    test("Dividing 1 / 1 equals 1", () => {
        expect(div(1, 1)).toBe(1)
    })
})