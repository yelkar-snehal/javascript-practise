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
let obj = {
  name: "Snehal",
  address: {
    personal: {
      city: "Pune",
      area: "Katraj",
    },
    office: {
      city: "Pune",
      area: {
        landmark: "CPK",
      },
    },
  },
};
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
const setStorageItem = (key, value) =>
  localStorage.setItem(key, JSON.stringify(value));
const getStorageItem = (key) => JSON.parse(localStorage.getItem(key));

console.log(setStorageItem("user", obj));
setTimeout(() => console.log(getStorageItem("user")), 5000);
