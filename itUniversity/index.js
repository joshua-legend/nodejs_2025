const { createClient } = require("@supabase/supabase-js");
const promptSync = require("prompt-sync");
const prompt = promptSync();

const URL = "https://kmhyilcpctqpgwqrnyhq.supabase.co";
const supabase = createClient(URL, KEY);

const select = async () => {
  console.log("start!");
  const { data } = await supabase.from("university").select("*");
  console.table(data);
};
const enroll = async () => {
  console.log("start!");
  const id = prompt("Insert id of student:");
  const name = prompt("Insert name of student:");
  const year = prompt("Insert year of student:");
  const major = prompt("Insert major of student:");
  await supabase.from("university").insert({ id, name, year, major, expelled: 0 });
};

const num = prompt("학생 등록 프로그램\n 1.학생등록 2.학생전체확인");

if (num == 1) enroll();
else if (num == 2) select();
else console.log("프로그램 오류");
