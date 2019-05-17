# ECMAScript proposal: Add method "unset" to Object.prototype

- [Motivation](#motivation)
- [High-level API](#high-level-api)
- [FAQ](#faq)

## Motivation

JavaScript Object needs method "unset" for immutable removing property from object

```js
Object.prototype.unset = function(property) {};
```

## High-level API

```js
var foo = {
  a: 1,
  b: 2
};

var bar = foo.unset("a");

console.log(foo); // { a: 1, b: 2 }
console.log(bar); // { b: 2 }
```

```js
var foo = {
  a: 1,
  b: {
    c: 2,
    d: 3
  }
};

var bar = foo.unset("b.d");

console.log(foo); // { a: 1, b: { c: 2 } }
console.log(bar); // { b: 2, b: { c: 2, d: 3 } }
```
