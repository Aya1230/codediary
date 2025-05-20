let ages = [15, 21, 30, 17];

// Use .filter() to keep only ages that are 18 or older
let adults = ages.filter(function (age) {
  return age >= 18; // Only keep if this is true
});

console.log(adults); // ✅ [21, 30]

// ✅ .filter() RETURNS a new array with only the matching items
