# ECMAScript proposal: toCapitalize() method for String.prototype
- [Motivation](#motivation)
- [High-level API](#high-level-api)

## Motivation

The toCapitalize() method returns the calling string value converted to capitalize.
Like toLowerCase()/toUpperCase() do but allows you to transform the first letter of each word into the string to upper case or the first letter of all string only (if the second optional parameter is presented).

```js
str.toCapitalize([firstLetterOnly])
```
## High-level API

```js
const a = 'the best string ever'.toCapitalize();
console.log(a);
// 'The Best String Ever'

const b = 'the best string ever'.toCapitalize(true);
console.log(b);
// 'The best string ever'

```
