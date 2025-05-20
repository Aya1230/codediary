# 6.2 Math — JavaScript Fundamentals

## 📌 Learning Outcomes

- Perform basic math operations
- Understand type issues between numbers and strings
- Convert strings to numbers and vice versa
- Understand operator precedence
- Use increment and decrement shortcuts
- Use assignment operators
- Use comparison operators
- Work with Math object methods

---

## ➕ Basic Number Operations

JavaScript uses standard math symbols:

```javascript
let a = 10;
let b = 5;

console.log(a + b); // 15
console.log(a - b); // 5
console.log(a * b); // 50
console.log(a / b); // 2
```

---

## 🔁 Numbers vs Strings

A number in quotes is treated as a string, not a real number.

```javascript
let a = "10"; // string
let b = 5;
console.log(a + b); // "105" (string concatenation)
```

✅ Convert string to number:

```javascript
let a = Number("10"); // 10 as a real number
console.log(a + 5); // 15
```

✅ Convert number to string:

```javascript
let score = 100;
let scoreStr = score.toString();
console.log(scoreStr); // "100"
console.log(typeof scoreStr); // "string"
```

---

## ⚖️ Operator Precedence

JavaScript follows math order:

1. Parentheses
2. Multiply/Divide
3. Add/Subtract

```javascript
let result = 2 + 3 * 4; // 14
let result2 = (2 + 3) * 4; // 20
```

---

## 🔼 Incrementing and 🔽 Decrementing

```javascript
let x = 5;
x++; // 6
x--; // 5
```

### Prefix vs Postfix

```javascript
let a = 5;
console.log(a++); // 5 (then becomes 6)
console.log(++a); // 7 (increased first)
```

---

## 🧮 Assignment Operators

| Operator | Example  | Same As     |
| -------- | -------- | ----------- |
| `+=`     | `x += 2` | `x = x + 2` |
| `-=`     | `x -= 2` | `x = x - 2` |
| `*=`     | `x *= 3` | `x = x * 3` |
| `/=`     | `x /= 2` | `x = x / 2` |

---

## 🔍 Comparison Operators

| Operator | Meaning               | Example     | Result  |
| -------- | --------------------- | ----------- | ------- |
| `==`     | Equal (loose)         | `5 == "5"`  | `true`  |
| `===`    | Equal (strict)        | `5 === "5"` | `false` |
| `!=`     | Not equal (loose)     | `5 != "5"`  | `false` |
| `!==`    | Not equal (strict)    | `5 !== "5"` | `true`  |
| `>`      | Greater than          | `7 > 4`     | `true`  |
| `<`      | Less than             | `3 < 1`     | `false` |
| `>=`     | Greater than or equal | `5 >= 5`    | `true`  |
| `<=`     | Less than or equal    | `6 <= 4`    | `false` |

---

## 🧠 Math Object Methods

JavaScript includes a built-in `Math` object with useful methods:

| Method          | Example           | Description                         | Result     |
| --------------- | ----------------- | ----------------------------------- | ---------- |
| `Math.random()` | `Math.random()`   | Random number between 0 and 1       | e.g., 0.47 |
| `Math.floor(x)` | `Math.floor(4.9)` | Rounds down to nearest whole number | 4          |
| `Math.ceil(x)`  | `Math.ceil(4.1)`  | Rounds up to nearest whole number   | 5          |

✅ Example combining them:

```javascript
let randomNum = Math.floor(Math.random() * 10) + 1;
console.log(randomNum); // Random number from 1 to 10
```

---

## 🔤 Why Is `Math` Capitalized?

- `Math` is a built-in global **object**
- Capitalized like other core objects: `Date`, `Array`, `Object`
- Even though most user-made objects use lowercase, built-in ones often use uppercase

---
