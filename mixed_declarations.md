# ECMAScript proposal: Mixed declarations
- [Motivation](#motivation)
- [High-level API](#high-level-api)

 ## Motivation
Javascript declarations are boring. There is no any fun or game there. Let's do mixed declarations, so it'll be able to combine `let` and `const`

 ## High-level API

 ```js
const let foo = "any value" // now there is a 50% chance that foo can be reassigned
const let let bar = "another one" // now there is a 66.6% chance that bar can be reassigned
const const const let baz = "the last one" // only 25%
```
