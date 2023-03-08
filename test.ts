import { assertEquals } from "https://deno.land/std@0.178.0/testing/asserts.ts";
import {
  validateBetween,
  validateEven,
  validateLessThan,
  validateOdd,
} from "./validators.ts";

Deno.test("returns true if the number is odd", () => {
  assertEquals(validateOdd(3), true);
});

Deno.test("returns false if the number is even", () => {
  assertEquals(validateOdd(4), false);
});

Deno.test("validateEven returns true if the number is even", () => {
  assertEquals(validateEven(66), true);
});

Deno.test("validateEvent returns false if the number is odd", () => {
  assertEquals(validateEven(9), false);
});

Deno.test("validateLessThan returns true if n < operand", () => {
  assertEquals(validateLessThan(2)(3), true);
});

Deno.test("validateLessThan returns false if n > operand", () => {
  assertEquals(validateLessThan(3)(2), false);
});

Deno.test("validateLessThan returns false if n == operand", () => {
  assertEquals(validateLessThan(2)(2), false);
});

Deno.test("validateBetween returns true if the number is between x and y", () => {
  assertEquals(validateBetween(1)(0)(3), true);
});

Deno.test("validateBetween returns false if the number is less than x", () => {
  assertEquals(validateBetween(0)(1)(3), false);
});

Deno.test("validateBetween returns false if the number is greater y", () => {
  assertEquals(validateBetween(4)(1)(3), false);
});

Deno.test("validateBetween returns true regardless of the order of the values", () => {
  assertEquals(validateBetween(4)(6)(3), true);
});

Deno.test("validateBetween returns false if all values are the same", () => {
  assertEquals(validateBetween(4)(4)(4), false);
});
