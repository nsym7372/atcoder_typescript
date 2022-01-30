//RE

import * as fs from "fs";
const inputs = fs.readFileSync("/dev/stdin", "utf8").trim().split("\n");
const [h, w] = inputs[0].split(" ").map(Number);
const am = inputs.slice(1).map((_) => _.split(" ").map(Number));

for (let i = 0; i < w; i++) {
    const row = [];
    for (let j = 0; j < h; j++) {
        row.push(am[j][i]);
    }
    console.log(...row);
}
