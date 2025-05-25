const reverseString = require("../reverseString");

test("Reverses String (1 character)", () => {
  expect(reverseString("s")).toBe("s");
});

test("Reverses String (multiple character)", () => {
  expect(reverseString("sgh")).toBe("hgs");
});