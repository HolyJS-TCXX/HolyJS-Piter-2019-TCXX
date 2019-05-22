# ECMAScript proposal:  structured partial object "shallow copy" and co-aplied destruction.
- [Motivation](#motivation)
- [High-level API](#high-level-api)

## Motivation

Fundamentally you need an existent object understand this proposal. From now being with ES6 at this pre-condition you can bring any structured [destruction to variables](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment). For example:

```js
const myPreCondition = {
	a : {
		d : 1,
	},
	b : {
		e : 2,
		f : 3
	},
	c : 2
};

// then this creates two const : a and b
const {a, b} = myPreCondition;
```

And then, for example, we can assign this variables to the other existent object in a way like this:

```js
const myOtherObject = {};
// something like this
Object.assign(myOtherObject, {a, b} = );
// let assume previous code as pre-condition
// so we have a and b as const at this moment
Object.assign(myOtherObject, {a, b});
```


So, the idea is about to extract only some necessary props to the other object directly, wich means without any intermediate additions.


## High-level API

This declaration example we suppose `extra` will become an object as receive `a` and `c` from `myPreCondition` as properties:

```js
const extra = myPreCondition.{a, c};

console.log(Object.keys(extra)); // ['a', 'c']
console.log(extra); // { a : { d : 1 }, c : 2 }
```

This means we did `Object.assign` directly, without any intermediate memory consumption, just made key `a` in `extra` as pointer to `a` of `myPreCondition` and made key `c` as immediately destructured `2` as it was pointed to numeric vector value.

One more example:

```js
const extraFar = {
	...myPreCondition.{a, c},
	...myPreCondition.b.{e},
};

console.log(Object.keys(extraFar)); // ['a', 'c', 'e']
```

## Assignment to an existent object

```js

const existentObject = { e : 1 };

existentObject = {
	...myPreCondition.{a, c},
	...myPreCondition.b.{e},
};

console.log(Object.keys(existentObject)); // ['a', 'c', 'e']
console.log(existentObject.e); // 2, as it was at myPreCondition.b.e;
```

So, the behaviour is the same as it was `Object.assign`, but for sure can be optimized under the hood of V8.
