function Person (first, last) {
    this.first = first;
    this.last = last;
    this.age;

    this.getInfo = function () {
        return this.first + " " + this.last
    }

    this.setAge = function (age) {
        this.age = age
    }
}

module.exports = Person