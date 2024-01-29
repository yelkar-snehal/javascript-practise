//  global context

// prints the reference to the global object; browser: window, node: runntime env
console.log(this);

// functionol context
function foo() {
  console.log(this);
}
foo();
