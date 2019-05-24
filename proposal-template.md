# ECMAScript proposal: Sequence Generator
- [Motivation](#motivation)
- [High-level API](#high-level-api)
- [FAQ](#faq)

## Motivation

We need a simple way to create sequence in JavaSript. Current way is:

```js
Array.from({ length: 100 }).map((_, i) => i + 1)
```

Or

```js
function* sequence(length) {
  for(let i = 0; i < length; i++) {
    yield i;
  }
}
```

I propose syntax sugar for simple sequence creating

## High-level API

```js
const sequence = (1..100);
```

### FAQ
#### Question

Answer
