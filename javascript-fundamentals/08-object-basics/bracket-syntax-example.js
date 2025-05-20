let key = "brand";

let car = {
  brand: "Toyota",
  start: function () {
    console.log("Engine started!");
  },
};

// Access a property using bracket syntax and a variable
console.log(car[key]); // ✅ Output: "Toyota"

// Access a method using a string key
car["start"](); // ✅ Output: "Engine started!"
