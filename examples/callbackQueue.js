console.log("Start");

setTimeout(() => {
  console.log("Inside setTimeout");
}, 1000);

console.log("End");

// anything that takes time to execute in an async manner 
//is put in a callback queue to wait 
// for the completion and then execute in the 
// stack frame