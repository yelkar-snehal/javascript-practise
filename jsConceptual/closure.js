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
