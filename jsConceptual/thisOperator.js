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

// inside an arrow function
const car3 = {
  name: "Jeep",
  printName: () => {
    // car3's lexical context
    console.log(this);
  },
};

car3.printName();

// detailed enclosure eg
const car4 = {
  name: "Thar",
  inner: function () {
    const printName = () => {
      // car3's lexical context
      console.log(this);
    };
    printName();
  },
};

car4.inner();
