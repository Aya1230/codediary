// This is a function that just says hello
function sayHello() {
  console.log("Hello!");
}

// This function takes another function as an argument
function runSomething(callback) {
  // It runs (calls) the function it was given
  callback();
}

// We pass sayHello as a value (without parentheses!)
runSomething(sayHello); // ✅ Output: Hello!
