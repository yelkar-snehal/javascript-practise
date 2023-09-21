//fn hoisting and iife
console.log("executing iife script");

var i = "foo";

(function () {
  console.log("Original value was: " + i);
  var i = "bar";
  console.log("New value is: " + i);
})();

console.log("New value outside iife is: " + i);

/**
 * Original value was: undefined
   New value is: bar

   The IIFE is an expression, not a statement, so no it is not hoisted.

   var i inside the IIFE is hoisted to the top of the function scope, 
   but the assignment is not. The following is equivalent:

   this is equivalent to:

   (function(){
    var myVar;
    console.log('Original value was: '+ myVar);
    myVar = 'bar';
    console.log('New value is: ' + myVar);
   })();

   therefore if tried with let it would throw the below error
   Uncaught ReferenceError: Cannot access 'i' before initialization
 */
