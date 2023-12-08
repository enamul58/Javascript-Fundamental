let w;
function startWorker() {
  if (typeof Worker !== "undefined") {
    // worker available

    // if w is not already define
    if (typeof w == "undefined") {
      // create a new worker
      w = new Worker("worker.js");
    }

    w.onmessage = function (event) {
      document.getElementById("demo").innerHTML = event.data;
    };
  } else {
    alert("your browser does not support web worker");
  }
}

function stopWarker() {
  if (typeof Worker !== "undefined") {
    w.terminate();
  } else {
    alert("your borwser does not support web worker");
  }
}
