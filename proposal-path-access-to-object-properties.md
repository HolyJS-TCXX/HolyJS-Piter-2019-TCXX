# ECMAScript proposal: Path traversal access to object parent properties.
- [ECMAScript proposal: Path traversal access to object parent properties.](#ecmascript-proposal-path-traversal-access-to-object-parent-properties)
  - [Motivation](#motivation)
  - [High-level API](#high-level-api)

## Motivation

Syntactic sugar to simplify work with deeply nested objects.

```js
console.log(obj['../siblingProp']);
console.log(obj['./../siblingProp']); // sibling property
console.log(obj['./'] === obj); // true
console.log(obj['./../../nestedSibling']); // deeply nested
```

## High-level API

```js
const largeContext = {
  // ...
  propA: 'test',
  // ...
  catB: {
    type: 'cat',
    name: 'Toby',
  },
  // ...
}

function processCat(cat) {
  // access to parent scope of object
  if (cat['../propA'] === 'test') {
    console.log(cat);
  }

  cat.meow();
}

processCat(largeContext.catB);
```