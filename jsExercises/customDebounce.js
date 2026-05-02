function myDebounce(cb, delay) {
  let timeoutId;

  return function (...args) {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => {
      cb.apply(this, args);
    }, delay);
  };

}

// Example usage:
const logMessage = (message) => {
  console.log(message);
};

const debouncedLogMessage = myDebounce(logMessage, 3000);

debouncedLogMessage("Hello, World!"); // Will log "Hello, World!" after 2 seconds
debouncedLogMessage("Hello again!"); // Will reset the timer and log "Hello again!" after 2 seconds 