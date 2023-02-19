// object constructor (which is obviously a function)
function Person(name, eyeCol, height) {
    this.name = name;
    this.eyeCol = eyeCol;
    this.height = height;
    // making a method for the function
    this.updateHeight = function() {
        return ++this.height;
    };
}

// instantiating the person
let person1 = new Person('Fergus', 'green', 176)
let person2 = new Person('Orla', 'blue', 150)

console.log(person2.updateHeight())
