import * as fs from "fs";
const input = fs
    .readFileSync("/dev/stdin", "utf8")
    .trim()
    .split("\n")
    .splice(1)
    .map((_) => Number(_))
    .sort((a, b) => a - b);

console.log([...new Set(input)].length);
