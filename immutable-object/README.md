## Immutable Object in JS

# Immutable Object with `Object.freeze`

## Overview
In JavaScript, the `Object.freeze()` method is used to make an object immutable. Once an object is frozen, you cannot:

1. Modify existing properties.
2. Add new properties.
3. Delete existing properties.

However, `Object.freeze()` is a shallow freeze, meaning it only affects the immediate properties of the object, not nested objects.

---

 

### **Shallow Freezing**
   - Only the immediate properties of the object are frozen.
   - If the object contains nested objects, those nested objects remain mutable.

## Important Notes

- **Shallow Freeze Limitation:** If your object contains nested objects, you will need to recursively freeze them if you want true immutability. For example:
  ```javascript
  function deepFreeze(obj) {
      Object.freeze(obj);
      Object.keys(obj).forEach(key => {
          if (typeof obj[key] === 'object' && obj[key] !== null) {
              deepFreeze(obj[key]);
          }
      });
  }
