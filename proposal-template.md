# ECMAScript proposal: Compose Operator
- [Motivation](#motivation)
- [High-level API](#high-level-api)
- [FAQ](#faq)

## Motivation

Because JavaScript moving to Functional Programming paradigm (pipe operator, pattern matching, lambdas) we need have a simple way to compose to function. A lot of libraries and projects contain self-declarated `compose` function, so, it realy need to move this functionality in language core

## High-level API

#### Declarative style
```js
const spamMessages = message.map(hasLinkInside + isRedirectedFromChat); 
```

#### React Example

##### Old
```js
const withPrefetch = compose(
   withLoading,
   withFetch,
);
```

##### New
```js
const withPrefetch = withFetch + withLoading
```

### FAQ
#### Question

Answer
