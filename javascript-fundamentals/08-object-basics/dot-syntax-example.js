let car = {
  brand: "Toyota",
  start: function () {
    console.log("Engine started!");
  },
};

// Access a property using dot syntax
console.log(car.brand); // ✅ Output: "Toyota"

// Access a method using dot syntax
car.start(); // ✅ Output: "Engine started!"
