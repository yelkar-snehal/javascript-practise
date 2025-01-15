var:
Scope: Function-scoped.
Hoisting: Variables declared with var are hoisted to the top of their scope but remain undefined until the assignment.
Re-declaration: Can be re-declared within the same scope.
Use: Avoid using var in modern JavaScript due to its quirks.

let:
Scope: Block-scoped.
Hoisting: Variables declared with let are hoisted but are not initialized, resulting in a "temporal dead zone" until the declaration.
Re-declaration: Cannot be re-declared in the same scope.
Use: Preferred for variables that will be reassigned.

const:
Scope: Block-scoped.
Hoisting: Similar to let, const is hoisted but has a temporal dead zone.
Re-declaration: Cannot be re-declared or reassigned.
Use: Preferred for variables that won’t be reassigned (though object/array properties can still be modified).

tmz:
temporal dead zone: time between variable hoisting and initialization, when accessed here variable throws refereence error
that's why prefer to initialize variables at the top

misc:

- If you assign a value to a variable that has not been declared i.e potato = true it will automatically become a GLOBAL variable.
- dynamicaaly typed
- For most purposes ±(253-1) range is quite enough, but sometimes we need the entire range of really big integers, e.g. for cryptography or microsecond-precision timestamps. BigInt type was recently added to the language to represent integers of arbitrary length. A BigInt value is created by appending n to the end of an integer
- The special null, undefined values do not belong to any of the types
- The symbol type is used to create unique identifiers for objects. Symbols can be created using the Symbol() function, and their primary use case is to add hidden or special properties to objects that won’t interfere with other properties or methods. Since a symbol is a primitive value, if you attempt to create a symbol using the new operator, you will get an error. Symbolic properties do not participate in for..in loop. Object.keys(user) also ignores them. Object.assign copies both string and symbol properties
