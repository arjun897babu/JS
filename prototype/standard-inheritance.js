const proto = {};

const obj1 = {
  name: "obj1",
  a: 1,
  b: 2,
};

const obj2 = {
  name: "obj2",
  a: 12,
  b: 21,
};

// This method will be shared by any object that uses `proto` as its prototype
proto.print = function () {
  console.log(`value of ${this.name} \na:${this.a} \nb:${this.b}`);
};

// Now obj1 inherits the `print` method from `proto`
Object.setPrototypeOf(obj1, proto);

console.log(obj1.a); // Logs: 1
console.log(obj1.b); // Logs: 2
obj1.print();

// Now obj2 also inherits the `print` method from `proto`
Object.setPrototypeOf(obj2, proto);

console.log(obj2.a);//Logs: 12
console.log(obj2.b);//Logs: 21
obj2.print();



