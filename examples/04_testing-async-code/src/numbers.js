const numbers_x_100 = (numbers, callback) => {
    setTimeout(() => {
        callback(numbers * 100)
    }, 400)
}

const numbers_100 = numbers => {
    return new Promise((resolve, reject) => {
        if (!numbers || typeof numbers !== "number") {
            reject("not a number input")
            return
        }
        setTimeout(() => {
            resolve(numbers + 100)
        }, 500)
    })
}

module.exports = {
    numbers_x_100,
    numbers_100
}