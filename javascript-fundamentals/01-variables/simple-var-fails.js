// ❌ var — doesn't work (in function scope)
function greet() {
  var message = "Hello";
}
console.log(message); // ❌ Error: message is not defined
