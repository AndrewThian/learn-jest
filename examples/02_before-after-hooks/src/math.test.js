const { sum, mul, sub, div } = require("./math")

beforeAll(() => {
    console.log("before all hook")
})

beforeEach(() => {
    console.log("before each hook")
})

test("Adding 1 + 1 equals 2", () => {
  expect(sum(1, 1)).toBe(2)
})
test("Multiplying 1 * 1 equals 1", () => {
  expect(mul(1, 1)).toBe(1)
})
test("Subtracting 1 - 1 equals 0", () => {
  expect(sub(1, 1)).toBe(0)
})
test("Dividing 1 / 1 equals 1", () => {
  expect(div(1, 1)).toBe(1)
})

afterEach(() => {
    console.log("after each hook")
})

afterAll(() => {
    console.log("after all hook")
})