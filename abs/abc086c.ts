import * as fs from "fs";
import { exit } from "process";
const input = fs.readFileSync("/dev/stdin", "utf8").split("\n");

let [pt, px, py] = [0, 0, 0];
for (let i = 1; i <= Number(input[0]); i++) {
    const [t, x, y] = input[i].split(" ").map(Number);
    const distance = Math.abs(px - x) + Math.abs(py - y);
    const timespan = t - pt;

    if (timespan - distance < 0 || (timespan - distance) % 2 !== 0) {
        console.log("No");
        exit();
    }
    [pt, px, py] = [t, x, y];
}
console.log("Yes");
