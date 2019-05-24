# ECMAScript proposal: Operator Declaration
- [Motivation](#motivation)
- [High-level API](#high-level-api)
- [FAQ](#faq)

## Motivation

Sometimes operator usage are more declaraive way than function calls:

```js
const sumOfAges = [{ count: 1 }, { count: 2 }, { count: 3 }, { count: 4 }].reduce((a, b) => a.count + b.count);
```

I propose to make operator declaration and make operators as a first-class object inside language

## High-level API

```js
const (+) = (a, b) => {
  if ('count' in a && 'count' in b) {
    return a.count + b.count;
  }
  return super(a, b);
}

const sumOfAges = [{ count: 1 }, { count: 2 }, { count: 3 }, { count: 4 }].reduce(+);
```

### FAQ
#### Question

Answer
