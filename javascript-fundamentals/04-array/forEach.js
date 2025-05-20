let fruits = ["apple", "banana", "cherry"];

// Use .forEach() to do something with each fruit
fruits.forEach(function (fruit) {
  // This function runs once for every item in the array
  console.log(fruit); // ✅ Just print the fruit
});

// ✅ Output:
// apple
// banana
// cherry

// ⚠️ .forEach() does not return a new array — just acts on each item
