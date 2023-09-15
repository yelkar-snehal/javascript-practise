console.log("async await script");

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
 */

const p = new Promise((resolve, reject) => {
  setTimeout(() => resolve("Promise resolved"), 5000);
});

const p2 = new Promise((resolve, reject) => {
  setTimeout(() => resolve("Promise resolved"), 10000);
});

// async function getData() {
//   //   return "Hello";
//   return p;
// }

// const data = getData();
// console.log(data);
// p.then((res) => console.log(res));
// console.log("line after then");

async function handlePromise() {
  console.log("started executing promises");

  const res = await p;
  console.log(res);
  console.log("line after await");

  const res2 = await p2;
  console.log(res2);
  console.log("line after await 2");
}

handlePromise();
