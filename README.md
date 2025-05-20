# My Code Diary

## 1. SSH Key for work

Here's a detailed guide to generating an RSA SSH key named `ayawgc`, adding it to the SSH agent, and configuring it for use with Azure. This guide is tailored for Windows users utilizing Git Bash.

### 1.1 Create a directory to save your generated SSH keys

In my case my path file is: `C:\Users\AyaEl-Houssami\.ssh` (my folder name is .ssh)

### 1.2 Open Git Bash

Click on the Start menu, search for "Git Bash," and open it.

### 1.3 Create the SSH Key

In the Git Bash terminal, enter the following command.

`ssh-keygen -t rsa -b 4096 -f ~/.ssh/ayawgc`

`-t rsa` Specifies the type of key to create, in this case, RSA.

`-b 4096` Sets the number of bits in the key to 4096 for enhanced security.

`-f ~/.ssh/ayawgc` Specifies the filename for the key; this will create `ayawgc` and `ayawgc.pub` in the `.ssh` directory.​

`~` This is the tilde key. In Unix and Linux systems this will always point to the home directory, e.g. `/home/{USERNAME}/`.

Set a passphrase (optional): When asked, you can enter a passphrase for added security or press `Enter` to leave it empty.

This process will generate two SSH Key files.

`~/.ssh/ayawgc` Your private key. This key file resides on your device only. Never share or upload this private key anywhere. It is a **PRIVATE** key, so keep it **PRIVATE**!!!

`~/.ssh/ayawgc.pub` Your public key. This key file is public. You can share and upload this public key to any platform where you want to be authenticated.

<img src="/images/001_resultkeys.png"/>

### 1.4 Start the SSH Agent and Add Key

To manage your SSH keys, start the SSH agent and add your private key.

In Git Bash, run:

```bash
eval "$(ssh-agent -s)"
```

This command starts the SSH agent in the background.

### 1.5 Add the private key to the SSH agent

In Git Bash, run:

```bash
ssh-add ~/.ssh/ayawgc
```

### 1.6 Add public key in Azure Devops

- Go to the user settings, in my case <a href="https://dev.azure.com/WebGateConsultingAG/_usersSettings/keys"> User Settings Azure Devops </a>
- Click on `Add`
  <img src="/images/003_azureaddedkey.png">
- Now you can see two fields. One is for description and one is for key data. The `Description` is your keyname and the `Key Data` is your public SSH key.
  <img src="/images/002_azuredescribekey.png">

In order to get your public key, go to your `.ssh` directory where you've saved your SSH keys, then list your keys using `ls`, then `cat` to display the contents of the public key.

<img src="/images/004_terminallistkeys.png">

## 2. SSH Key for Github

### 2.1 Create the SSH key for GitHub

Repeat the same steps as for **SSH Key for work**, the only difference is to type a different name for the key. Everything else is EXACTLY the same!

### 2.2 Connect the public key to GitHub

- Go to the user settings, in this case <a href="https://github.com/settings/keys"> User Settings GitHub </a>
- Click on `New SSH key`
  <img src="/images/006_addkeygithub.png">
- Now you can see three fields. One is for title, one is for key type, and one is for the key. The `Title` is your keyname, keep your `Key type` as Authentication Key, and `Key` is your public SSH key.
  <img src="/images/007_githubaddedkey.png">

In order to get your public key, go to your `.ssh` directory where you've saved your SSH keys, then list your keys using `ls`, then `cat` to display the contents of the public key, just like in the example before.

## 3. Create a `.bashrc` file

`.bashrc` is a special configuration file that runs every time you open a new terminal (in my case Git Bash). You can put aliases, custom functions, or environment variables in it to make your work faster and easier.

### 3.1 Create a .bashrc file

- Open Git Bash
- Type in the command `touch ~/.bashrc`
- `touch`creates a new empty file named `.bashrc` in your home directory.
- The `~` means your user folder, and `.bashrc` is the file name.

### 3.2 Edit the `.bashrc` file to add aliases

- Type in the command `notepad ~/.bashrc`
- If Notepad asks to create the file, click "Yes".
- In the file, you can add lines like
  <img src="/images/008_aliascommands.png">
- `alias` is a command used to create shortcuts.
- In this example, `alias gs='git status'` means every time you type `gs`, Git Bash will run `git status`
- After adding your aliases, save the file and close Notepad.
- As an alternative, when working on the `.bashrc` file and when you don't want to reopen a terminal, you can source the `.bashrc` file to the currently opened terminal. However here you need to take care to write a function instead of an alias, because the alias has a different execution context than the function.

Why a `.bashrc` function works to source new changes to the .bashrc file but an alias does not?

#### **Aliases vs. Functions in Bash**

##### **Aliases**

- **Aliases** are expanded and executed in a **subshell** (a child process).
- When you run an alias that sources `.bashrc`, the changes only affect the subshell.
- When the subshell exits, those changes are lost.

##### **Functions**

- **Functions** are executed in the **current shell**.
- When you run a function that sources `.bashrc`, the changes take effect in your current shell immediately.
- These changes persist in your current shell.

##### **Summary**

- **Alias** → runs in a subshell → changes lost when subshell exits.
- **Function** → runs in current shell → changes persist.

## 4. Linux Commands

### 4.1 ls

The `ls` command is used to list the contents of a directory. By default, it displays the files and folders in the current directory in alphabetical order. With options like `-l`, you can get detailed information such as permissions, owner, and file size. It is a fundamental command to get an overview of the files in a directory.

<a href="https://www.geeksforgeeks.org/ls-command-in-linux/">ls command documentation</a>

### 4.2 cat

The `cat` command is used to display the contents of files in the terminal. It can also concatenate multiple files and display them together. With `cat > file.txt`, you can create a new file and write text directly into it. It is a multiple usage tool for working with text files.

<a href="https://www.geeksforgeeks.org/cat-command-in-linux-with-examples/">cat command documentation</a>

### 4.3 touch

The `touch` command can be used to create new, empty files or to update the timestamps of existing files. If the specified file does not exist, it will be created. It is useful for quickly creating files or modifying their access and modification times. ​

<a href="https://www.geeksforgeeks.org/touch-command-in-linux-with-examples/">touch command documentation</a>

### 4.4 dir

The `dir` command lists the contents of a directory, similar to ls. By default, the output is displayed in column format. With options like -a, hidden files can also be shown. It is especially useful if you prefer a different view of the directory contents.

<a href="https://www.geeksforgeeks.org/dir-command-in-linux-with-examples/">dir command documentation</a>

### 4.5 pwd

The `pwd` command stands for "print working directory" and displays the full path of the current working directory. It is helpful for knowing which directory you are currently in. With `pwd -P`, you get the physical path without symbolic links. It is a fundamental command for navigating the file system.

<a href="https://www.geeksforgeeks.org/pwd-command-in-linux-with-examples/">pwd command documentation</a>

# 5. JavaScript Fundamentals

## 5.1 Variables — JavaScript Fundamentals



### 📌 Learning Outcomes

- Understand what variables are and why they are important
- Learn how to declare and initialize variables
- Know how to reassign values to variables
- Understand `const` and how constants work
- Recognize the difference between variables and constants
- Follow variable naming best practices
- Learn the types of values that can be stored in variables

---

### ✅ What Are Variables?

A variable is a named container that holds a value. It lets you store data and use or change it later.

```javascript
let name = "Sara";
console.log(name); // Output: "Sara"
```

Variables are used in **all programming languages**, not just JavaScript.

---

### 🛠 Declaring Variables with `let`

```javascript
let mood = "happy";       // Declare and initialize
mood = "excited";         // Reassign the value
console.log(mood);        // Output: "excited"
```

- `let` allows you to declare a variable once and update its value
- `let` is **block-scoped** (limited to `{}`)

---

### 🔒 Creating Constants with `const`

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

### 🔄 Variables vs Constants

| Feature         | `let` / `var`       | `const`                  |
|-----------------|---------------------|---------------------------|
| Reassignable    | ✅ Yes              | ❌ No                     |
| Block-scoped    | ✅ (for `let`)      | ✅                        |
| Used when       | Value may change    | Value should stay fixed  |

---

### ✍️ Variable Naming Best Practices

| Name         | Style to Use  | Good Example           | Bad Example                         | Why It’s Used                                                                       |
|--------------|---------------|------------------------|--------------------------------------|--------------------------------------------------------------------------------------|
| **Variables**| `camelCase`   | `userName`, `isActive` | `Username`, `user_name`              | Standard style for variables/functions                                              |
| **Classes**  | `PascalCase`  | `User`, `ProductList`  | `user`, `productlist`                | Shows it's a class or constructor                                                   |
| **Files**    | `kebab-case`  | `user-profile.js`      | `UserProfile.js`, `user_profile.js`  | Lowercase and hyphenated — works across systems                                     |

#### Extra Tips:
- ✅ Use plural names for arrays (`items`, not `item`)
- ❌ Don’t start names with numbers (`let 2name` → error)
- ❌ Avoid reserved words (`let let = "hi"` → error)

---

### 📦 Data Types in JavaScript

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

### 🔁 Type Conversion

#### String to Number:
```javascript
let age = "25";
let num = Number(age);  // or parseInt(age)
```

#### Number to String:
```javascript
let score = 100;
let scoreStr = String(score); // or score.toString()
```

---


## 5.2 Math — JavaScript Fundamentals



### 📌 Learning Outcomes

- Perform basic math operations
- Understand type issues between numbers and strings
- Convert strings to numbers and vice versa
- Understand operator precedence
- Use increment and decrement shortcuts
- Use assignment operators
- Use comparison operators
- Work with Math object methods

---

### ➕ Basic Number Operations

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

### 🔁 Numbers vs Strings

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

### ⚖️ Operator Precedence

JavaScript follows math order:

1. Parentheses
2. Multiply/Divide
3. Add/Subtract

```javascript
let result = 2 + 3 * 4; // 14
let result2 = (2 + 3) * 4; // 20
```

---

### 🔼 Incrementing and 🔽 Decrementing

```javascript
let x = 5;
x++; // 6
x--; // 5
```

#### Prefix vs Postfix

```javascript
let a = 5;
console.log(a++); // 5 (then becomes 6)
console.log(++a); // 7 (increased first)
```

---

### 🧮 Assignment Operators

| Operator | Example  | Same As     |
| -------- | -------- | ----------- |
| `+=`     | `x += 2` | `x = x + 2` |
| `-=`     | `x -= 2` | `x = x - 2` |
| `*=`     | `x *= 3` | `x = x * 3` |
| `/=`     | `x /= 2` | `x = x / 2` |

---

### 🔍 Comparison Operators

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

### 🧠 Math Object Methods

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

### 🔤 Why Is `Math` Capitalized?

- `Math` is a built-in global **object**
- Capitalized like other core objects: `Date`, `Array`, `Object`
- Even though most user-made objects use lowercase, built-in ones often use uppercase

---


## 5.3 Text — JavaScript Fundamentals



### 📌 Learning Outcomes

- Create string literals
- Match quotes correctly
- Combine (concatenate) strings
- Escape characters inside strings
- Use template literals (including variables and multi-line text)
- Manipulate strings with common methods and properties

---

### ✍️ Creating String Literals

A string literal is text written in quotes:

```javascript
let name = "Sara";
let city = 'Berlin';
```

You can use **single** or **double** quotes — just be consistent.

---

### ❗ Matching Quotes

Quotes must match — if you open with `"`, you must close with `"`.  
Mixing them causes an error.

```javascript
let message = "Hello";     // ✅ valid
let error = "Hello';       // ❌ invalid
```

---

### 🔗 String Concatenation

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

### 🔐 Escaping Characters in Strings

Use backslashes to include quotes or special characters:

| What You Write              | What It Means              |
|-----------------------------|----------------------------|
| `"She said, \"Hi!\""`     | `She said, "Hi!"`          |
| `'It\'s fine'`             | `It's fine`                |
| `"C:\\Users\\Sara"`     | `C:\Users\Sara`          |
| `"Line1\nLine2"`           | New line between lines     |
| `"Word1\tWord2"`           | Adds a tab between words   |

---

### 🧩 Template Literals (Backticks `` ` ``)

#### ✅ With Variables

```javascript
let name = "Sara";
let greeting = `Hello, ${name}!`;
```

#### ✅ Multi-line Text

```javascript
let message = `Dear user,

Thanks for joining us.

Best,
Team`;
```

---

### 🛠 String Methods and Properties

#### 1️⃣ `.length`
```javascript
let word = "Hello";
console.log(word.length); // 5
```

#### 2️⃣ `.toString()`
```javascript
let number = 100;
console.log(number.toString()); // "100"
```

#### 3️⃣ `.includes()`
```javascript
let text = "JavaScript";
console.log(text.includes("Script")); // true
```

#### 4️⃣ `.indexOf()`
```javascript
let phrase = "Hello, world!";
console.log(phrase.indexOf("world")); // 7
```

#### 5️⃣ `.slice()`
```javascript
let phrase = "JavaScript is fun";
console.log(phrase.slice(0, 10)); // "JavaScript"
```

#### 6️⃣ `.toLowerCase()` and `.toUpperCase()`
```javascript
let word = "HeLLo";
console.log(word.toLowerCase()); // "hello"
console.log(word.toUpperCase()); // "HELLO"
```

#### 7️⃣ `.replace()`
```javascript
let text = "Hi there!";
console.log(text.replace("Hi", "Hello")); // "Hello there!"
```

---

This covers the core string tools you’ll use often in JavaScript. Practice combining, transforming, and checking strings to get comfortable!


## 5.4 Arrays — JavaScript Fundamentals



### 📌 Learning Outcomes

- Understand what arrays are and how to use them
- Access, modify, and manipulate arrays
- Use common and advanced array methods

---

### 📦 What is an Array?

An **array** is a data structure that stores a **list of values** in a single variable.

```javascript
let fruits = ["apple", "banana", "cherry"];
```

- Each item is called an **element**
- Each element has a position called an **index**, starting from 0

---

### 🎯 Accessing and Modifying Items

#### Access with `myArray[index]`

```javascript
console.log(fruits[0]); // ✅ "apple"
console.log(fruits[1]); // ✅ "banana"
```

#### Modify with `myArray[index] = newValue`

```javascript
fruits[1] = "orange";
console.log(fruits); // ✅ ["apple", "orange", "cherry"]
```

---

### 🛠 Common Array Methods

#### 1. `.length`

```javascript
let colors = ["red", "blue", "green"];
console.log(colors.length); // ✅ 3
```

#### 2. `.indexOf()`

```javascript
console.log(fruits.indexOf("cherry")); // ✅ 2
console.log(fruits.indexOf("pear"));   // ❌ -1
```

#### 3. `.push()` — Add to end

```javascript
fruits.push("grape");
```

#### 4. `.pop()` — Remove from end

```javascript
fruits.pop();
```

#### 5. `.shift()` — Remove from start

```javascript
fruits.shift();
```

#### 6. `.unshift()` — Add to start

```javascript
fruits.unshift("kiwi");
```

#### 7. `.join()` — Combine into string

```javascript
let sentence = fruits.join(", ");
console.log(sentence); // ✅ "apple, orange, cherry"
```

#### 8. `.split()` — Turn string into array

```javascript
let letters = "a,b,c".split(",");
```

---

### 🚀 Advanced Array Methods

#### 1. `.forEach()` — Do something with each item

```javascript
fruits.forEach(function(fruit) {
  console.log(fruit);
});
// ✅ apple, orange, cherry
```

#### 2. `.map()` — Create a new array with transformed values

```javascript
let numbers = [1, 2, 3];
let doubled = numbers.map(function(num) {
  return num * 2;
});
console.log(doubled); // ✅ [2, 4, 6]
```

#### 3. `.filter()` — Create a new array with selected items

```javascript
let ages = [15, 21, 30, 17];
let adults = ages.filter(function(age) {
  return age >= 18;
});
console.log(adults); // ✅ [21, 30]
```

---

### 🧠 Methods vs Functions

| Term     | What It Is                    | Example                      |
|----------|-------------------------------|------------------------------|
| Function | Reusable block of code        | `function greet() {}`        |
| Method   | Function attached to an object| `"hello".toUpperCase()`      |

---

### ✅ Summary

- Arrays hold multiple values and use index numbers
- You can access, update, and loop through items
- Use `.forEach()` to act, `.map()` to transform, and `.filter()` to select


## 5.5 Conditionals — JavaScript Fundamentals



### 📌 Learning Outcomes

- Understand what a conditional is
- Use `if`, `else if`, and `else` statements
- Use comparison operators
- Combine conditions with AND, OR, and NOT
- Use `switch` statements for multiple cases
- Write short decisions with ternary operators

---

### ✅ What is a Conditional?

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

### 🔁 if ... else ... else if

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

### 🔍 Comparison Operators

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

### 🔗 AND (`&&`), OR (`||`), NOT (`!`)

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

### 🔄 switch Statement

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

### ❓ Ternary Operator

```javascript
let age = 18;

let message = age >= 18 ? "You can vote." : "Too young.";
console.log(message); // "You can vote."
```

- Use for **simple if/else**
- Not good for complex logic

---

### ✅ Summary

- Use `if/else` for basic decisions
- Use `switch` when checking one value against many options
- Use `&&`, `||`, `!` to build smarter conditions
- Use ternary (`? :`) for short, simple checks


## 5.6 Loops — JavaScript Fundamentals



### 📌 Learning Outcomes

- Understand what loops are and why they are useful
- Use basic `for` loops to repeat code
- Loop through collections with `for...of`
- Control loops with `break` and `continue`

---

### 🔁 What Is a Loop?

A **loop** repeats code **many times** without writing it again and again.

#### Without a loop:

```javascript
console.log(1);
console.log(2);
console.log(3);
```

#### With a loop:

```javascript
for (let i = 1; i <= 3; i++) {
  console.log(i);
}
```

✅ Easier to manage and much cleaner!

---

### 🔢 Basic `for` Loops

#### Count from 1 to 5

```javascript
for (let i = 1; i <= 5; i++) {
  console.log(i);
}
```

#### Count backwards from 5 to 1

```javascript
for (let i = 5; i >= 1; i--) {
  console.log(i);
}
```

#### Print even numbers

```javascript
for (let i = 2; i <= 10; i += 2) {
  console.log(i);
}
```

---

### 📚 `for...of` — Looping Through Collections

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

### 🛑 `break` and `continue`

#### `break` — Stops the loop

```javascript
for (let i = 1; i <= 5; i++) {
  if (i === 3) break;
  console.log(i);
}
// ✅ Output: 1, 2
```

#### `continue` — Skips one loop round

```javascript
for (let i = 1; i <= 5; i++) {
  if (i === 3) continue;
  console.log(i);
}
// ✅ Output: 1, 2, 4, 5
```

---

### ✅ Summary

| Feature    | Use it for                                  |
| ---------- | ------------------------------------------- |
| `for` loop | Repeat code with full control (index, stop) |
| `for...of` | Loop through values in an array or string   |
| `break`    | Exit loop early                             |
| `continue` | Skip a loop step                            |

Loops help you save time and write less code when doing the same action many times.


## 5.7 Functions — JavaScript Fundamentals



### 📌 Learning Outcomes

- Understand what functions are and why we use them
- Know the difference between functions and methods
- Learn how to define, call, and return values from functions
- Understand scope, arguments, and function types
- Learn about callback and arrow functions

---

### 🧠 What Are Functions?

A function is a reusable block of code. You can run it (call it) whenever needed.

#### Built-in function example:

```javascript
console.log("Hello"); // Built-in browser function
```

#### User-defined function example:

```javascript
function greet() {
  console.log("Hi!");
}
greet(); // Call the function
```

---

### 🔄 Functions vs Methods

| Type     | Description                    | Example                 |
| -------- | ------------------------------ | ----------------------- |
| Function | Reusable code block            | `function greet() {}`   |
| Method   | Function attached to an object | `"hello".toUpperCase()` |

---

### 🔔 Invoking a Function

```javascript
function sayHello() {
  console.log("Hello!");
}

sayHello(); // ✅ Calls the function
```

---

### 🔁 Return Values

```javascript
function add(a, b) {
  return a + b; // Sends result back
}

let result = add(4, 5); // result is 9
console.log(result);
```

---

### 🌍 Scope: Global vs Function vs Block

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

### 📨 Passing Arguments

```javascript
function greet(name) {
  console.log("Hello, " + name);
}

greet("Sara"); // ✅ Sara is the argument
```

---

### 🏷 Named vs Anonymous Functions

| Type      | Has a name? | Example                     |
| --------- | ----------- | --------------------------- |
| Named     | ✅ Yes      | `function greet() {}`       |
| Anonymous | ❌ No       | `let greet = function() {}` |

---

### 🛠 Custom Functions with Parameters and Return

```javascript
function multiply(x, y) {
  return x * y;
}

let product = multiply(3, 4); // ✅ product = 12
```

---

### 🔁 Callback Functions (Simple)

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

### ➡️ Arrow Functions

#### Basic form:

```javascript
let greet = (name) => {
  console.log("Hi, " + name);
};
```

#### Short one-liner:

```javascript
let add = (a, b) => a + b;
console.log(add(2, 3)); // ✅ 5
```

---

### ✅ Summary

| Concept        | What It Does                         |
| -------------- | ------------------------------------ |
| `function()`   | Creates a regular function           |
| `return`       | Sends a result out of a function     |
| `callback()`   | Function passed to another function  |
| Arrow function | Shorter syntax using `=>`            |
| Scope          | Controls where variables can be used |


## 5.8 JavaScript Object Basics



### 📌 Learning Outcomes

- Understand that most things in JavaScript are objects
- Create and use object literals
- Work with properties and methods
- Nest arrays and objects inside objects
- Use constructor functions to build objects
- Understand `this` and object scope
- Access properties and methods with dot and bracket syntax
- Use object destructuring

---

### 🧠 Most Things Are Objects

In JavaScript, many things are objects:

- `console`, `Math`, `document`, etc.
- You’ve already used objects many times.

Example:

```javascript
console.log("Hello"); // 'console' is an object
```

---

### 🔤 Object Literals

Create an object using curly braces `{}`:

```javascript
let user = {
  name: "Sara",
  age: 25,
  isStudent: true,
};
```

---

### 🧱 Properties and Methods

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

### 🧳 Nesting Objects and Arrays

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

### 🏗 Constructor Functions

Used to create many similar objects.

```javascript
function Animal() {
  this.type = "cat";
}

let pet = new Animal(); // { type: "cat" }
console.log(pet.type); // "cat"
```

---

### 🔁 Object Scope and `this`

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

### 🔓 Dot vs Bracket Syntax

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

### 🧩 Object Destructuring

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

### ✅ Summary Table

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


# 5. JavaScript Fundamentals
