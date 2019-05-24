# ECMAScript proposal: Tuples
- [Motivation](#motivation)
- [High-level API](#high-level-api)
- [FAQ](#faq)

## Motivation

We have a lot of cases when we return array with fixed length and use destruction after, but it's slowly way to get values from arrays and there are several optimizations inside V8 engine for this case.

I propose tuple data structure which doesn't need those optimizations and more performed than array

## High-level API

```js
const @(state, setState) = useState(null);
```

```js
const validateUser = info => {
  if (info === null) {
    return @(new Error("Bad"), null)
  }
  return @(null, "cool");
}
```

### FAQ
#### Question

Answer
