## What is Jest and why use it? ##

Jest is an open source project maintained by Facebook. Primarily, its strength lies in testing React code althought not limited to that. It can test any javascript code. Here are it's core competencies:

- fast
- perform snapshot testing(although no terribly important to our needs as we run a canvas based architecture).
- opinionated, provides everything out of the box. Which is great for us as we need to just get going.

## Installation ##

Add jest as a package dev dependency.

Jest is now a devDependency and we want to add a npm script to run the node_module of jest:
```json
{
    "scripts": {
        "test": "jest"
    }
}
```

## Usage ##

We implement a `math.js` file with the following code:

```js
const sum = (a, b) => a + b
const mul = (a, b) => a * b
const sub = (a, b) => a - b
const div = (a, b) => a / b

module.exports = { sum, mul, sub, div }
```

and a following math.test.js with our tests in them:

```js
const { sum, mul, sub, div } = require("./math")

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
```

*notice* we are using pure commonjs modules with node without any transpiling. We are able to use `object destructuring` freely as its now implemented directly into ES2015.

Running `npm run test` will trigger the `script: "test"` in our package.json which will reach into our `node_modules` and run the local devDependency of `jest`.

Hooray! 4 tests are passing.

## Run Jest with VSCode ##

VSCode has a jest extension which is super sick. it will automatically detect if you have installed Jest and run the test while testing. You can also invoke the tests manually by selecting `Jest: Start Runner` extension command.
It will run the tests and stay in watch mode to re-run them whenever you change one of the files that have a test (or a test file):

## References ##

A good [article](https://flaviocopes.com/jest/#introduction-to-jest) about the introduction into jest.