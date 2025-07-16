// Your tests here
const { isPalindrome } = require('../utils');

describe("isPalindrome", () => {
  it("returns true for a known palindrome", () => {
    expect(isPalindrome("racecar")).toBe(true);
  });

  it("returns false for a non-palindrome", () => {
    expect(isPalindrome("car")).toBe(false);
  });

  it("is case-insensitive", () => {
    expect(isPalindrome("RaceCar")).toBe(true);
  });

  it("returns false for an empty string", () => {
    expect(isPalindrome("")).toBe(false);
  });

  it("throws an error for non-alphabetic characters", () => {
    expect(() => isPalindrome("racecar!")).toThrow("Input must contain only alphabetic characters");
  });

  it("throws an error for non-string input", () => {
    expect(() => isPalindrome(12321)).toThrow("Input must be a string");
  });
});
