A closure is a function that retains access to its outer (enclosing) function’s variables, even after the outer function has returned. Closures are created every time a function is defined.

Use Cases:
Data Encapsulation: Create private variables.
Event Handlers: Preserve variables in asynchronous code.
Currying Functions: Create functions with preset arguments.

fn bundled along with its lexical scope
fn has access to its scope even after the outer fn has been executed
this can be seen in the browser while debugging in the "closure" field
can be used for currying, memoise, setTieout, encapsulation
infact setTimeout can access the variables ouside it because of closures
memory leak is one of the cons in closure
memory garbage collection doesn't always happen
v8 engine optimises this
to form a closure enclose everything within a function
new keyword with a function for ms a ctror; good practise is to have ctor's
first letter as Capital
