import * as app from "./App";

it('manually encoded string equals to the expected byte array', () => {
  expect(app.getEncodedFoo()).toEqual(new Uint8Array([102, 111, 111]));
});

it('string encoded with TextEncoder equals to the expected byte array', () => {
  expect(app.encodeFoo()).toEqual(new Uint8Array([102, 111, 111]));
});
