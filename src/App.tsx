export function getEncodedFoo() {
  return new Uint8Array([102, 111, 111]);
}

export function encodeFoo() {
  return new TextEncoder().encode("foo");
}