const Person = require("./person")

describe("spying class methods with jest.spyOn", () => {
    let student;

    beforeEach(() => {
        student = new Person("Andrew", "Thian")    
    })

    test(`The person getInfo function`, () => {
        // spy on the function
        jest.spyOn(student, "getInfo")
        // execute the function that is being spied upon
        student.getInfo()

        expect(student.getInfo).toHaveBeenCalled()
    })

    test(`the person setage function`, () => {
        // spy on the function
        jest.spyOn(student, "setAge")
        // execute the function that is being spied upon
        student.setAge(20)
        expect(student.setAge).toHaveBeenCalledWith(20)
    })
})