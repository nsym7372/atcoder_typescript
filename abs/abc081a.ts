import * as fs from "fs";
const input = fs
    .readFileSync("/dev/stdin", "utf8")
    .split("")
    .map((_) => Number(_))
    .reduce((i, j) => i + j, 0);
console.log(input);
