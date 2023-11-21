foo(); //  let and const will throw error here, access denied before initialization
console.log(x);
console.log(foo);

var x = 10;
// let x = 10
// const x = 10

function foo() {
  console.log(x);
}
// const first = (second) => { third }
// not hoisted
