const name = {
  firstName: "James",
  lastName: "Bond",
};

const printName = function (hometown, state) {
  console.log(`${this.firstName} ${this.lastName}, ${hometown}, ${state}`);
};

const printMyName = printName.bind(name, "Pune");
printMyName("Maharashtra");

// polyfill begins
console.log("Polyfill Begins...");
Function.prototype.myBind = function (...args) {
  // this context refers to the caller fn
  const caller = this,
    params = args.slice(1);
  return function (...args2) {
    caller.apply(args[0], [...params, ...args2]);
  };
};

const printMyName2 = printName.myBind(name, "Pune");
printMyName2("Maharashtra");
