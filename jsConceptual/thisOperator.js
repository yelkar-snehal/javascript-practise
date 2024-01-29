// "use strict";

//  global context
// prints the reference to the global object; browser: window, node: runntime env
console.log(this);

// functionol context
function foo() {
  //  inisde the fn this reference changes w.r.t. the mode strict/non strict, undefined/global
  console.log(this);
}
foo();
