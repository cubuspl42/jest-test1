import * as app from "./App";
import * as chai from "chai";
import * as dd from "deep-diff";
import deepEqual from "deep-equal";

function getEncodedFoo() {
  return new Uint8Array([102, 111, 111]);
}

function encodeFoo() {
  return new TextEncoder().encode("foo");
}

it('manually encoded string equals to the expected byte array', () => {
  expect(getEncodedFoo()).toEqual(new Uint8Array([102, 111, 111])); // succeedes
});

it('string encoded with TextEncoder equals to the expected byte array', () => {
  const actual = encodeFoo();
  const expected = new Uint8Array([102, 111, 111]);

  chai.expect(actual).to.deep.equal(expected); // succeeds

  expect(deepEqual(actual, expected)).toBe(true); // succeeds

  expect(dd.diff(actual, expected)).toBe(undefined); // succeeds

  expect(encodeFoo()).toEqual(expected); // fails
});
