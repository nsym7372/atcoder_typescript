import * as fs from "fs";
const inputs = fs.readFileSync("/dev/stdin", "utf8").split("\n");
const [k, n] = inputs[0].split(" ").map(Number);
const al = inputs[1].split(" ").map(Number);
al.push(al[0] + k);

let max = 0;
for (let i = 0; i < al.length - 1; i++) {
    const d = al[i + 1] - al[i];
    max = Math.max(d, max);
}

console.log(al[al.length - 1] - al[0] - max);
