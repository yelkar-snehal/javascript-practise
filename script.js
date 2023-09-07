console.log("Started script");

// console.log(setTimeout(() => console.log("Normal setTimeout"), 3000))
let counter = 0;
const onKeyDown = (value) => {
  console.log({ value, counter });
  console.log(this.value + " in onKeyDown");
  counter++;
};

const debounce = (fn, delay) => {
  console.log(fn);
  let timer;
  let counter2 = 0;
  return (...args) => {
    const ctx = this;
    console.log({ counter2 });
    counter2++;
    clearTimeout(timer);
    timer = setTimeout(() => fn.apply(ctx, args), delay);
  };
};

const throttle = (fn, delay) => {
  let shouldCall = true;
  return (...args) => {
    const ctx = this;
    if (shouldCall) {
      console.log(this.value + " in throttle");
      fn.apply(ctx, args);
      shouldCall = false;
      setTimeout(() => (shouldCall = true), delay);
    }
  };
};

const debouncedKeyDown = debounce(onKeyDown, 10000);
const throttledKeyDown = throttle(onKeyDown, 2000);
