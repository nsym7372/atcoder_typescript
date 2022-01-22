import * as fs from "fs";
import { exit } from "process";
const n = Number(fs.readFileSync("/dev/stdin", "utf8").trim());

const s1 = (n / 1.08) | 0;
const s2 = s1 + 1;
const sl = [s1, s2];

for (let s of sl) {
    if (((s * 1.08) | 0) === n) {
        console.log(s);
        exit();
    }
}
console.log(":(");
