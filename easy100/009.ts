import * as fs from "fs";
const [n, k, ...xl] = fs
    .readFileSync("/dev/stdin", "utf8")
    .trim()
    .split("\n")
    .join(" ")
    .split(" ")
    .map(Number);

let distance = 0;
for (let i = 0; i < n; i++) {
    const a = Math.abs(xl[i]) * 2;
    const b = Math.abs(xl[i] - k) * 2;
    distance += Math.min(a, b);
}

console.log(distance);
