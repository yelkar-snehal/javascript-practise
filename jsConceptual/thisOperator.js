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
      // function's (inner) lexical context, will behave as if console is present directly inside the function, and not arrow function block
      console.log(this);
    };
    printName();
  },
};

car4.inner();

// this inside DOM referes to the HTML element

//arrow lexical ctx test
const obj = {
  a: 11,
  foo: function () {
    const bar = () => {
      console.log(this.a);
    };
    return bar;
  },
};

obj.foo()();
