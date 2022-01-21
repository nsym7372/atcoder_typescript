import * as fs from "fs";
import { exit } from "process";
const [n, y] = fs.readFileSync("/dev/stdin", "utf8").split(" ").map(Number);

for (let i = 0; i <= n; i++) {
    for (let j = 0; j <= n; j++) {
        const k = n - i - j;
        if (i * 10000 + j * 5000 + k * 1000 == y && 0 <= k) {
            console.log(i, j, k);
            exit();
        }
    }
}
console.log(-1, -1, -1);
