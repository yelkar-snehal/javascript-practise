const arr: number[] = [];

function time(fn: () => void): number {
  const now = Date.now();
  fn();
  return Date.now() - now;
}

function unshift(number: number) {
  for (let i = 0; i < number; ++i) {
    arr.unshift(Math.random());
  }
}

function shift(number: number) {
  for (let i = 0; i < number; ++i) {
    arr.shift();
  }
}

function push(number: number) {
  for (let i = 0; i < number; ++i) {
    arr.push(Math.random());
  }
}

function pop(number: number) {
  for (let i = 0; i < number; ++i) {
    arr.pop();
  }
}

function get(idx: number) {
  return function () {
    return arr[idx];
  };
}

function push_arr(count: number) {
  return function () {
    push(count);
  };
}

function pop_arr(count: number) {
  return function () {
    pop(count);
  };
}

function unshift_arr(count: number) {
  return function () {
    unshift(count);
  };
}

function shift_arr(count: number) {
  return function () {
    shift(count);
  };
}

const tests = [10, 100, 1000, 10000, 100000, 1_000_000, 10_000_000];
console.log("Testing get");
tests.forEach((t) => {
  arr.length = 0;
  push(t);
  console.log(t, time(get(t - 1)));
});

console.log("push");
tests.forEach((t) => {
  arr.length = 0;
  push(t);

  console.log(t, time(push_arr(1000)));
});

console.log("pop");
tests.forEach((t) => {
  arr.length = 0;
  push(t);

  console.log(t, time(pop_arr(1000)));
});

console.log("unshift");
tests.forEach((t) => {
  arr.length = 0;
  push(t);

  console.log(t, time(unshift_arr(1000)));
});

console.log("shift");
tests.forEach((t) => {
  arr.length = 0;
  push(t);

  console.log(t, time(shift_arr(1000)));
});
