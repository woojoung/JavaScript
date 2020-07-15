"use strict";

// Objects
// one of the JavaScript's data types.
// a collection of related data and/or function
// Nearly all objects in JavaScript are instance
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object
// object = set of { key : value }

// 1. Literals and properties
const obj1 = {}; // 'object literal' syntax
const obj2 = new Object(); // 'object constructor' syntax

function print(person) {
  console.log(person.name);
  console.log(person.age);
}

const woo = { name: "woo", age: 20 };
print(woo);

// JavaScript: data type will be set dynamically in runtime
// with JavaScript magic (dynamically typed language)
// can add properties later
woo.hasJob = true; // 뒤늦게 하나의 property 추가 가능
console.log(woo.hasJob);

// can delete properties later
delete woo.hasJob;
console.log(woo.hasJob);

// 2. Computed properties
//  key should be always string
console.log(woo.name);
console.log(woo["name"]);
console.log(woo[name]);
woo["hasJob"] = true;
console.log(woo.hasJob);

function printValue(obj, key) {
  console.log(obj.key); //  undefinded
  console.log(obj[key]);
}
printValue(woo, "name");
printValue(woo, "age");

// 3. Property value shorthand
const person1 = { name: "bob", age: 2 };
const person2 = { name: "steve", age: 3 };
const person3 = { name: "dave", age: 4 };
const person4 = makePerson("woo", 30);
console.log(person4);

function makePerson(name, age) {
  return {
    // name: name,
    // age: age,
    name, // key, value 같으면 생략 가능
    age,
  };
}
// class와 비슷하다. javascript에 class가 없었을때 object를 사용했다. 그것이 바로 아래와 같은 constructor function
// 4. Constructor function
function Person(name, age) {
  // this = {};
  this.name = name;
  this.age = age;
  // return this;
}

// 5. in operator: property existence check (key in obj)
console.log("name" in woo);
console.log("age" in woo);
console.log("random" in woo);
console.log(woo.random);

// 6. for..in vs for..of
// for (key in obj)
console.clear();
for (let key in woo) {
  console.log(key);
}
// for (value of iterable)
const array = [1, 2, 3, 4, 5];
for (let i = 0; i < array.length; i++) {
  console.log(array[i]);
}
for (let value of array) {
  console.log(value);
}

// 7. Fun cloning
// Object.assign(dest, [obj1, obj2, obj3 ...])
const user = { name: "woo", age: 4 };
const user2 = user;
user2.name = "coder";
console.log(user);

//old way
const user3 = {};
for (let key in user) {
  user3[key] = user[key];
}
console.clear();
console.log(user3);

// new way
const user4 = {};
Object.assign(user4, user);
// const user4 = Object.assign({}, user);
console.log(user4);

// another example
const fruit1 = { color: "red" };
const fruit2 = { color: "blue", size: "big" };
const mixed = Object.assign({}, fruit1, fruit2);
console.log(mixed.color);
console.log(mixed.size);
