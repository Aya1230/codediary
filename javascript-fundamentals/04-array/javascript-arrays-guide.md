# 6.4 Arrays — JavaScript Fundamentals

## 📌 Learning Outcomes

- Understand what arrays are and how to use them
- Access, modify, and manipulate arrays
- Use common and advanced array methods

---

## 📦 What is an Array?

An **array** is a data structure that stores a **list of values** in a single variable.

```javascript
let fruits = ["apple", "banana", "cherry"];
```

- Each item is called an **element**
- Each element has a position called an **index**, starting from 0

---

## 🎯 Accessing and Modifying Items

### Access with `myArray[index]`

```javascript
console.log(fruits[0]); // ✅ "apple"
console.log(fruits[1]); // ✅ "banana"
```

### Modify with `myArray[index] = newValue`

```javascript
fruits[1] = "orange";
console.log(fruits); // ✅ ["apple", "orange", "cherry"]
```

---

## 🛠 Common Array Methods

### 1. `.length`

```javascript
let colors = ["red", "blue", "green"];
console.log(colors.length); // ✅ 3
```

### 2. `.indexOf()`

```javascript
console.log(fruits.indexOf("cherry")); // ✅ 2
console.log(fruits.indexOf("pear"));   // ❌ -1
```

### 3. `.push()` — Add to end

```javascript
fruits.push("grape");
```

### 4. `.pop()` — Remove from end

```javascript
fruits.pop();
```

### 5. `.shift()` — Remove from start

```javascript
fruits.shift();
```

### 6. `.unshift()` — Add to start

```javascript
fruits.unshift("kiwi");
```

### 7. `.join()` — Combine into string

```javascript
let sentence = fruits.join(", ");
console.log(sentence); // ✅ "apple, orange, cherry"
```

### 8. `.split()` — Turn string into array

```javascript
let letters = "a,b,c".split(",");
```

---

## 🚀 Advanced Array Methods

### 1. `.forEach()` — Do something with each item

```javascript
fruits.forEach(function(fruit) {
  console.log(fruit);
});
// ✅ apple, orange, cherry
```

### 2. `.map()` — Create a new array with transformed values

```javascript
let numbers = [1, 2, 3];
let doubled = numbers.map(function(num) {
  return num * 2;
});
console.log(doubled); // ✅ [2, 4, 6]
```

### 3. `.filter()` — Create a new array with selected items

```javascript
let ages = [15, 21, 30, 17];
let adults = ages.filter(function(age) {
  return age >= 18;
});
console.log(adults); // ✅ [21, 30]
```

---

## 🧠 Methods vs Functions

| Term     | What It Is                    | Example                      |
|----------|-------------------------------|------------------------------|
| Function | Reusable block of code        | `function greet() {}`        |
| Method   | Function attached to an object| `"hello".toUpperCase()`      |

---

## ✅ Summary

- Arrays hold multiple values and use index numbers
- You can access, update, and loop through items
- Use `.forEach()` to act, `.map()` to transform, and `.filter()` to select
