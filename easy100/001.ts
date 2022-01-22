import * as fs from "fs";
import { exit } from "process";
const [a, b] = fs.readFileSync("/dev/stdin", "utf8").split(" ").map(Number);

let count = 0;
while (true) {
    const now = 1 + (a - 1) * count;
    if (now >= b) {
        console.log(count);
        exit();
    }
    count++;
}
