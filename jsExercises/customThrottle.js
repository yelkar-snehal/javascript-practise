function myThrottle(cb, interval) {
  let isThrottled = false;

  return function (...args) {
    if (!isThrottled) {
      cb.apply(this, args);
      isThrottled = true;

      setTimeout(() => {
        isThrottled = false;
      }, interval);
    }
  };

}

// Example usage:
const logMessage = (message) => {
  console.log(message);
};

const throttledLogMessage = myThrottle(logMessage, 3000);

throttledLogMessage("Hello, World!"); // Will log "Hello, World!" immediately
throttledLogMessage("Hello again!"); // Will be ignored since it's within the throttle interval

setTimeout(() => {
  throttledLogMessage("Hello after 3 seconds!"); // Will log "Hello after 3 seconds!" after 3 seconds
}, 3000);   