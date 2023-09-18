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
// const myObj = {
//   name: "Tyrion",
//   myFunction: function () {
//     console.log("Outer:", this.name, this);

//     return function () {
//       console.log("Inner:", this.name, this);
//     };
//   },
// };

// // rule- object used to call the function is "this" for that function
// let inn = myObj.myFunction();
// inn(); //global execution context's this- window in browser or node in ide

// //solution 1- bind()
// let boundIn = inn.bind(myObj);
// boundIn();

// //solution 2- arrow function
// const myObjNew = {
//   name: "Jon",
//   myFunctionNew: function () {
//     console.log("Outer:", this.name);

//     return () => this.name;
//     /* arrow function does not have its own this. it is bound to the outer function's this
//           or this of its parent. hence we get mynewobj here*/
//   },
// };

// let newInner = myObjNew.myFunctionNew();
// console.log("Inner:", newInner());

// Puzzle: Block scope and closure
// solution- let i
// var puzzleOne = function () {
//   var arr = [];
//   for (var i = 0; i < 3; i++) {
//     console.log("fn", i);
//     arr.push(function () {
//       console.log("hey", i);
//     });
//     // (function () {
//     //   console.log(i);
//     // })();
//   }

//   return arr;
// };

// puzzleOne();
// puzzleOne()[0]();
// puzzleOne()[1]();
// puzzleOne()[2]();

// var a = 1;
// a = "str";
// var b = 1;

// //call, apply, bind
// function sum(z) {
//   return this.a + this.b + z;
// }

// console.log("Problem:", sum(1));

// /**
//  * since a can be reinitialised to something
//  * our functions can be passed with a dedicated this object
//  */
// console.log("Solution");
// console.log(sum.apply({ a: 1, b: 2 }, [1]));
// console.log(sum.call({ a: 2, b: 2 }, 4));

// this examples

// obj with dot operaor sets its this to that object
// var x = 1;

// function foo() {
//   return this.x;
// }
// console.log(foo()); // 1

// var obj = { x: 2 };
// obj.foo = foo;
// console.log(obj);
// console.log(obj.foo()); // 2
// this for function and arrow function
// const obj = {
//   title: "Title",
//   arr: [1, 2, 3],
//   func: function () {
//     console.log(this.title);
//     //problem
//     this.arr.forEach(function (element) {
//       console.log(`${this.title} ${element}`);
//     });

//     //solution
//     this.arr.forEach((element) => {
//       console.log(`${this.title} ${element}`);
//     });
//   },
//   aFunc: () => {
//     console.log(this.title);
//   },
// };
// obj.func();
// obj.aFunc();
