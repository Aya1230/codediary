let user = {
  name: "Sara",
  greet: function () {
    console.log("Hi, I'm " + this.name);
  },
};

user.greet(); // ✅ Output: "Hi, I'm Sara"
