// function myThrottle(cb, interval) {
//   let isThrottled = false;

//   return function (...args) {
//     if (!isThrottled) {
//       cb.apply(this, args);
//       isThrottled = true;

//       setTimeout(() => {
//         isThrottled = false;
//       }, interval);
//     }
//   };

// }

// Example usage:
const logMessage = (message) => {
  console.log(message);
};

// const throttledLogMessage = myThrottle(logMessage, 3000);

// throttledLogMessage("Hello, World!"); // Will log "Hello, World!" immediately
// throttledLogMessage("Hello again!"); // Will be ignored since it's within the throttle interval

// setTimeout(() => {
//   throttledLogMessage("Hello after 3 seconds!"); // Will log "Hello after 3 seconds!" after 3 seconds
// }, 3000);

// trailing edge throttle
function myThrottleTrailing(cb, interval) {
  let isThrottled = false;
  let lastArgs = null;

  return function (...args) {
    if (!isThrottled) {
      cb.apply(this, args);
      isThrottled = true;

      setTimeout(() => {
        isThrottled = false;
        if (lastArgs) {
          cb.apply(this, lastArgs);
          lastArgs = null;
        }
      }, interval);
    } else {
      lastArgs = args;
    }
  };

}

// Example usage:
const throttledLogMessageTrailing = myThrottleTrailing(logMessage, 3000);

throttledLogMessageTrailing("Hello, World!"); // Will log "Hello, World!" immediately
throttledLogMessageTrailing("Hello again!"); // Will be ignored but stored as lastArgs

setTimeout(() => {
  throttledLogMessageTrailing("Hello after 3 seconds!"); // Will log "Hello again!" immediately after 3 seconds, and "Hello after 3 seconds!" will be ignored
}, 3000);


function myThrottleBoth(cb, interval) {
  let isThrottled = false;
  let lastArgs = null;
  let lastThis = null;

  return function (...args) {
    if (!isThrottled) {
      // Leading call
      cb.apply(this, args);
      isThrottled = true;

      const run = () => {
        if (lastArgs) {
          // Run trailing call
          cb.apply(lastThis, lastArgs);
          lastArgs = null;
          lastThis = null;

          // Continue cycle
          setTimeout(run, interval);
        } else {
          // Stop cycle
          isThrottled = false;
        }
      };

      setTimeout(run, interval);
    } else {
      // Save latest call
      lastArgs = args;
      lastThis = this;
    }
  };
}