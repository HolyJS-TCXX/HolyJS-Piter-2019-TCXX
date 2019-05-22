# ECMAScript proposal: Path traversal access to object parent properties (implementation).
- [Motivation](#motivation)
- [High-level API](#high-level-api)
- [How it works?](#how-it-works)
- [FAQ](#faq)

## Motivation

All JavaScript's objects can't remember their own parent objects. Here is one solution to this problem.

I was inspired by the [bstuff](https://github.com/bstuff)'s 
[idea](https://github.com/HolyJS-TCXX/HolyJS-Piter-2019-TCXX/pull/3) and wrote a small implementation 
(specially for [HolyJS Piter 2019](https://holyjs-piter.ru/)).

## High-level API

First you need to create some objects like:
```js
const someObject = {
  propA: 'A1',
  propB: {
      propB1: 'B1',
      propB2: 'B2',
    }
}

const someSecondObject = someObject.propB
```  

And after that you can access any properties of the parent object using the arrays syntax:
```js
console.log(someSecondObject['./']) // = { propB1: 'B1', propB2: 'B2' }
console.log(someSecondObject['../']) // = { propA: 'A1', propB: { propB1: 'B1', propB2: 'B2' } }
console.log(someSecondObject['../propA']) // = 'A1'
console.log(someSecondObject['../propB/propB2']) // = 'B2'
```

## How it works?

### Assembly

Gulp was used as an assembly tool, as it is simple and easy to use.

You can look at the configuration in the `gulpfile.js`.

### Plugin

In order to add objects "memory" about their parent objects, I wrote a plugin that parsed javascript code
and wrapped all objects by some functions. You can see the plugin implementation in the 
`src/plugin/objectBindingPlugin.js`.

#### Parsing

For parsing code was selected the package [falafel](https://github.com/substack/node-falafel).

How I parsed code you can see in `src/plugin/parse.js`.

#### Wrapping

Your simple javascript code:
```js
const alex = {
  name: 'Alex',
  dateOfBirth: {
    day: '04',
    month: '03',
    year: '1996'
  },
}

const alexsDateOfBirth = alex.dateOfBirth

console.log(alexsDateOfBirth['../name'])
```

After building your code we will see the following in the bundle file:
```js
const createObject = () => { /* ... */ }
const getFromObject = () => { /* ... */ }

const person = createObject({
  name: 'Alex',
  dateOfBirth: {
    day: '04',
    month: '03',
    year: '1996'
  },
})

const alexsDateOfBirth = alex.dateOfBirth

console.log(getFromObject(alexsDateOfBirth, '../name'))
```

Function `createObject` returns modified object in which each object remembers its parent 
(implementation: `src/plugin/service/createObject.js`).

Function `getFromObject` returns requested property from an object 
(implementation: `src/plugin/service/getFromObject.js`).

## FAQ

1. How can I test this solution? — *Just clone the repository and run the command 
`npm i && npm run start`.*
1. Can I test this solution with my initial data? — *Sure. You should go to `src/data` 
and either create a new javascript file or modify existing files.*
1. Don't you think that this solution is an anti-pattern? — *Yes, I think so. But when I had free 
time, it became very interesting for me to implement something like this.*
1. Will this solution be compatible with other libraries? — *I don't know, this solution is 
only to demonstrate the [bstuff](https://github.com/bstuff)'s idea in action :)*
