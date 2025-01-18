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

// object
// Copies properties from a source object to a target object
Object.assign(target, source);

// Creates an object from an existing object
Object.create(object);

// Returns an array of the key/value pairs of an object
Object.entries(object);

// Creates an object from a list of keys/values
Object.fromEntries();

// Returns an array of the keys of an object
Object.keys(object);

// Returns an array of the property values of an object
Object.values(object);

// Groups object elements according to a function
Object.groupBy(object, callback);

// Prevents re-assignment
const car = { type: "Fiat", model: "500", color: "white" };

// Prevents adding object properties
Object.preventExtensions(object);

// Returns true if properties can be added to an object
Object.isExtensible(object);

// Prevents adding and deleting object properties
Object.seal(object);

// Returns true if object is sealed
Object.isSealed(object);

// Prevents any changes to an object
Object.freeze(object);

// Returns true if object is frozen
Object.isFrozen(object);
