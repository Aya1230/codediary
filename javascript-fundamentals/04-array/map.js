let numbers = [1, 2, 3];

// Use .map() to create a new array with each number doubled
let doubled = numbers.map(function (num) {
  return num * 2; // Multiply each item by 2
});

console.log(doubled); // ✅ [2, 4, 6]

// ✅ .map() RETURNS a new array
// ✅ It does not change the original array
