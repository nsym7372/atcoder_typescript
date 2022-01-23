import * as fs from "fs";
const inputs = fs.readFileSync("/dev/stdin", "utf8").split("\n");
const [n, m] = inputs[0].split(" ").map(Number);
const sl = inputs[1].split(" ");
const tl = inputs[2].split(" ");

const express: { [key: string]: number } = {};
for (let t of tl) {
    express[t] = 1;
}

sl.forEach((_) => console.log(_ in express ? "Yes" : "No"));
