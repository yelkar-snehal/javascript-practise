console.log("Started executing array script");

// "in Javascript" Arrays are list-like objects
// (only because,length can change at any time,
// property of list ie. can grow and shrink).

// Normally, arrays allocate a contiguous block of memory of fixed
// length.
// However, "in Javascript", arrays are
// Object types with special constructors and accessor methods.

// does not allocate any memory!
//  In fact, it simply sets the value of the length property in the
//   array.
// var arr = new Array(100000);
// // use this instead:
// var arr = [];
// // length 100
// arr[0] = 0;
// arr[99] = { name: "Jon" };
// // prints 100
// console.log(arr.length);
// // prints something like
// //  [0, empty × 98, Object { name: "Jon"}]
// /**
//  * That's because undefined is a value, while when you create an array for example like this:
//  * empty slots are created. The empty slot is different from the undefined value,
//  * and the most important difference is that the empty slot is not Enumerable.
//  */
// console.log(arr);
// console.log(arr.map((x, i) => x + i));

// Array.prototype.myMap = function (fn) {
//   var newarr = [];
//   var len = this.length;
//   for (var i = 0; i < len; i++) {
//     newarr.push(fn(this[i]));
//   }
//   return newarr;
// };
// console.log([1, 2, 3].myMap((element) => element + 2));

/**
 * newarr.push(fn(arr[i])); is executed immediately with i
 * however testArr.push(function () { is not
 * if i is var, closure with i = 3 is created with the pushed fn
 * if i is let, block scope with i =0,  i = 1, etc are created in the respective operations
 * this can be checked in the debug window under scope and respective fn and their [scope]
 */
// var myMap = function (fn, arr) {
//   var newarr = [];
//   var testArr = [];
//   var len = arr.length;
//   for (var/let i = 0; i < len; i++) {
//     newarr.push(fn(arr[i]));
//     testArr.push(function () {
//       console.log(i);
//     });
//   }
//   return { newarr, testArr };
// };

// const { newarr, testArr } = myMap((element) => element * element, [1, 2, 3]);

// console.log(newarr);
// console.log(testArr);
// console.log(testArr[0]());
// console.log(testArr[1]());
// console.log(testArr[2]());

// const n = [1, 2, 3, 4, 5, 6, 7, 8];
// const obj = {
//   a: 1,
//   b: 2,
//   c: 3,
//   d: 4,
//   e: 5,
// };

// //myreduce
// Array.prototype.myReduce = function (fn, defaultVal) {
//   let output = defaultVal;
//   for (let i = 0; i < this.length; i++) {
//     output = fn(output, this[i]);
//   }
//   return output;
// };

// const reduceOutput = n.myReduce((accumulator, element) => {
//   return accumulator + element;
// }, 0);

// console.log(reduceOutput);

// const swappedObj = Object.keys(obj).myReduce((acc, key) => {
//   return {
//     ...acc,
//     [obj[key]]: key,
//   };
// }, {});

// console.log(swappedObj);
