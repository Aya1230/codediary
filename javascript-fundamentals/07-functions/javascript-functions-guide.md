# 6.7 Functions — JavaScript Fundamentals

## 📌 Learning Outcomes

- Understand what functions are and why we use them
- Know the difference between functions and methods
- Learn how to define, call, and return values from functions
- Understand scope, arguments, and function types
- Learn about callback and arrow functions

---

## 🧠 What Are Functions?

A function is a reusable block of code. You can run it (call it) whenever needed.

### Built-in function example:

```javascript
console.log("Hello"); // Built-in browser function
```

### User-defined function example:

```javascript
function greet() {
  console.log("Hi!");
}
greet(); // Call the function
```

---

## 🔄 Functions vs Methods

| Type     | Description                    | Example                 |
| -------- | ------------------------------ | ----------------------- |
| Function | Reusable code block            | `function greet() {}`   |
| Method   | Function attached to an object | `"hello".toUpperCase()` |

---

## 🔔 Invoking a Function

```javascript
function sayHello() {
  console.log("Hello!");
}

sayHello(); // ✅ Calls the function
```

---

## 🔁 Return Values

```javascript
function add(a, b) {
  return a + b; // Sends result back
}

let result = add(4, 5); // result is 9
console.log(result);
```

---

## 🌍 Scope: Global vs Function vs Block

```javascript
let globalVar = "I'm global";

function show() {
  let localVar = "I'm local";
  console.log(globalVar); // ✅ works
  console.log(localVar); // ✅ works
}

// console.log(localVar); // ❌ Error: not in scope
```

---

## 📨 Passing Arguments

```javascript
function greet(name) {
  console.log("Hello, " + name);
}

greet("Sara"); // ✅ Sara is the argument
```

---

## 🏷 Named vs Anonymous Functions

| Type      | Has a name? | Example                     |
| --------- | ----------- | --------------------------- |
| Named     | ✅ Yes      | `function greet() {}`       |
| Anonymous | ❌ No       | `let greet = function() {}` |

---

## 🛠 Custom Functions with Parameters and Return

```javascript
function multiply(x, y) {
  return x * y;
}

let product = multiply(3, 4); // ✅ product = 12
```

---

## 🔁 Callback Functions (Simple)

```javascript
function sayHi() {
  console.log("Hi!");
}

function callLater(callback) {
  callback(); // Runs the function passed in
}

callLater(sayHi); // ✅ Output: Hi!
```

---

## ➡️ Arrow Functions

### Basic form:

```javascript
let greet = (name) => {
  console.log("Hi, " + name);
};
```

### Short one-liner:

```javascript
let add = (a, b) => a + b;
console.log(add(2, 3)); // ✅ 5
```

---

## ✅ Summary

| Concept        | What It Does                         |
| -------------- | ------------------------------------ |
| `function()`   | Creates a regular function           |
| `return`       | Sends a result out of a function     |
| `callback()`   | Function passed to another function  |
| Arrow function | Shorter syntax using `=>`            |
| Scope          | Controls where variables can be used |
