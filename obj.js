console.log("Started executing obj script");

// function returnNthCat(n) {
//   const state = {
//     cats: [
//       { catId: 1, name: "tom" },
//       { catId: 2, name: "tiggy" },
//       { catId: 3, name: "leo" },
//       { catId: 4, name: "nixie" },
//     ],
//     curpage: 3,
//   };

//   //solution 1
//   let {
//     cats: {
//       [n]: { name: thisCatName },
//     },
//   } = state;

//   //solution 2
//   //let { name: thisCatName } = state.cats[n];

//   return thisCatName;
// }

// console.log(returnNthCat(2));

// function pointValues(point) {
//   //Solution 1
//   //   const { name: n, age: a } = { ...point };
//   /* spread operator creates a new plain object with all properties of object.
//     When undefined value is spread, no value is stored in the new object, and no error is thrown.
//     later when we access values, since there are none, it returns undefined.  */

//   //Solution 2- assigning default values
//   /* const { name = "tom", age = 1 } = { ...point };
//     console.log(name);
//     console.log(age); */

//   // Solution 3-
//   // const { name: n, age: a } = point || {};

//   console.log(n);
//   console.log(a);
// }
// // pointValues({ name: "jerry", age: 2 });
// pointValues(undefined);

// map
const first = new Map([
  [2, "two"],
  [3, "three"],
  [1, "one"],
]);

// console.log(
//   "Object.entries alike structure to map --> back to iterator using entries -->  Object.entries alike",
//   first,
//   first.entries(),
//   [...first.entries()]
// );

const second = {
  2: "two",
  3: "three",
  1: "one",
};

// console.log("Object.entries", second, Object.entries(second), [
//   ...Object.entries(second),
// ]);

const mapAsc = new Map(
  [...first.entries()].sort((a, b) => {
    console.log("each entry ", a, b);
    // by value
    // const t1 = a[0] > b[0] || (a[0] === b[0] ? 0 : -1);
    // const t2 = a[0] - b[0];
    // console.log(t1, Boolean(t1), t2, Boolean(t2));
    return a[0] - b[0];
  })
);
console.log("mapAsc", mapAsc);

const objAsc = new Map(
  Object.entries(second).sort((a, b) => {
    console.log("each entry ", a, b);
    // by value
    // const t1 = a[0] > b[0] || (a[0] === b[0] ? 0 : -1);
    // const t2 = a[0] - b[0];
    // console.log(t1, Boolean(t1), t2, Boolean(t2));
    return a[0] - b[0];
  })
);
console.log("objAsc", objAsc);
