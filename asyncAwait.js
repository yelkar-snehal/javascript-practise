// console.log("async await script");

/**
 * async functions always return a promise
 * if plain value is returned it is wrapped in a promise
 * and then returned
 *
 * async is a keyword used to create an async function
 * await is a keyword used to wait till a promise is resolved/rejected
 * await can only be used inside async functions
 *
 * in async await it looks like the JS engine is waiting
 * but it is not
 * instead it suspends the execution from the await line
 * once awaited promise is resolved suspended execution restarts
 * JS engine moves ahead, call stack is not blocked
 *
 * async await is just a syntactic sujar for then and catch
 * internally then and catch is used by JS engine
 * chaning can be verbose sometimes, in such cases async await looks cleaner
 *
 * for catching errors ctach can be chained or use try catch block
 */

// const p = new Promise((resolve, reject) => {
//   setTimeout(() => resolve("Promise resolved"), 5000);
// });

// const p2 = new Promise((resolve, reject) => {
//   setTimeout(() => resolve("Promise resolved"), 10000);
// });

// async function getData() {
//   //   return "Hello";
//   return p;
// }

// const data = getData();
// console.log(data);
// p.then((res) => console.log(res));
// console.log("line after then");

// async function handlePromise() {
//   console.log("started executing promises");

//   const res = await p;
//   console.log(res);
//   console.log("line after await");

//   const res2 = await p2;
//   console.log(res2);
//   console.log("line after await 2");
// }

// const API_URL = "https://api.github.com/users/{}";

// async function handlePromise() {
//   // fetch -> response -> json (promise) -> data
//   try {
//     const res = await fetch(API_URL);
//     const data = await res.json();
//     console.log(data);
//   } catch (error) {
//     console.log(error);
//   }
// }

// async function temp() {
//   const t = await handlePromise();
//   console.log(t);
// }

// temp();
