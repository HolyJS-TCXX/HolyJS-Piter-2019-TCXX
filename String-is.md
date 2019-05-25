# String.is
## motivation
проверяет переданный параметр на то, что он является строкой.

по аналогии с методом Array.is

## high-level api
```javascript
const s1 = "abc";
const s2 = new String("abc");

typeof s1 === "string"; // true
typeof s2 === "string"; // false

s1 instanceof String; // false
s2 instanceof String; // true

String.is(s1); // true
String.is(s2); // true
```
