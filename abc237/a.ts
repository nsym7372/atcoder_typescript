import * as fs from "fs";
const n = BigInt(fs.readFileSync("/dev/stdin", "utf8"));

console.log((-2) ** 31 <= n && n < 2 ** 31 ? "Yes" : "No");
