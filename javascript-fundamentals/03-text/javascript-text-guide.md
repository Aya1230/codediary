# 6.3 Text — JavaScript Fundamentals

## 📌 Learning Outcomes

- Create string literals
- Match quotes correctly
- Combine (concatenate) strings
- Escape characters inside strings
- Use template literals (including variables and multi-line text)
- Manipulate strings with common methods and properties

---

## ✍️ Creating String Literals

A string literal is text written in quotes:

```javascript
let name = "Sara";
let city = 'Berlin';
```

You can use **single** or **double** quotes — just be consistent.

---

## ❗ Matching Quotes

Quotes must match — if you open with `"`, you must close with `"`.  
Mixing them causes an error.

```javascript
let message = "Hello";     // ✅ valid
let error = "Hello';       // ❌ invalid
```

---

## 🔗 String Concatenation

Join strings using `+`:

```javascript
let firstName = "Sara";
let lastName = "Smith";
let fullName = firstName + " " + lastName; // "Sara Smith"
```

JavaScript converts numbers to strings when needed:

```javascript
let score = 100;
let result = "Score: " + score; // "Score: 100"
```

---

## 🔐 Escaping Characters in Strings

Use backslashes to include quotes or special characters:

| What You Write              | What It Means              |
|-----------------------------|----------------------------|
| `"She said, \"Hi!\""`     | `She said, "Hi!"`          |
| `'It\'s fine'`             | `It's fine`                |
| `"C:\\Users\\Sara"`     | `C:\Users\Sara`          |
| `"Line1\nLine2"`           | New line between lines     |
| `"Word1\tWord2"`           | Adds a tab between words   |

---

## 🧩 Template Literals (Backticks `` ` ``)

### ✅ With Variables

```javascript
let name = "Sara";
let greeting = `Hello, ${name}!`;
```

### ✅ Multi-line Text

```javascript
let message = `Dear user,

Thanks for joining us.

Best,
Team`;
```

---

## 🛠 String Methods and Properties

### 1️⃣ `.length`
```javascript
let word = "Hello";
console.log(word.length); // 5
```

### 2️⃣ `.toString()`
```javascript
let number = 100;
console.log(number.toString()); // "100"
```

### 3️⃣ `.includes()`
```javascript
let text = "JavaScript";
console.log(text.includes("Script")); // true
```

### 4️⃣ `.indexOf()`
```javascript
let phrase = "Hello, world!";
console.log(phrase.indexOf("world")); // 7
```

### 5️⃣ `.slice()`
```javascript
let phrase = "JavaScript is fun";
console.log(phrase.slice(0, 10)); // "JavaScript"
```

### 6️⃣ `.toLowerCase()` and `.toUpperCase()`
```javascript
let word = "HeLLo";
console.log(word.toLowerCase()); // "hello"
console.log(word.toUpperCase()); // "HELLO"
```

### 7️⃣ `.replace()`
```javascript
let text = "Hi there!";
console.log(text.replace("Hi", "Hello")); // "Hello there!"
```

---

This covers the core string tools you’ll use often in JavaScript. Practice combining, transforming, and checking strings to get comfortable!
