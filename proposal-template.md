# ECMAScript proposal: Unstrict mode
- [ECMAScript proposal: Unstrict mode](#ecmascript-proposal-unstrict-mode)
  - [Motivation](#motivation)
  - [High-level API](#high-level-api)
    - [FAQ](#faq)
      - [Why undefined function returns undefined?](#why-undefined-function-returns-undefined)
    - [Can i read property of undefined property of undefined?](#can-i-read-property-of-undefined-property-of-undefined)

## Motivation

Mode, that fix two main javascript problems:
* Cannot read property 'foo' of undefined
* undefined is not a function

In unstrict mode undefined has any property and it's undefined.
In unstrict mode undefined is function and ti returns undefined.

## High-level API

```js
'use unstrict';

let a;

console.log(a.foo); // undefined
console.log(a()); // undefined
```

### FAQ
#### Why undefined function returns undefined?

Because it's not defined.

### Can i read property of undefined property of undefined?

Yes! Very!

```js
console.log(undefined.foo.bar.baz); // undefined
```
