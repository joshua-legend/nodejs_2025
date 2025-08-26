//whatTime.js
//이 파일을 실행하면,
//`현재 시간은 ~~시 ~~분 ~~초 입니다.`

const time = new Date();
const hour = time.getHours();
const min = time.getMinutes();
const seconds = time.getSeconds();
console.log(`현재 시간은 ${hour}시 ${min}분 ${seconds}초 입니다.`);

setTimeout(() => {
  console.log("프로그램 종료!");
}, 10000);
