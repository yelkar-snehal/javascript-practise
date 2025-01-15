console.log(a); // Output: undefined (hoisted)
var a = 10;
var a = 20; // Re-declaration allowed

{
  let b = 10;
  console.log(b); // Output: 10
}
// console.log(b); // Error: b is not defined

const c = 30;
// c = 40; // Error: Assignment to constant variable

const obj = { name: "Alice" };
obj.name = "Bob"; // Allowed
console.log(obj); // Output: { name: "Bob" }

// the "n" at the end means it's a BigInt
const bigInt = 1234567890123456789012345678901234567890n;

let id1 = Symbol("id");
let id2 = Symbol("id");

alert(id1 == id2); // false

// read from the global registry
let id = Symbol.for("id"); // if the symbol did not exist, it is created

// read it again (maybe from another part of the code)
let idAgain = Symbol.for("id");

// the same symbol
alert(id === idAgain); // true

// get symbol by name
let sym = Symbol.for("name");
let sym2 = Symbol.for("id");

// get name by symbol
alert(Symbol.keyFor(sym)); // name
alert(Symbol.keyFor(sym2)); // id
