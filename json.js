"use strict";
// JSON에 대해 조금더 공부를 하고 싶으시면:
// MDN ➡️ https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/JSON
// JavaScript.info ➡️ https://javascript.info/json
// JavaScript.info 한국어 ➡️ https://ko.javascript.info/json

// 유용한 사이트:
// JSON Diff checker(debug): http://www.jsondiff.com/
// JSON Beautifier/editor: https://jsonbeautifier.org/
// JSON Parser: https://jsonparser.org/
// JSON Validator: https://tools.learningcontainer.com/json-validator/

// JSON
// JavaScript Object Notation

// 1. Object to JSON
// stringfy(obj)
let json = JSON.stringify(true);
console.log(json);

json = JSON.stringify(["apple", "banana"]);
console.log(json);

const rabbit = {
  name: "tori",
  color: "white",
  size: null,
  birthDate: new Date(),
  // symbol: Symbol("id"), // js에만 있는 data type이므로 json에 포함이 되지 않는다.
  jump: () => {
    console.log(`${name} can jump!`);
  }, // 함수는 object에 있는 데이터가 아니므로 json에 포함이 되지 않는다.
};

json = JSON.stringify(rabbit);
console.log(json);

json = JSON.stringify(rabbit, ["name", "color"]); // select specific properties
console.log(json);
// 세밀한 컨트롤을 원할 때, callback function 사용 가능
json = JSON.stringify(rabbit, (key, value) => {
  console.log(`key: ${key}, value: ${value}`);
  return key === "name" ? "woo" : value;
});
console.log(json);

// 2. JSON to Object
// parse(json)
console.clear();
json = JSON.stringify(rabbit);
const obj = JSON.parse(json, (key, value) => {
  console.log(`key: ${key}, value: ${value}`);
  return key === "birthDate" ? new Date(value) : value;
});
console.log(obj);
rabbit.jump();
// obj.jump(); // error, jump method is not include in json
console.log(rabbit.birthDate.getDate());
// console.log(obj.birthDate.getDate()); // error
console.log(obj.birthDate);
