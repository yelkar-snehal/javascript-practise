function outer() {
  let count = 0; // Outer variable
  return function inner() {
    count++;
    console.log(`Count is ${count}`);
  };
}

const counter = outer();
counter(); // Output: Count is 1
counter(); // Output: Count is 2

// Partial Application Example:
function add(a, b, c) {
  return a + b + c;
}

const partialAdd = add.bind(null, 5); // Fixing 'a = 5'
console.log(partialAdd(3, 2)); // Output: 10 (5 + 3 + 2)

// currying
function curriedAdd(a) {
  return function (b) {
    return function (c) {
      return a + b + c;
    };
  };
}

console.log(curriedAdd(5)(3)(2)); // Output: 10 (5 + 3 + 2)
