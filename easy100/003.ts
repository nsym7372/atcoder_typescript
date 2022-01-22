import * as fs from "fs";
import { exit, nextTick } from "process";
const input = fs.readFileSync("/dev/stdin", "utf8").split("\n");
const [n, a, b] = input[0].split(" ").map(Number);
const ls = input[1].split("");

let now = 0;
let overSea = 0;
for (const s of ls) {
    if (a + b <= now) {
        console.log("No");
        continue;
    }

    switch (s) {
        case "a":
            console.log("Yes");
            now++;
            break;
        case "b":
            overSea++;
            if (overSea <= b) {
                console.log("Yes");
                now++;
            } else {
                console.log("No");
            }
            break;
        case "c":
            console.log("No");
            break;
        default:
            exit();
    }
}
