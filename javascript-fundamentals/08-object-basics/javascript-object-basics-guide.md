# 6.8 JavaScript Object Basics

## 📌 Learning Outcomes

- Understand that most things in JavaScript are objects
- Create and use object literals
- Work with properties and methods
- Nest arrays and objects inside objects
- Use constructor functions to build objects
- Understand `this` and object scope
- Access properties and methods with dot and bracket syntax
- Use object destructuring

---

## 🧠 Most Things Are Objects

In JavaScript, many things are objects:

- `console`, `Math`, `document`, etc.
- You’ve already used objects many times.

Example:

```javascript
console.log("Hello"); // 'console' is an object
```

---

## 🔤 Object Literals

Create an object using curly braces `{}`:

```javascript
let user = {
  name: "Sara",
  age: 25,
  isStudent: true,
};
```

---

## 🧱 Properties and Methods

**Property** = key–value pair  
**Method** = function stored inside an object

```javascript
let car = {
  brand: "Toyota",
  start: function () {
    console.log("Engine started!");
  },
};

console.log(car.brand); // "Toyota"
car.start(); // "Engine started!"
```

---

## 🧳 Nesting Objects and Arrays

You can nest arrays, objects, or both.

```javascript
let user = {
  name: "Sara",
  address: {
    city: "Berlin",
    zip: "10115",
  },
  hobbies: ["reading", "traveling"],
};

console.log(user.address.city); // "Berlin"
console.log(user.hobbies[1]); // "traveling"
```

---

## 🏗 Constructor Functions

Used to create many similar objects.

```javascript
function Animal() {
  this.type = "cat";
}

let pet = new Animal(); // { type: "cat" }
console.log(pet.type); // "cat"
```

---

## 🔁 Object Scope and `this`

`this` refers to the current object the method is in.

```javascript
let user = {
  name: "Sara",
  greet: function () {
    console.log("Hi, I'm " + this.name);
  },
};

user.greet(); // "Hi, I'm Sara"
```

---

## 🔓 Dot vs Bracket Syntax

Two ways to access object properties:

```javascript
let key = "name";

let user = {
  name: "Sara",
  greet: function () {
    console.log("Hi!");
  },
};

console.log(user.name); // Dot syntax
console.log(user["name"]); // Bracket syntax
console.log(user[key]); // With variable
user["greet"](); // Call method with bracket
```

---

## 🧩 Object Destructuring

Pull values out of an object in one line:

```javascript
let user = {
  name: "Sara",
  age: 25,
};

// Without destructuring
let userName = user.name;
let userAge = user.age;

// With destructuring
let { name, age } = user;

console.log(name); // "Sara"
console.log(age); // 25
```

---

## ✅ Summary Table

| Concept        | Description                                |
| -------------- | ------------------------------------------ |
| Object Literal | `{ key: value }`                           |
| Property       | Value stored in an object                  |
| Method         | Function stored in an object               |
| `this`         | Refers to the current object               |
| Constructor    | Function used to build new objects         |
| Dot Syntax     | `object.key`                               |
| Bracket Syntax | `object["key"]` or `object[variable]`      |
| Destructuring  | `let { a, b } = object` to pull out values |
