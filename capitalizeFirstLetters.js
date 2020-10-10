// capitalizeFirstLetters.js
const assert = require("assert");

// WRITE THE ACTUAL FUNCTION HERE

// Check that capitalizeFirstLetters is a function
assert.strictEqual(typeof capitalizeFirst, "function");
// Check that capitalizeFirstLetters accepts one argument
assert.strictEqual(capitalizeFirst.length, 1);
// Check that capitalizeFirstLetters transforms javaScript correctly
assert.strictEqual(capitalizeFirst("hello world"), "Hello World");
// Check that it works for a 1-character string
assert.strictEqual(capitalizeFirst("z"), "Z");
// Check that it works for an empty string
assert.strictEqual(capitalizeFirst(""), "");

function capitalize(input) {
  const words = input.split(" ");
  const CapitalizedWords = [];
  words.forEach((element) => {
    CapitalizedWords.push(
      element[0].toUpperCase() + element.slice(1, element.length)
    );
  });
  return CapitalizedWords.join(" ");
}

capitalize("hello world");
