const { createClient } = require("@supabase/supabase-js");
const promptSync = require("prompt-sync");
const prompt = promptSync();

const URL = "https://kmhyilcpctqpgwqrnyhq.supabase.co";
const supabase = createClient(URL, KEY);

const menuSelect = async () => {
  console.log("start!");
  const { data } = await supabase.from("menu").select("*");
  console.table(data);
};
const addIcecream = async () => {
  console.log("start!");
  const name = prompt("Insert name of menu:");
  const price = prompt("Insert price of menu:");
  const kcal = prompt("Insert kcal of menu:");
  const result = await supabase.from("menu").insert({ name, price, kcal });
  console.log(result);
};
menuSelect();

while (true) {
  const num = prompt("원하는 메뉴 입력(1.등록 2.삭제 3.프로그램 종료");
  if (num == 1) {
    console.log("등록 ");
    console.log("원하는 메뉴 이름 넣으세요. ");
  } else if (num == 2) {
    console.log("삭제 ");
    console.log("삭제하고싶은 메뉴 이름 넣으세요. ");
  }
  if (num == 3) break;
}
console.log("프로그램종료");
