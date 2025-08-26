// 용돈기입장
// 5월1일:30000원
// 5월2일:15000원

const promptSync = require("prompt-sync"); // 입력 받는 라이브러리
const prompt = promptSync();

const fs = require("fs"); //파일 가져오는 라이브러리
const data = fs.readFileSync("test.txt", "utf-8");
const contents = prompt("내용 입력 [예시: 5/1:30000won]");
const newData = data + "\n" + contents;
fs.writeFileSync("test.txt", newData);
