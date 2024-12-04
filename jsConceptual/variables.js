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
