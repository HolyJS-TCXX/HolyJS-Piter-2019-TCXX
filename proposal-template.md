# ECMAScript proposal: Unoptimized Strings
- [Motivation](#motivation)
- [High-level API](#high-level-api)
- [FAQ](#faq)

## Motivation

https://habr.com/ru/post/449368/

Because V8 store `slice` target string we could get a memory leak with a lot of string storing.
To prevent it we should use hacks like to prevent storing string inside V8:

```js
const str = oldStr.split("").join("");
```

I propose to create constructor which will prevent any storing of string in V8
## High-level API

```js
const str = String.unoptimizedFrom("test")
```

### FAQ
#### Question

Answer
