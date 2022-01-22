import * as fs from "fs";
const input = fs.readFileSync("/dev/stdin", "utf8").split("\n");
const n = Number(input[0].trim());
const xl = input[1].trim().split(" ").map(Number);
const x_max = Math.max(...xl);
const x_min = Math.min(...xl);

let hp_min = Number.MAX_SAFE_INTEGER;
for (let i = x_min; i <= x_max; i++) {
    const hp = xl.reduce((p, c) => {
        return p + (c - i) ** 2;
    }, 0);
    hp_min = Math.min(hp_min, hp);
}

console.log(hp_min);
