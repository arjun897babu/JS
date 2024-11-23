// ===  Object.is() === //
console.log("=== Object.is() ===");

console.log(Object.is(42, 42));     // true 
console.log(Object.is('hello', 'hello')); // true 
console.log(Object.is({}, {}));   // false: Even though both objects are empty, they are different objects in memory
console.log(Object.is(+0, -0));    // false 

// === Object.isExtensible() === //
console.log("\n=== Object.isExtensible() ===");

const obj1 = {};
console.log(Object.isExtensible(obj1)); // true 

Object.preventExtensions(obj1); // Prevents new properties from being added to obj1
console.log(Object.isExtensible(obj1)); // false

// === Object.isSealed() ===
console.log("\n=== Object.isSealed() ===");

const obj2 = { a: 1 };
console.log(Object.isSealed(obj2)); // false:  

Object.seal(obj2);   // Seals the object (prevents new properties and makes existing properties non-configurable)
console.log(Object.isSealed(obj2)); // true 

console.log(Object.isSealed(obj1)); // true 

// === Object.isFrozen() === //
console.log("\n=== Object.isFrozen() ===");

const obj3 = { a: 1 };
console.log(Object.isFrozen(obj3)); // false 
Object.freeze(obj3);  // Freezes the object (prevents new properties, existing properties can't be modified or deleted)
console.log(Object.isFrozen(obj3)); // true 

console.log(Object.isFrozen(obj2)); // false 
console.log(Object.isFrozen(obj1)); // true
