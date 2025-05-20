// Create an object
let user = {
  name: "Sara",
  age: 25,
};

// ❌ Without destructuring
// You access each property one at a time
let userName1 = user.name;
let userAge1 = user.age;

console.log(userName1); // ✅ "Sara"
console.log(userAge1); // ✅ 25

// ✅ With destructuring
// You pull both values out in one line
let { name: userName2, age: userAge2 } = user;

console.log(userName2); // ✅ "Sara"
console.log(userAge2); // ✅ 25
