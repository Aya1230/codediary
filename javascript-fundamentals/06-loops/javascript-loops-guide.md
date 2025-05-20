# 6.6 Loops — JavaScript Fundamentals

## 📌 Learning Outcomes

- Understand what loops are and why they are useful
- Use basic `for` loops to repeat code
- Loop through collections with `for...of`
- Control loops with `break` and `continue`

---

## 🔁 What Is a Loop?

A **loop** repeats code **many times** without writing it again and again.

### Without a loop:

```javascript
console.log(1);
console.log(2);
console.log(3);
```

### With a loop:

```javascript
for (let i = 1; i <= 3; i++) {
  console.log(i);
}
```

✅ Easier to manage and much cleaner!

---

## 🔢 Basic `for` Loops

### Count from 1 to 5

```javascript
for (let i = 1; i <= 5; i++) {
  console.log(i);
}
```

### Count backwards from 5 to 1

```javascript
for (let i = 5; i >= 1; i--) {
  console.log(i);
}
```

### Print even numbers

```javascript
for (let i = 2; i <= 10; i += 2) {
  console.log(i);
}
```

---

## 📚 `for...of` — Looping Through Collections

Use `for...of` to loop through **arrays**, **strings**, or **iterable values**.

```javascript
let fruits = ["apple", "banana", "cherry"];

for (let fruit of fruits) {
  console.log(fruit);
}
// ✅ apple
// ✅ banana
// ✅ cherry
```

❌ It does **not** work on plain objects (`{}`).

---

## 🛑 `break` and `continue`

### `break` — Stops the loop

```javascript
for (let i = 1; i <= 5; i++) {
  if (i === 3) break;
  console.log(i);
}
// ✅ Output: 1, 2
```

### `continue` — Skips one loop round

```javascript
for (let i = 1; i <= 5; i++) {
  if (i === 3) continue;
  console.log(i);
}
// ✅ Output: 1, 2, 4, 5
```

---

## ✅ Summary

| Feature    | Use it for                                  |
| ---------- | ------------------------------------------- |
| `for` loop | Repeat code with full control (index, stop) |
| `for...of` | Loop through values in an array or string   |
| `break`    | Exit loop early                             |
| `continue` | Skip a loop step                            |

Loops help you save time and write less code when doing the same action many times.
