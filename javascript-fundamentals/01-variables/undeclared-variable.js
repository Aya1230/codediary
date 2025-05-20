// Example of using an undeclared variable
if (true) {
  z = 15; // No declaration - becomes a global variable
}
console.log(z); // ✅ Works - but this is dangerous due to safety issues!
