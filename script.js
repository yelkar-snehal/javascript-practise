console.log("Started script");

// console.log(setTimeout(() => console.log("Normal setTimeout"), 3000))
// let counter = 0;
// const onKeyDown = (value) => {
//   console.log({ value, counter });
//   console.log(this.value + " in onKeyDown");
//   counter++;
// };

// const debounce = (fn, delay) => {
//   console.log(fn);
//   let timer;
//   let counter2 = 0;
//   return (...args) => {
//     const ctx = this;
//     console.log({ counter2 });
//     counter2++;
//     clearTimeout(timer);
//     timer = setTimeout(() => fn.apply(ctx, args), delay);
//   };
// };

// const throttle = (fn, delay) => {
//   let shouldCall = true;
//   return (...args) => {
//     const ctx = this;
//     if (shouldCall) {
//       console.log(this.value + " in throttle");
//       fn.apply(ctx, args);
//       shouldCall = false;
//       setTimeout(() => (shouldCall = true), delay);
//     }
//   };
// };

// const debouncedKeyDown = debounce(onKeyDown, 10000);
// const throttledKeyDown = throttle(onKeyDown, 2000);

// event bubbling and trickling
// document
//   .querySelector("#grandma")
//   .addEventListener("click", () => console.log("grandma clicked"));

// document
//   .querySelector("#ma")
//   .addEventListener("click", () => console.log("ma clicked"));

// document
//   .querySelector("#child")
//   .addEventListener("click", () => console.log("child clicked"));

// event delegation
// document.querySelector("#category").addEventListener("click", (e) => {
//   console.log("category clicked", e.target.id);
//   // additional if check avoids nested event bubbling
//   if (e.target.tagName === "LI") window.location.href = `/${e.target.id}`;
// });
// event delegation w/ behaviour pattern
// behaviour pattern is controlling the behaviour of certain html elements
// event delegation allows this without attaching individual event handlers
// document.querySelector("#form").addEventListener("keyup", (e) => {
//   //   console.log(e);
//   if (e.target.dataset.format === "uppercase")
//     e.target.value = e.target.value.toUpperCase();
// });

// prototypal inheritance
// let obj = {};
// console.log(obj.__proto__); // attached obj called protype is how js inheritance works
// console.log(obj.__proto__.__proto__); // null
// console.log([].__proto__); // ctor prototype
// console.log([].__proto__.__proto__); //obj prototype chaining
// console.log([].__proto__.__proto__.__proto__); // null

// thinking recirsively
// let obj = {
//   name: "Snehal",
//   address: {
//     personal: {
//       city: "Pune",
//       area: "Katraj",
//     },
//     office: {
//       city: "Pune",
//       area: {
//         landmark: "CPK",
//       },
//     },
//   },
// };
// // goal is to flatten the object
// const flatten = function (obj, parent = "") {
//   let flattenedObject = {};
//   for (let key in obj) {
//     if (typeof obj[key] === "object") {
//       flattenedObject = {
//         ...flattenedObject,
//         ...flatten(obj[key], `${parent}_${key}`),
//       };
//     } else {
//       //   console.log(key, obj[key], parent, `${parent}_${key}`);
//       flattenedObject[`${parent}_${key}`] = obj[key];
//     }
//   }
//   return flattenedObject;
// };

// console.log(flatten(obj, "user"));

// storage
// const setStorageItem = (key, value) =>
//   localStorage.setItem(key, JSON.stringify(value));
// const getStorageItem = (key) => JSON.parse(localStorage.getItem(key));

// console.log(setStorageItem("user", obj));
// setTimeout(() => console.log(getStorageItem("user")), 5000);

// amazon ui question sum(1)(2)(3)(4)...(n)()
// const sum = (a) => (b) => b ? sum(a + b) : a;
// console.log("sum: ", sum(1)(2)(3)(4)(5)());

// drag and drop
// const onDrag = (e) => {
//   /**
//    * set on the drag event
//    * can be of any type
//    * type/text, type/html. etc
//    * https://developer.mozilla.org/en-US/docs/Web/API/HTML_Drag_and_Drop_API/Recommended_drag_types
//    */
//   e.dataTransfer.setData("text/plain", e.target.id);
//   e.dataTransfer.setData("application/x-moz-node", e.target.id);
//   //   console.log("on drag", e);
// };

// const onDrop = (e) => {
//   let t = e.dataTransfer.getData("application/x-moz-node");
//   //   console.log("on drop", e, t);
//   e.target.appendChild(document.getElementById(t));
// };

// const allowDrop = (e) => {
//   e.preventDefault();
// };

// function hoisting
// function bigBrother() {
//   function littleBrother() {
//     return "it is me!";
//   }
//   return littleBrother();
//   function littleBrother() {
//     return "no me!";
//   }
// }

// console.log(bigBrother());

//fn hoisting and iife

// let i = "foo";

// (function () {
//   console.log("Original value was: " + i);
//   let i = "bar";
//   console.log("New value is: " + i);
// })();

/**
 * Original value was: undefined
   New value is: bar

   The IIFE is an expression, not a statement, so no it is not hoisted.

   var i inside the IIFE is hoisted to the top of the function scope, 
   but the assignment is not. The following is equivalent:

   this is equivalent to:

   (function(){
    var myVar;
    console.log('Original value was: '+ myVar);
    myVar = 'bar';
    console.log('New value is: ' + myVar);
   })();

   therefore if tried with let it would throw the below error
   
 */

//  pass by val
// var c = 5;
// var d = c;

// function test1(num) {
//   return (num = num * 2);
// }

// console.log(test1(d)); // 10
// console.log(d); // 5
// console.log(c); // 5

//pass by reference
// var arr = [1, 2, 3];
// function ref(arr) {
//   arr[0] = 0; //original array has been changed
//   console.log(arr);
// }

// console.log(arr);
// ref(arr);
// console.log(arr);

// //solution
// var arr1 = [1, 2, 3];
// function ref2(arr1) {
//   var arr2 = [...arr1]; //array/object cloning to keep original array as it is
//   arr2[0] = 3;
//   console.log(arr2);
// }

// console.log("Original:", arr1);
// ref2(arr1);

// //object- pass by reference example
// let person = {
//   name: "Jon",
//   age: 28,
// };

// function updatePerson(pObj) {
//   // let copy = { ...pObj };
//   pObj.age = 20;
//   // console.log(copy);
// }

// updatePerson(person);
// console.log(person);
