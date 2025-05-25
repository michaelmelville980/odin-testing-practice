const capitalize = require("../capitalize");

test("capitalizes 1st character in string input with 1 lower cased character", () => {
  expect(capitalize("s")).toBe("S");
});

test("capitalizes 1st character in string input with 1 upper cased character", () => {
  expect(capitalize("S")).toBe("S");
});

test("capitalizes 1st character in string input with multiple characters", () => {
  expect(capitalize("sjfklw")).toBe("Sjfklw");
});
