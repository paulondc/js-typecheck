(function(){
  'use strict';

  const assert = require('assert');
  const TypeCheck = require("../index");

  describe('TypeCheck:', function(){

    // resources
    class A{}
    class B extends A {}

    // is string
    it("Text should match to the string type", function(){
      assert(TypeCheck.isString("text"));
    });

    it("Basic types should not be considered plain objects", function(){
      assert(TypeCheck.isPlainObject({a: 1}));

      assert(!TypeCheck.isPlainObject(null));
      assert(!TypeCheck.isPlainObject(undefined));
      assert(!TypeCheck.isPlainObject("text"));
      assert(!TypeCheck.isPlainObject(null));
      assert(!TypeCheck.isPlainObject(1));
      assert(!TypeCheck.isPlainObject([]));
      assert(!TypeCheck.isPlainObject(new Date()));
      assert(!TypeCheck.isPlainObject(false));
    });

    it("Numbers should not be considered as string type", function(){
      assert(!TypeCheck.isString(1));
    });

    // is subclass of
    it ("B class should match as subclass of A", function(){
      assert(TypeCheck.isSubClassOf(B, A));
      assert(!TypeCheck.isSubClassOf(new B(), A));
    });

    it ("A class should not match as subclass of B", function(){
      assert(!TypeCheck.isSubClassOf(A, B));
    });

    // is object
    it ("Should match as object", function(){
      assert(TypeCheck.isObject(new A()));
    });

    it ("Function should not match as object", function(){
      assert(!TypeCheck.isObject(function(){}));
    });

    // is same type
    it ("Should match as same object type", function(){
      assert(TypeCheck.isSameType(new A(), new A()));
    });

    it ("Should not match as same type", function(){
      assert(!TypeCheck.isSameType(A, new B()));
      assert(!TypeCheck.isSameType(new A(), new B()));
    });

    // is list
    it ("Should match as list", function(){
      assert(TypeCheck.isList(["A", "B", "C"]));
    });

    it ("Should not match as list", function(){
      assert(!TypeCheck.isList("Not a list"));
    });

    // is none
    it ("Should match as None", function(){
      assert(TypeCheck.isNone(undefined));
      assert(TypeCheck.isNone(null));
    });

    it ("Should not match as None", function(){
      assert(!TypeCheck.isNone("stringObject".length));
    });

    // is number
    it("Numbers should match to the number type", function(){
      assert(TypeCheck.isNumber(1));
      assert(TypeCheck.isNumber(1.2));
    });

    it("Strings should not be considered as number type", function(){
      assert(!TypeCheck.isNumber("1"));
    });

    // is boolean
    it("Boolean should match to the bool type", function(){
      assert(TypeCheck.isBool(true));
      assert(TypeCheck.isBool(false));
    });

    it("Boolean should not be considered as string or number types", function(){
      assert(!TypeCheck.isBool("1"));
      assert(!TypeCheck.isBool(1));
    });

    // is callback
    it("Function should match as callable/callback", function(){
      assert(TypeCheck.isCallable(function(){}));
      assert(TypeCheck.isCallback(function(){}));
    });

    it("Objects should not match as callable/callback", function(){
      assert(!TypeCheck.isCallable(new A()));
      assert(!TypeCheck.isCallback(new A()));
    });

    // is primitive
    it("Value should be a primitive", function(){
      assert(TypeCheck.isPrimitive('text'));
      assert(TypeCheck.isPrimitive(true));
      assert(TypeCheck.isPrimitive(10));
      assert(TypeCheck.isPrimitive(null));
      assert(TypeCheck.isPrimitive(undefined));
    });

    it("Value should not be a primitive", function(){
      assert(!TypeCheck.isPrimitive({}));
      assert(!TypeCheck.isPrimitive(function(){}));
      assert(!TypeCheck.isPrimitive(new Date()));
    });
  });
})();
