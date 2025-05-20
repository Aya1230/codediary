if (true) {
  let color = "blue"; // 🔒 Block-scoped
  console.log(color); // ✅ OK
}

// console.log(color); // ❌ Error: not accessible outside the block
