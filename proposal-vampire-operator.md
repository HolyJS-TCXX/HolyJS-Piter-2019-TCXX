# ECMAScript proposal: Vampire operator
- [Motivation](#motivation)
- [High-level API](#high-level-api)
- [FAQ](#faq)

## Motivation

The vampire operator (',..,') is extremely useful in imperative programming, as it allows to transfer properties from one object to another with mutation as a side effect.

## High-level API
### Objects
```js
const vampire = {};
const prey = {
  flag: true,
  count: 42,
  items: []
};

vampire ,.., prey;
console.log(vampire);
// {flag: true, count: 42, items: Array(0)}
console.log(prey);
// {}
```
### Arrays
```js
const vampire = [];
const prey = [42, 'x', NaN];

vampire ,.., prey;
console.log(vampire);
// (3) [42, "x", NaN]
console.log(prey);
// []
```
### FAQ
#### What are the restrictions on using the vampire operator?
Use with caution on HolyJs, especially near water.
#### Should I be wary of a silver bullet?
No Silver Bullet.
#### Is there a danger of using the vampire operator on the call stack?
No, but make sure it's a stack, not a stake.
