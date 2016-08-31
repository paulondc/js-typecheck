<img src="data/logo.png"/>



TypeCheck provides a tiny collection of predictable type checking for javascript. There are several other libraries that also provide this functionally, however they tend to bring it as part of many other features where many of them are no longer required since [ES6](http://es6-features.org).

The goal of this library is to be a tiny/skinny dependency focused exclusively in type checking things, therefore providing a direct and simple interface ~~(rather than trying to solve all problems related with javascript itself)~~.

#### Requirement
This module requires support for [ES6](http://es6-features.org)

#### Install
```
npm install js-typecheck --save
```

#### Supported
---
Returns if the object or class (a) is a subclass of (B):
```javascript
TypeCheck.isSubClassOf(a, B)
```
---
Returns if the object (a) is an instance of another object (b):
```javascript
TypeCheck.isInstanceOf(a, b)
```
---
Returns if the object (a) has the same type as the object (b):
```javascript
TypeCheck.isSameType(a, b)
```
---
Returns if the input (a) is an object:
```javascript
TypeCheck.isSameType(a)
```
---
Returns if the input (a) is a plain object (objects created using literal notation):
```javascript
TypeCheck.isPlainObject(a)
```
---
Returns if the input (a) is an array object:
```javascript
TypeCheck.isList(a)
```
---
Returns if the input (a) is undefined:
```javascript
TypeCheck.isUndefined(a)
```
---
Returns if the input (a) is a callable:
```javascript
TypeCheck.isCallable(a)
// or
TypeCheck.isCallback(a)
```
---
Returns if the input (a) is a string type:
```javascript
TypeCheck.isString(a)
```
---
Returns if the input (a) is a number type:
```javascript
TypeCheck.isNumber(a)
```
---
Returns if the input (a) is a boolean type:
```javascript
TypeCheck.isBool(a)
```

#### Examples

```javascript
const TypeCheck = require('js-typecheck');

// string checking
if (TypeCheck.isString("text"))
  console.log("it's a string");
```

```javascript
// number checking
if (TypeCheck.isNumber(5))
  console.log("it's a number");
```

```javascript
// callback (function) checking
if (TypeCheck.isCallback(function(){}))
  console.log("it's a callback");
```

```javascript
// Subclassing checking
class A{}
class B extends A {}

if (TypeCheck.isSubClassOf(B, A))
  console.log("B is derived from A");
```

```javascript
// Instance checking
if (TypeCheck.isInstanceOf(new B(), A))
  console.log("B is istance of A");
```

```javascript
// List (array) checking
if (TypeCheck.isList([1, 2])
  console.log("it's a list");
```

```javascript
// ...
// more examples can be found under the tests
```

Please feel free to contact me if you have any questions.
