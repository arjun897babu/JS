const person = {
  _fName: "arjun babu", // private property (by convention)

  // Getter method
  get getFullName() {
    return this._fName;
  },

  // Setter method
  set changeFullName(newName) {
    if (typeof name !== "string" || name === "") {
      return "invalid name";
    }
    this._fName = newName;
  },

  newName: function (name) {
    if (typeof name !== "string" || name === "") {
      return "invalid name";
    }
    this._fName = name;
  },
};

console.log(person.getFullName); // Accesses the private property via getter
person.changeFullName = "amruth babu"; // Sets the private property via setter
console.log(person.getFullName); // Outputs 'amruth babu'
console.log(person._fName); // Outputs 'amruth babu'

/**
 _fName is not really private in a strict sense (because JavaScript does not enforce private properties by default),
  but it is "private by convention". 
  It’s a common practice to prefix private properties with an underscore to indicate they should not be directly accessed or modified from outside the object
  even though the _fName property is intended to be private by convention (using the underscore),
  you can still directly access it using the dot operator (person._fName). 
  This is because JavaScript doesn't enforce real privacy for object properties 
  unless you're using specific techniques like private fields (# syntax) introduced in ES2022.
 */

class Person {
  #fName;
  constructor(name) {
    this.#fName = name;
  }

  get personName() {
    return this.#fName;
  }

  set newName(name) {
    if (typeof name !== "string" || name === "") {
      return "invalid name";
    }
     this.#fName = name;
  }
}

const arjun = new Person('arjun')

// console.log(arjun.#fName)   SyntaxError: Private field '#fName' must be declared in an enclosing class
console.log(arjun.personName)  // Accesses the private property via getter
arjun.changeFullName = 'amruth' // Sets the private property via setter
console.log(arjun.personName)
