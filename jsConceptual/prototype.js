const arr = ["foo", "bar", "baz"];
console.log(arr.__proto__); // Array []
console.log(arr.__proto__.__proto__); // Object {}
console.log(arr.__proto__.__proto__.__proto__); // null

const obj = {
  name: "John",
  age: 30,
  city: "Mumbai",
  getIntro: function () {
    console.log("I am " + this.name + " from " + this.city);
  },
};

obj.getIntro();

function foo(params) {}

const obj2 = {
  name: "Jane",
};

// NEVER DO THIS
obj2.__proto__ = obj;
