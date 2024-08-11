// import { jest } from "@jest/globals";
const sayHello = require("./sayHello.js");

test("should be return the 'Hello, Thalya.' greating", () => {
  const name = "Thalya";
  const greating = sayHello(name);
  const expectedGreating = "Hello, Thalya.";

  expect(greating).toBe(expectedGreating);
});
