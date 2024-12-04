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

// real life scenario
function urlBuilder(baseUrl) {
  return function (path) {
    return function (queryParams) {
      const queryString = Object.keys(queryParams)
        .map((key) => `${key}=${queryParams[key]}`)
        .join("&");
      return `${baseUrl}/${path}?${queryString}`;
    };
  };
}

const apiBase = urlBuilder("https://api.example.com");
const userEndpoint = apiBase("users");
console.log(userEndpoint({ id: 123, active: true }));
// Output: https://api.example.com/users?id=123&active=true
