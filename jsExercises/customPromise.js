function myPromise(promises) {
  const results = []
  let completed = 0

  if (promises.length === 0) {
    return Promise.resolve(results)
  }

  if (!Array.isArray(promises)) {
    return Promise.reject(new TypeError("Input must be an array"))
  }

  return new Promise((resolve, reject) => {
    promises.forEach((promise, index) => {
      Promise.resolve(promise).then((result) => {
        results[index] = result
        completed++

        if (completed === promises.length) {
          resolve(results)
        }
      }).catch((error) => {
        reject(error)
      })
    })
  })
}

// Example usage:
const promise1 = new Promise((resolve) => setTimeout(() => resolve('Result 1'), 1000))
const promise2 = 2
const promise3 = new Promise((resolve) => setTimeout(() => resolve('Result 3'), 1500))

myPromise([promise1, promise2, promise3])
  .then((results) => {
    console.log(results) // ['Result 1', 'Result 2', 'Result 3']
  })
  .catch((error) => {
    console.error(error)
  })      