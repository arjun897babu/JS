# JavaScript Object Property Access Methods

This document provides an overview of the various JavaScript `Object` methods used for accessing and interacting with object properties.

## Methods

- `Object.keys()` - Retrieves an array of object keys (enumerable properties).
- `Object.values()` - Retrieves an array of property values (enumerable properties).
- `Object.entries()` - Retrieves an array of `[key, value]` pairs for enumerable properties.
- `Object.fromEntries()` - Converts a list of `[key, value]` pairs into an object.
- `Object.getOwnPropertyNames()` - Retrieves an array of all property names (including non-enumerable).
- `Object.getOwnPropertySymbols()` - Retrieves an array of symbol properties.

# 
In JavaScript, **properties** of objects can be either **enumerable** or **non-enumerable**. These terms describe whether or not the property will show up in certain operations like loops.

- **Enumerable** properties are those that **show up** when you use methods like `Object.keys()`, `for...in` loops, or `Object.entries()`. These are the properties you can iterate over, and they are visible in those operations.

- **Non-enumerable** properties do not show up in loops or methods like Object.keys(), for...in, or Object.entries().



# JavaScript Object Inspection Methods

This document provides an overview of the various JavaScript `Object` methods used for inspecting and analyzing the characteristics of objects, such as whether they are extensible, sealed, frozen, or comparing values for equality.

## Methods

- `Object.is(value1, value2)` - Compares two values for equality, handling special cases like `NaN` and `+0` vs `-0`.
- `Object.isExtensible(obj)` - Checks if new properties can be added to an object (whether the object is extensible).
- `Object.isSealed(obj)` - Checks if an object is sealed, meaning no new properties can be added, and existing properties are non-configurable.
- `Object.isFrozen(obj)` - Checks if an object is frozen, meaning no new properties can be added, existing properties are non-writable and non-configurable.
