console.log("Executing webworker script");
const first = document.querySelector("#number1");
const second = document.querySelector("#number2");

const result = document.querySelector(".result");

if (typeof Worker !== "undefined") {
  document.getElementById("browser").innerHTML =
    "Your browser supports Web Workers";
  // taking a load off from main thread
  var myWorker = new Worker("./intenseComputations.js");

  first.onchange = function () {
    myWorker.postMessage([first.value, second.value]);
    console.log("Message posted to worker");
  };

  second.onchange = function () {
    myWorker.postMessage([first.value, second.value]);
    console.log("Message posted to worker");
  };
  /* 
    JavaScript is single-threaded. As a result, long-lasting 
    computations (not necessarily due to poorly written code) 
    will block the UI thread and make it frustrating
    so,
    HTML5 Web-Workers
 */
  //   myWorker.addEventListener("message", (event) => {
  //     console.log(`Received message from worker: ${event.data}`);
  //   });
  //   onmessage() will be listing to our worker and receives post message
  myWorker.onmessage = function (event) {
    console.log("We got some data delivered!", event.data);
  };
}
