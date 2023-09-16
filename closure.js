console.log("executing closure script");
/**
 * fn bundled along with its lexical scope
 * fn has access to its scope even after the outer fn has been executed
 *
 * this can be seen in the browser while debugging in the "closure" field
 *
 * can be used for currying, memoise, setTieout, encapsulation
 * infact setTimeout can access the variables ouside it because of closures
 *
 * memory leak is one of the cons in closure
 * memory garbage collection doesn't always happen
 * v8 engine optimises this
 *
 * to form a closure enclose everything within a function
 *
 * new keyword with a function for ms a ctror; good practise is to have ctor's
 * first letter as Capital
 *
 */

/**
 * this- object on which function is getting called or window object.
 * for node, "this" is node object.
 */

// function print() {
//   console.log("Printing this:", this);
// }
// print();

// //closure- this object
// function outerFunc() {
//   console.log("Printing outer this:", this);
//   return function () {
//     console.log("Printing inner this:", this);
//   };
// }

// let inner = outerFunc();
// inner();

//this object and problem of loosing this
const myObj = {
  name: "Tyrion",
  myFunction: function () {
    console.log("Outer:", this.name, this);

    return function () {
      console.log("Inner:", this.name, this);
    };
  },
};

// rule- object used to call the function is "this" for that function
let inn = myObj.myFunction();
inn(); //global execution context's this- window in browser or node in ide

//solution 1- bind()
let boundIn = inn.bind(myObj);
boundIn();
