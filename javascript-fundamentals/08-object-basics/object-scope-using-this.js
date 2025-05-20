// Create an object called 'user' with two things inside: a name and a method
let user = {
  name: "Sara", // This is a property

  // This is a method (a function inside the object)
  greet: function () {
    // 'this' refers to the object where this method lives — in this case, 'user'
    console.log("Hi, I'm " + this.name);
  },
};

// Call the 'greet' method from the 'user' object
user.greet(); // ✅ Output: "Hi, I'm Sara"

//Note: this points to the object that called the method
