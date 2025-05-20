function test() {
  let mood = "happy"; // 🔒 Only inside this function
  console.log(mood); // ✅ Works here
}

test();
// console.log(mood); // ❌ Error: mood is not defined
