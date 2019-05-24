# ECMAScript proposal: Cascade Operator
- [Motivation](#motivation)
- [High-level API](#high-level-api)
- [FAQ](#faq)

## Motivation

If i want change some properties inside existed object it will be wieard:

```js
const user = { name: "user", password: "password", likes: 0, friends: [...] };

const updatedUser = {
  ...user,
  friends: user.friends.concat(newFriend),
  likes: user.likes + 1,
}
```

I propose Dart-like Cascade Operator which will be more declarative than previous object update

## High-level API

```js
const user = { name: "user", password: "password", likes: 0, friends: [...] };

const updatedUser = user
  ..friends.concat(newUsser)
  ..likes += 1;
```

### FAQ
#### Question

Answer
