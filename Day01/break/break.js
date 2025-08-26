const date = new Date();
const minutes = date.getMinutes();
const breakTime = 50;

if (breakTime - +minutes > 0) {
  console.log(`수업 시간입니다. 쉬는시간까지 ${breakTime - +minutes}분 남았습니다. `);
} else {
  console.log(`쉬는 시간입니다!`);
}

setTimeout(() => {
  console.log("프로그램 종료");
}, 10000);
