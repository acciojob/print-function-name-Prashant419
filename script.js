//your JS code here. If required.
function functionName() {
  alert(arguments.callee.name);
}

// Using an explicitly named function
function accioJob() {
  alert("accioJob");
}
// Example usage
functionName();  // alert("functionName");
accioJob();      // alert("accioJob");
