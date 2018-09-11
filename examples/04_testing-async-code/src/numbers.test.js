const { numbers_x_100, numbers_100 } = require('./numbers')

test(`callback timeout number to be 1000`, done => {
    numbers_x_100(10, number => {
        expect(number).toBe(1000)
        done()
    })
})

test(`promise timeout number to be 200`, () => {
    // we can just return a promise from the test and jest will resolve that with an in built .then for us
    return numbers_100(100).then(number => {
        expect(number).toBe(200)
    })
})

test(`catch error from promise`, () => {
    return numbers_100().catch(error => {
        expect(error).toMatch("not a number input")
    })
})

test(`catch type error from promise`, () => {
    return numbers_100("string").catch(error => {
        expect(error).toMatch("not a number input")
    })
})

test(`async await test cases`, async () => {
    const number = await numbers_100(100)
    expect(number).toBe(200)
})