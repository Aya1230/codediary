# 6.5 Conditionals — JavaScript Fundamentals

## 📌 Learning Outcomes

- Understand what a conditional is
- Use `if`, `else if`, and `else` statements
- Use comparison operators
- Combine conditions with AND, OR, and NOT
- Use `switch` statements for multiple cases
- Write short decisions with ternary operators

---

## ✅ What is a Conditional?

A **conditional** runs different code depending on whether something is **true or false**.

```javascript
let age = 20;

if (age >= 18) {
  console.log("You're an adult.");
} else {
  console.log("You're a minor.");
}
```

---

## 🔁 if ... else ... else if

```javascript
let score = 75;

if (score >= 90) {
  console.log("Excellent!");
} else if (score >= 70) {
  console.log("Good job!");
} else {
  console.log("Keep practicing.");
}
```

---

## 🔍 Comparison Operators

| Operator | Meaning               | Example         | Result     |
|----------|------------------------|-----------------|------------|
| `==`     | Equal (loose)         | `5 == "5"`      | `true`     |
| `===`    | Equal (strict)        | `5 === "5"`     | `false`    |
| `!=`     | Not equal (loose)     | `5 != "5"`      | `false`    |
| `!==`    | Not equal (strict)    | `5 !== "5"`     | `true`     |
| `>`      | Greater than          | `7 > 3`         | `true`     |
| `<`      | Less than             | `4 < 4`         | `false`    |
| `>=`     | Greater or equal      | `5 >= 5`        | `true`     |
| `<=`     | Less or equal         | `2 <= 1`        | `false`    |

---

## 🔗 AND (`&&`), OR (`||`), NOT (`!`)

```javascript
let age = 20;
let hasID = true;

if (age >= 18 && hasID) {
  console.log("Entry allowed.");
}
```

```javascript
let day = "Saturday";

if (day === "Saturday" || day === "Sunday") {
  console.log("It's the weekend!");
}
```

```javascript
let isLoggedIn = false;

if (!isLoggedIn) {
  console.log("Please log in.");
}
```

---

## 🔄 switch Statement

```javascript
let day = "Monday";

switch (day) {
  case "Monday":
    console.log("Start of the week.");
    break;
  case "Friday":
    console.log("Almost weekend!");
    break;
  case "Saturday":
  case "Sunday":
    console.log("Weekend!");
    break;
  default:
    console.log("Midweek day.");
}
```

---

## ❓ Ternary Operator

```javascript
let age = 18;

let message = age >= 18 ? "You can vote." : "Too young.";
console.log(message); // "You can vote."
```

- Use for **simple if/else**
- Not good for complex logic

---

## ✅ Summary

- Use `if/else` for basic decisions
- Use `switch` when checking one value against many options
- Use `&&`, `||`, `!` to build smarter conditions
- Use ternary (`? :`) for short, simple checks
