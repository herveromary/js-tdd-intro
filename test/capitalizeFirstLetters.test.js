// capitalizeFirstLetters.js
const assert = require("assert");
const capitalizeFirstLetters = require("../capitalizeFirstLetters");

// give the test suite a label using describe
describe("capitalizeFirstLetters", () => {
  // give the test a label using it
  it("is a function accepting one argument", () => {
    assert.strictEqual(typeof capitalizeFirstLetters, "function");
    assert.strictEqual(capitalizeFirstLetters.length, 1);
  });

  it("transforms hello world correctly", () => {
    assert.strictEqual(capitalizeFirstLetters("hello world"), "Hello World");
  });

  it("works with a 1-character string", () => {
    assert.strictEqual(capitalizeFirstLetters("z"), "Z");
  });

  it("works with an empty string", () => {
    assert.strictEqual(capitalizeFirstLetters(""), "");
  });
});
