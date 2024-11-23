# Inheritance and the prototype

 
## Inheritance
**Inheritance** refers to passing down characteristics from a parent to a child so that a new piece of code can reuse and build upon the features of an existing one.

JavaScript implements inheritance by using **objects**.Every object has a hidden connection to another object called its **prototype**. That prototype object has a prototype of its own, and so on until an object is reached with null as its prototype.
## Inheriting properties
JavaScript objects are connected to another object called a prototype. When you try to access a property of an object, JavaScript first looks for that property in the object itself. If it doesn't find it there, it then looks in the object's prototype, and if it's not there, it keeps checking up the chain of prototypes until it either finds the property or reaches the end of the chain. This process is called the prototype chain.
 - **`Object.getPrototypeOf()`**: In JavaScript, we can get an object's prototype using Object.getPrototypeOf(). If the obj parameter isn't an object. In ES2015, the parameter will be coerced to an Object.
- **`Object.setPrototypeOf(obj, prototype)
`**: To change an object's prototype, we can use this methos.
  - `obj`:The object which is to have its prototype set.
  - `prototype`:The object's new prototype (an object or null).

 - `__proto__`: Some JavaScript engines also let you access the prototype using **`obj.__proto__`**, but this is not a standard way, so it’s better to avoid using it.

