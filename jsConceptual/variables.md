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
