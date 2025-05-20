if (true) {
  var x = 5;
}
console.log(x); // ✅ Works — but maybe you didn’t want it to!

if (true) {
  let y = 10;
}
console.log(y); // ❌ Error — y is safely contained in the block
