const obj = {
  a: 1,
  b: 2,
  __proto__: {
    d: 3,
    f: 5,
  },
};

obj.__proto__.print = function () {
  console.log(`this is a:${this.a} and this is b:${this.b}`);
};

const obj2 = { a: 12, b: 21 };
console.log(obj.d); // Accesses `d` from obj's prototype
console.log(obj.f); // Accesses `f` from obj's prototype
obj.print(); // Calls the `print` method defined on obj's prototype

obj2.__proto__.print = obj.print; // Assigns the print function to obj2's prototype
obj2.print(); // Calls `print` method for obj2

console.log(obj);
console.log(obj2);

/*
Avoid Using __proto__:

Directly manipulating the __proto__ is discouraged because it is non-standard and can lead to performance issues or bugs.
Use Object.getPrototypeOf(obj) and Object.setPrototypeOf(obj, prototype) for a cleaner and standard approach.

*/