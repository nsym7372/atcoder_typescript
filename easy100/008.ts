import * as fs from "fs";
const target = Number(fs.readFileSync("/dev/stdin", "utf8").replace(" ", ""));

console.log(Number.isInteger(Math.sqrt(target)) ? "Yes" : "No");
