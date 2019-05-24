# ECMAScript proposal: Symbol Literal
- [Motivation](#motivation)
- [High-level API](#high-level-api)
- [FAQ](#faq)

## Motivation

All simple types have literal to simple vaalue declaration, but `Symbol` has not. To make predictible, consistent type system and restore justice inside JavaScript i propose implement symbol literal

## High-level API

#### Old variant
```js
const PROPERTY = Symbol.for("__property__");

const obj = { [PROPERTY]:  42 }
```

#### New variant
```js
const obj = { :property :  42 }
```
```js
const PROPERTY = :property;
```

### FAQ
#### Question

Answer
