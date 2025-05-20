// Step 1: Create a constructor function to build an object
function Animal() {
  // 'this' refers to the new object being created
  // We add a property called 'type' and set its value to "cat"
  this.type = "cat";
}

// Step 2: Use the constructor to create a new object
// 'new Animal()' creates a new object and sets this.type = "cat"
let pet = new Animal();

// Step 3: Access the 'type' property of the object we just made
// This prints "cat" to the console
console.log(pet.type); // ✅ Output: "cat"
