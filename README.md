# js-typecheck
Tiny collection of predictable type checking for Javascript.

#### Motivation
Coming from other languages one of the things that can make javascript very annoying is type checking, this module makes it as predictable as it is in other languages.

In addition for the same reason described above it brings some useful checkings for classes, like isInstanceOf and  isSubClassOf.

#### Requirements
This module requires support for es6+

#### Install
npm install js-typecheck --save

#### Supported

- isSubClassOf
- isInstanceOf
- isSameType
- isObject
- isPlainObject
- isList
- isUndefined
- isCallback
- isString
- isNumber
- isBool

#### Examples

```javascript
const TypeCheck = require('js-typecheck');

// string checking
if (TypeCheck.isString("text"))
  console.log("it's a string");


// number checking
if (TypeCheck.isNumber(5))
  console.log("it's a number");


// callback (function) checking
if (TypeCheck.isCallback(function(){}))
  console.log("it's a callback");


// Subclassing checking
class A{}
class B extends A {}

if (TypeCheck.isSubClassOf(B, A))
  console.log("B is derived from A");


// Instance checking
if (TypeCheck.isInstanceOf(new B(), A))
  console.log("B is istance of A");


// List (array) checking
if (TypeCheck.isList([1, 2])
  console.log("it's a list");


// ...
// more examples can be found under the tests
```

Please feel free to contact me if you have any questions.
