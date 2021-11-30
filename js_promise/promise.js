// We declaring a new promise in here
const promise1 = new Promise(function (resolve, reject) {
  // We declaring a variable for testing
  let variable = true;
  if (variable == true) {
    // If everything is ok output is going to be "done!"
    resolve("done!");
  } else {
    // If there is a problem output is going to be "error!"
    reject("error!");
  }
});

promise1
  .then(function (response) {
    // If everything is ok this code is working
    console.log(response);
  })
  .catch(function (err) {
    // If there is an error this code is working
    console.log(err);
  });
