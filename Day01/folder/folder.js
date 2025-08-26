const promptSync = require("prompt-sync"); //prompt-sync 라이브러리 쓰겠다
const prompt = promptSync(); // 초기화 해주는 함수
const name = prompt("what's your name?");
console.log(`hello, ${name}!`);

// howOld.js
// 유저에게 몇살인지 물어보면
// ~~~~년생 이시군요! 나오는 프로그램 -> .exe
