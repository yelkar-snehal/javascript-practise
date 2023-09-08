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

// event bubbling and trickling
// document
//   .querySelector("#grandma")
//   .addEventListener("click", () => console.log("grandma clicked"));

// document
//   .querySelector("#ma")
//   .addEventListener("click", () => console.log("ma clicked"));

// document
//   .querySelector("#child")
//   .addEventListener("click", () => console.log("child clicked"));

// event delegation
document.querySelector("#category").addEventListener("click", (e) => {
  console.log("category clicked", e.target.id);
  // additional if check avoids nested event bubbling
  if (e.target.tagName === "LI") window.location.href = `/${e.target.id}`;
});
