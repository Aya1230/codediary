//Instead of
let userName = "Sara";
let userMessage = "Hello, " + userName + "!";

//We use
let personName = "Sara";
let message = `Hello, ${personName}!`; // ${name} lets you insert a variable directly inside the string
console.log(message); // ✅ "Hello, Sara!"
