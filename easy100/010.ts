import * as fs from "fs";
const [n, ...al] = fs
    .readFileSync("/dev/stdin", "utf8")
    .split("\n")
    .join(" ")
    .split(" ")
    .map(Number);

const als = al.sort((a, b) => b - a);
let [a, b] = [0, 0];
als.forEach((v, i) => (i % 2 === 0 ? (a += v) : (b += v)));
console.log(a - b);
