class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;

    }
    getName() {
        return this.name;
    }
    getAge = () =>this.age;

    print = function() {
        console.log("Name: " + this.name)
    }

}

//let p1 = new Person("Polo",21);
//p1.print();

module.exports = {Person}