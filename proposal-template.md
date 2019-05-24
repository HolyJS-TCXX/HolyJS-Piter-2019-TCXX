# ECMAScript proposal: Readonly Arays and Objects
- [Motivation](#motivation)
- [High-level API](#high-level-api)
- [FAQ](#faq)

## Motivation

Sometimes to prevent object and array changes we should to use `Object.freeze`, but the method very slow, so i propose readonly structure which will be constant by default

## High-level API

```js
const USER_STATUSES = new ReadOnly([
 "banned",
 "active",
 "deleted"
]);

USER_STATUS[0] = "something" // Throw type error
```

### FAQ
#### Question

Answer
