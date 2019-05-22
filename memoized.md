# ECMAScript proposal: Add memoized prefix for functions
- [Motivation](#motivation)
- [High-level API](#high-level-api)

 ## Motivation

To improve performance we use memoization. 
Currently to create memoized functions we need to save some libraries, e.g. [memoize-one](https://github.com/alexreardon/memoize-one)

 ```js
import memoizeOne from 'memoize-one';

const add = (a, b) => a + b;
const memoizedAdd = memoizeOne(add);

memoizedAdd(1, 2); // 3

memoizedAdd(1, 2); // 3
// Add function is not executed: previous result is returned
```

Would be awesome to have this functionality in the JS.

 ## High-level API

 ```js
memoized function add(a, b) {
  return a + b;
}

memoized const add = (a, b) => a + b;
```

It's also can be a good idea to apply it to existing functions:
```
const add = (a, b) => a + b;
const memoizedAdd = memoized add;
```
