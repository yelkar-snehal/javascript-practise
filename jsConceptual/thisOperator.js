"use strict";

//  global context
// prints the reference to the global object; browser: window, node: runntime env
console.log(this);

// functionol context
function foo() {
  //  inisde the fn this reference changes w.r.t. the mode strict/non strict, undefined/global
  console.log(this);
}
foo();

// variation in function invocation
foo();
// this below refers to the caller object
window.foo();

// inside objects' methods
const car = {
  name: "Nano",
  printName: function () {
    console.log(this.name);
  },
};

car.printName();
const car2 = {
  name: "Creta",
};

// override this' reference
car.printName.call(car2);
