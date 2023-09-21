console.log("Executing generator script");

function* idMaker() {
  let index = 0;
  const condition = () => index < 5;
  const condition2 = index < 5;
  console.log({ condition, condition2 });
  while (condition()) {
    console.log("iterating");
    yield index++;
  }
}

const gen = idMaker();

console.log(gen.next().value); // 0
console.log(gen.next().value); // 1
console.log(gen.next().value); // 2
console.log(gen.next().value); // 3
console.log(gen.next().value); // 4
console.log(gen.next().value); // undefined
// …
