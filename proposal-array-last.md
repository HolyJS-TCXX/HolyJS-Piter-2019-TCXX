# ECMAScript proposal: Add last property to array and typed-array instances
- [Motivation](#motivation)
- [High-level API](#high-level-api)

## Motivation

Accessing **last** property of Array and TypedArray instances returns last elements value. Shortcut for `arr[arr.length-1]`.

```js
Object.defineProperty(Array.prototype, 'last', {
  get() {
    return this[this.length-1];
  },
});
```

## High-level API

```js
const arr = [1, 2, 3, 4];
console.log(arr.last); // 4

const empty = [];
console.log(empty.last); // undefined
```
