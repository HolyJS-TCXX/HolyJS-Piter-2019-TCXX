# ECMAScript proposal: The "use slow" Directive
- [Motivation](#motivation)
- [Declaring](#declaring)
- [Usage](#usage)

## Motivation

`"use slow";` defines that code should be executed slowly.\
Basic performance decrease: x 2.

## Declaring

`"use slow";` Must be declared in a Directive Prologue

At the beginning of a script:
```js
"use slow";
console.log('slow code');
```

At the beginning of a function:
```js
console.log('normal');

function slowFunction(){
  "use slow";
  console.log('slow');
}
```
`"use slow";` affects only the function in which it is declared.

## Usage
Use slow can be be more than once. Slowdown effect is multiplied. Example:
```js
"use slow"; // x 2
"use slow"; // x 2
"use slow"; // x 2
console.log('this code 8 times slower');
```
Use slow inside the function takes effect from the outside code or function:
```js
"use slow"; // x 2
console.log('this code 2 times slower');

function f(){
  "use slow"; // x 2
  console.log('this code 4 times slower');
  
  return function g(){
    "use slow"; // x 2
    console.log('this code 8 times slower');
  }
}
```
