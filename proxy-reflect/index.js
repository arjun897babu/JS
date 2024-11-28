const obj = {
  name: "arjun babu",
  age: 26,
};

const prx1 = new Proxy(obj, {
  get(target, prop) {
    if (prop in target) {
      return Reflect.get(target, prop);
    }
    console.error(`Error: Property "${prop}" does not exist.`);
    return undefined;
  },
  set(target, prop, value) {
    if (!Reflect.has(target, prop)) {
      console.error(
        `Error: Cannot set value. Property "${prop}" does not exist.`
      );
      return false;
    }

    if (prop === "name") {
      if (typeof value !== "string") {
        console.error(`Error: Invalid type for "${prop}". Expected a string.`);
        return false;
      }
    } else if (prop === "age") {
      if (typeof value !== "number") {
        console.error(`Error: Invalid type for "${prop}". Expected a number.`);
        return false;
      }
    }

    Reflect.set(target, prop, value);
    console.log(`Property "${prop}" updated to: ${value}`);
    return true;
  },
});

console.log(prx1.age); // 26
console.log(prx1.name); // "arjun babu"

console.log((prx1.age = 27));
console.log((prx1.name = "abhinand"));

console.log((prx1.age = "d"));
console.log((prx1.gender = "male"));
console.log((prx1.gender = 23));
console.log(prx1.gender);
