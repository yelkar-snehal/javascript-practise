console.log(a); // Output: undefined (hoisted)
var a = 10;
var a = 20; // Re-declaration allowed

{
  let b = 10;
  console.log(b); // Output: 10
}
// console.log(b); // Error: b is not defined
