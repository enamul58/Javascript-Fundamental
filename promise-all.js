let promiseCall = function (returnData, message) {
  return function (myResolve, myReject) {
    setTimeout(() => {
      console.log(`The ${message} promise has resolved`);
      myResolve(returnData);
    }, returnData * 100);
  };
};

let p1 = new Promise(promiseCall(10, "first"));
let p2 = new Promise(promiseCall(20, "two"));
let p3 = new Promise(promiseCall(30, "three"));

let total = 0;
Promise.all([p1, p2, p3])
  .then((result) => {
    for (let i in result) {
      total += result[i];
      console.log(`${result}`);
    }
    console.log(total);
  })
  .catch((error) => {
    console.log(error);
  });
