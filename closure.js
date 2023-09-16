console.log("executing closure script");
/**
 * fn bundled along with its lexical scope
 * fn has access to its scope even after the outer fn has been executed
 *
 * this can be seen in the browser while debugging in the "closure" field
 *
 * can be used for currying, memoise, setTieout, encapsulation
 * infact setTimeout can access the variables ouside it because of closures
 *
 * memory leak is one of the cons in closure
 * memory garbage collection doesn't always happen
 * v8 engine optimises this
 *
 * to form a closure enclose everything within a function
 *
 * new keyword with a function for ms a ctror; good practise is to have ctor's
 * first letter as Capital
 *
 */
