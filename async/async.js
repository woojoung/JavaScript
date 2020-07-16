"use strict";
// async & await
// clear style of using promise :)

// 1. async
async function fetchUser() {
  // do network request in 10 secs....
  return "woo";
}

const user = fetchUser();
user.then(console.log);
console.log(user);

// 2. await
function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function getApple() {
  await delay(1000); // delay가 끝날때까지 await을 통해 기다려준다.
  return "🍎";
}

async function getBanana() {
  await delay(1000);
  return "🍌";
}

// function pickFruits() {
//   return getApple().then((apple) => {
//     return getBanana().then((banana) => `${apple} + ${banana}`);
//   });
// }
// --> callback hell again

// async function pickFruits() {
//   const apple = await getApple();
//   const banana = await getBanana();
//   return `${apple} + ${banana}`;
// }
// --> 2 secs

async function pickFruits() {
  const applePromise = getApple();
  const bananaPromise = getBanana();
  const apple = await applePromise;
  const banana = await bananaPromise;
  return `${apple} + ${banana}`;
}
// --> 1 sec, promise로 만들어주면 병렬적으로 바로 resolve가 시작 되므로,.
// 근데 코드가 좀 더럽다.
pickFruits().then(console.log);

// 3. usefule Promise APIs
function pickAllFruits() {
  // promise를 배열로 받아와서 한번에 처리
  return Promise.all([getApple(), getBanana()]).then((fruits) =>
    fruits.join(" + ")
  );
}

pickAllFruits().then(console.log);

function pickOnlyOne() {
  // 배열로 받은 promise 중 가장 먼저 실행된 것을 반환
  return Promise.race([getApple(), getBanana()]);
}
pickOnlyOne().then(console.log);

// 이렇게 async와 await은 promise를 더 간단하게 쓸 수 있는 아이(syntatical sugar)이고
// promise는 all 이나 race 같이 유용한 API가 있습니다.
