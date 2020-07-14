// whole script strict mode syntax
// JavaScript is very flexible
// Flexible === dangeruous
// added ECMAScript 5

// 1. Use strict
// added in ES 5
// use this for Vanila JavaScript.

"use strict";

// 2. Variable rw(read/write)
// let (added in ES6)
let gloablName = "global name";
{
  let name = "woojoung";
  console.log(name);
  name = "hello";
  console.log(name);
  console.log(gloablName);
}
console.log(name);
console.log(gloablName);

// var (dont ever use this!)
// var hoisting (move, declaration from bottom to top), 어디에 선언했는지 상관없이 항상 제일 위로 선언을 끌어올려주는 것을 말합니다.
// has no block scope
{
  age = 4;
  var age;
}
console.log(age);

// 3. Constants r(read only)
//  use const whenever possible
//  only use let if variable needs to change.
// favor immutable data type always for a few reasons:
// - security
// - thread safety
// - reduce human mistakes

const daysInWeek = 7;
const maxNumber = 5;

// Note!
// Immutable data types: primitive types, frozen objects (i.e. object.freeze())
// Mutable data types: all objects by default are mutable in JS.

// 4. Variable types
// primitive, single item: number, string, boolean, null, undefined, symbol
// object, box constainer
// function, first-class function

const count = 17; // integer
const size = 17.1; // decimal number
console.log(`value: ${count}, type: ${typeof count}`);
console.log(`value: ${size}, type: ${typeof size}`);

// number - special numeric values: infinity, -infinity, Nan
const infinity = 1 / 0;
const negativeInfinity = -1 / 0;
const nAn = "not a number" / 2;
console.log(infinity);
console.log(negativeInfinity);
console.log(nAn);
// 나중에 Dom 요소 에서 position을 잡을 때 사용할 수 있다.

// bigInt (fairly new, don't use it yet)
const bigInt = 1234567890123456798012345678901234567890n; // over (-2**53) ~ (2**53)
console.log(`value: ${bigInt}, type: ${typeof bigInt}`);
Number.MAX_SAFE_INTEGER;

// string
const char = "c";
const brendan = "brendan";
const greeting = "hello " + brendan;
console.log(`value: ${greeting}, type: ${typeof greeting}`);
const helloBob = `hi ${brendan}!`; // template literals (string)
console.log(`value: ${helloBob}, type: ${typeof helloBob}`);

// boolean
// false: 0, null, undefined, NaN, ''
// true: any other value
const canRead = true;
const test = 3 < 1; // false
console.log(`value: ${canRead}, type: ${typeof canRead}`);
console.log(`value: ${test}, type: ${typeof test}`);

// null
let nothing = null;
console.log(`value: ${nothing}, type: ${typeof nothing}`);

// undefined
let x;
console.log(`value: ${x}, type: ${typeof x}`);

//  symbol, create unique identifiers for objects
const symbol1 = Symbol("id");
const symbol2 = Symbol("id");
console.log(symbol1 === symbol2);
const gSymbol1 = Symbol.for("id");
const gSymbol2 = Symbol.for("id");
console.log(gSymbol1 === gSymbol2); // true
console.log(`value: ${symbol1.description}, type: ${typeof symbol1}`); // always use .description

// object, real-lite object, data structure
const woojoung = { name: "woojoung", age: 29 };
woojoung.age = 21;

// 5. Dynamic typing: dynamically typed language
let text = "hello";
console.log(text.charAt(0)); // 'h'
console.log(`value: ${text}, type: ${typeof text}`);
text = 1;
console.log(`value: ${text}, type: ${typeof text}`);
text = "7" + 5;
console.log(`value: ${text}, type: ${typeof text}`);
text = "8" / "2";
console.log(`value: ${text}, type: ${typeof text}`);
console.log(text.charAt(0));
