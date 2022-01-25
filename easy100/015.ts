import * as fs from "fs";
import { exit } from "process";
const [n, ...dl] = fs
    .readFileSync("/dev/stdin", "utf8")
    .trim()
    .split("\n")
    .join(" ")
    .split(" ")
    .map(Number);

const noAnswer = () => {
    console.log(0);
    exit();
};

if (n % 2 === 1) {
    noAnswer();
}

const dl_s = dl.sort((a, b) => a - b);
const pl = dl_s.slice(0, n / 2);
const sl = dl_s.slice(n / 2, dl.length);

const p_last = pl[pl.length - 1];
const s_first = sl[0];

if (p_last === s_first) {
    noAnswer();
}

console.log(s_first - p_last);
