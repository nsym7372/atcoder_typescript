// 未提出

import * as fs from "fs";
const inputs = fs.readFileSync("/dev/stdin", "utf8").trim().split("\n");
const n = Number(inputs[0]);

const am = inputs.slice(1).map((_) => _.split(" ").map(Number));
// console.log(am);

const pair = [];
for (let i = 0; i < 2 * n; i++) {
    for (let j = i + 1; j < 2 * n; j++) {
        pair.push([i, j]);
        const test = [...Array(2 * n)]
            .map((_, idx) => idx)
            .filter((_) => _ !== i && _ !== j);
        console.log(test);
    }
}
console.log(pair);
