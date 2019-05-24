# ECMAScript proposal: Ref Operator
- [Motivation](#motivation)
- [High-level API](#high-level-api)
- [FAQ](#faq)

## Motivation

There are many case to mutate variable outside function withou closure.
The most popular example is React Refs:

```js
function MyComponent(props) {
  const ref = React.useRef();
  if (ref.current !== null) {
    console.dir(ref.current)
  }
  return <input ref={ref} name="email" />
}

```

Instead use object with some property (this solution create a heap object and take a lot memory) we could use Ref Operator which return address in memory of some variable and give ability to change value inside variable.

```js
function MyComponent(props) {
  let ref = null;
  if (ref !== null) {
    console.dir(ref)
  }
  return <input ref={&ref} name="email" />
}
```

## High-level API

```js
let result = Buffer.alloc(128);

crypto.scrypt("password", "salt", { n: 128 }, &result);

assert(result !== null);
```
