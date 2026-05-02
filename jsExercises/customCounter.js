function myCounter(initialValue = 0) {

  let count = initialValue;

  return {
    increment() {
      return ++count;
    },
    decrement() {
      return --count;
    },
    getCount() {
      return count;
    },
    reset() {
      count = initialValue;
    }
  };

}

// Example usage:
const counter = myCounter(5);

counter.increment();
counter.increment();
console.log(counter.getCount()); // Output: 7

counter.decrement();
console.log(counter.getCount()); // Output: 6

counter.reset();
console.log(counter.getCount()); // Output: 5