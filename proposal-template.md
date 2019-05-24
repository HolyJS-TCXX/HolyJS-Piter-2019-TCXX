# ECMAScript proposal: Lazy Array Methods
- [Motivation](#motivation)
- [High-level API](#high-level-api)
- [FAQ](#faq)

## Motivation

When you use chain of default declarative array methods like `map`, `filter`, `reduce` and etc we will have acutaly multiple iterations around array.
I propose make tranduced API for default methods which actualy chain of methods will iterate only once.

## High-level API

```js
const users = [{ id: 0, name: "User", friends: [] }] // A lot of users
users
  .lazy
  .map(user => ({ id: user.id, user: user.name, friendCounts: friends.length }))
  .filter(user => user.friendCounts > 10)
  .map(user => user.id)
```

Will iterate once and implements wia reduce or iterator

### FAQ
#### Question

Answer
