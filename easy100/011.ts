import * as fs from "fs";
const n = Number(fs.readFileSync("/dev/stdin", "utf8"));

let max = 1;
for (let m of [2, 4, 8, 16, 32, 64]) {
    if (n >= m) {
        max = m;
    }
}
console.log(max);
