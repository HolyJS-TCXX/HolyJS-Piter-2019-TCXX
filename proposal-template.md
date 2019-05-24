# ECMAScript proposal: Optional Chaining
- [ECMAScript proposal: Optional Chaining](#ecmascript-proposal-optional-chaining)
  - [Motivation](#motivation)
  - [High-level API](#high-level-api)
    - [Disclaimer](#disclaimer)

## Motivation

When looking for a property value that's deep in a tree-like structure, one often has to check whether intermediate nodes exist:

```javascript
var street = user.address && user.address.street;
```

Also, many API return either an object or null/undefined, and one may want to extract a property from the result only when it is not null:

```javascript
var fooInput = myForm.querySelector('input[name=foo]')
var fooValue = fooInput ? fooInput.value : undefined
```

The Optional Chaining Operator allows a developer to handle many of those cases without repeating themselves and/or assigning intermediate results in temporary variables:

```javascript
var street = user.address..street
var fooValue = myForm.querySelector('input[name=foo]')..value
```

The call variant of Optional Chaining is useful for dealing with interfaces that have optional methods:

```js
iterator.return..() // manually close an iterator
```
or with methods not universally implemented:
```js
if (myForm.checkValidity..() === false) { // skip the test in older web browsers
    // form validation fails
    return;
}
```

## High-level API

The Optional Chaining operator is spelled `..`. It may appear in three positions:
```javascript
obj..prop       // optional static property access
obj..[expr]     // optional dynamic property access
func..(...args) // optional function or method call
```

If the operand at the left-hand side of the `?.` operator evaluates to undefined or null, the expression evaluates to undefined. Otherwise the targeted property access, method or function call is triggered normally.

Here are basic examples, each one followed by its desugaring. (The desugaring is not exact in the sense that the LHS should be evaluated only once.)
```js
a..b                          // undefined if `a` is null/undefined, `a.b` otherwise.
a == null ? undefined : a.b

a..[x]                        // undefined if `a` is null/undefined, `a[x]` otherwise.
a == null ? undefined : a[x]

a..b()                        // undefined if `a` is null/undefined
a == null ? undefined : a.b() // throws a TypeError if `a.b` is not a function
                              // otherwise, evaluates to `a.b()`

a..()                        // undefined if `a` is null/undefined
a == null ? undefined : a()  // throws a TypeError if `a` is neither null/undefined, nor a function
                             // invokes the function `a` otherwise

const { b } = ..a
b == a ? a.b : undefined     // undefined if `a` is null/undefined, `a.b` otherwise.

```
<!-- @import "[TOC]" {cmd="toc" depthFrom=1 depthTo=6 orderedList=false} -->


### Disclaimer

This proposal are very inspired by [Optional Chaining for JavaScript](https://github.com/tc39/proposal-optional-chaining/)

The only difference is that in my version you uses double dot `..` instead of question sign dot `?.` and destructurization. I just suppose it looks nicer

