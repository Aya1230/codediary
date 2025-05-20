# 6.1 Variables — JavaScript Fundamentals

## 📌 Learning Outcomes

- Understand what variables are and why they are important
- Learn how to declare and initialize variables
- Know how to reassign values to variables
- Understand `const` and how constants work
- Recognize the difference between variables and constants
- Follow variable naming best practices
- Learn the types of values that can be stored in variables

---

## ✅ What Are Variables?

A variable is a named container that holds a value. It lets you store data and use or change it later.

```javascript
let name = "Sara";
console.log(name); // Output: "Sara"
```

Variables are used in **all programming languages**, not just JavaScript.

---

## 🛠 Declaring Variables with `let`

```javascript
let mood = "happy";       // Declare and initialize
mood = "excited";         // Reassign the value
console.log(mood);        // Output: "excited"
```

- `let` allows you to declare a variable once and update its value
- `let` is **block-scoped** (limited to `{}`)

---

## 🔒 Creating Constants with `const`

```javascript
const pi = 3.14;
pi = 3.15; // ❌ Error: Assignment to constant variable
```

- `const` must be initialized immediately
- Cannot be reassigned
- Still allows modification of **arrays and objects** internally

```javascript
const user = { name: "Aya" };
user.name = "Leia"; // ✅ Allowed
```

---

## 🔄 Variables vs Constants

| Feature         | `let` / `var`       | `const`                  |
|-----------------|---------------------|---------------------------|
| Reassignable    | ✅ Yes              | ❌ No                     |
| Block-scoped    | ✅ (for `let`)      | ✅                        |
| Used when       | Value may change    | Value should stay fixed  |

---

## ✍️ Variable Naming Best Practices

| Name         | Style to Use  | Good Example           | Bad Example                         | Why It’s Used                                                                       |
|--------------|---------------|------------------------|--------------------------------------|--------------------------------------------------------------------------------------|
| **Variables**| `camelCase`   | `userName`, `isActive` | `Username`, `user_name`              | Standard style for variables/functions                                              |
| **Classes**  | `PascalCase`  | `User`, `ProductList`  | `user`, `productlist`                | Shows it's a class or constructor                                                   |
| **Files**    | `kebab-case`  | `user-profile.js`      | `UserProfile.js`, `user_profile.js`  | Lowercase and hyphenated — works across systems                                     |

### Extra Tips:
- ✅ Use plural names for arrays (`items`, not `item`)
- ❌ Don’t start names with numbers (`let 2name` → error)
- ❌ Avoid reserved words (`let let = "hi"` → error)

---

## 📦 Data Types in JavaScript

| Type         | Example                      | What It Represents                                     |
|--------------|------------------------------|--------------------------------------------------------|
| **String**   | `"Hello"`                    | Text (inside quotes)                                   |
| **Number**   | `42`, `3.14`                 | Numbers — integer or float                             |
| **Boolean**  | `true`, `false`              | Logical yes/no                                         |
| **Array**    | `["red", "blue"]`            | A list of values                                       |
| **Object**   | `{ name: "Sara", age: 25 }`  | Key-value pair groupings                              |
| **Undefined**| `let x;`                     | Declared, but not yet assigned                         |
| **Null**     | `let x = null;`              | Empty or cleared value                                 |
| **BigInt**   | `12345678901234567890n`      | Very large integer                                     |
| **Symbol**   | `Symbol("id")`               | Unique identifier                                      |
| **Function** | `function greet() {}`        | Reusable block of code (also a value in JS)           |

---

## 🔁 Type Conversion

### String to Number:
```javascript
let age = "25";
let num = Number(age);  // or parseInt(age)
```

### Number to String:
```javascript
let score = 100;
let scoreStr = String(score); // or score.toString()
```

---
