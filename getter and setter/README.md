# Getters and Setters in JavaScript

In JavaScript, there are two kinds of object properties:

## Data Properties
Data properties are stored in key-value pairs.

## Accessor Properties
Accessor properties are methods that get or set the value of an object. Using getters and setters offers additional benefits, such as encapsulation, validation, and side effects. For that, we use these two keywords:

- `get`: to define a getter method to get the property value
- `set`: to define a setter method to set the property value

### Getters
Getter methods are used to access the properties of an object and behave like a property rather than a method.

### Setters
Setter methods are used to modify the value of an object property. Setters always take one parameter because they are meant to modify a single property of the object.
Behave like a property rather than a method.

## Private Properties in JavaScript
JavaScript does not enforce private properties by default. It's a common practice to prefix private properties with an underscore (`_`) to indicate they should not be directly accessed or modified from outside the object.

### Private Fields (ES2022)
To prevent direct access to properties, you can use private fields (using `#`), which are a feature of ES2022 (ES12) with classes. These private fields are only accessible within the class itself.
