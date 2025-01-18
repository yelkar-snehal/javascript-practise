https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/this

- this oeprator has a separate behavior for JS strict mode and non-strict mode
- this substitution: if the value(reference) is undefined or null, JS will replace the value with the global object in non-strict mode
- In strict mode, this in a function defaults to undefined instead of the global object.
- side note: TypeError: 'caller', 'callee', and 'arguments' properties may not be accessed on strict mode functions or the arguments objects for calls to them
  at Function.invokeGetter (<anonymous>:3:28)
- this value depends on how the function is called(runtime binding)
- arrow functions' this refers to the enclosing objects' lexical context
- side note: function inside an object is called a method
- In the constructor function, this has no value. The value of this will become the new object when a new object is created.
