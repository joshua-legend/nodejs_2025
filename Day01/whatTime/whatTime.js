// db.js
const sqlite3 = require("sqlite3").verbose();

// DB 연결 (없으면 새로 생성됨)
const db = new sqlite3.Database("mydata.db");
