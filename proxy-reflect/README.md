# Proxy and Reflect 

JavaScript provides **Proxy** and **Reflect** objects for intercepting and customizing the behavior of objects. These tools are powerful for adding validation, access control, and dynamic behavior to objects.

---
## Proxy

A **Proxy** wraps a target object and allows you to intercept and redefine fundamental operations such as property access, assignment, and function invocation.

### Syntax
```bash
let proxy = new Proxy(target, handler);
```
- target: The object you want to wrap.
- handler: An object that defines traps for the operations you want to intercept.

`A Proxy acts as a wrapper around the original object (called the target). When an operation (like getting or setting a property) is performed on the proxy, the handler object's methods (called traps) are triggered. These traps allow you to control what happens when the operation is performed.`

---
## Reflect

The **Reflect** object in JavaScript provides methods for interceptable JavaScript operations (such as getting and setting properties), making it easier to work with objects. It allows you to call and interact with low-level operations more directly than using Proxy traps.
- provides a set of static methods for interacting with objects, which internally mirror common JavaScript operations.

```bash
Reflect.get(target, prop)               // Get a property value
Reflect.set(target, prop, value)        // Set a property value
Reflect.has(target, prop)               // Check if a property exists
Reflect.deleteProperty(target, prop)    // Delete a property
Reflect.construct(target, args)         // Create an instance using a constructor
Reflect.getOwnPropertyDescriptor(target, prop) // Get property descriptor
Reflect.defineProperty(target, prop, descriptor) // Define or modify property
```
