import * as fs from "fs";
const input = fs.readFileSync("/dev/stdin", "utf8");
const [a, b] = input.split(" ").map((_) => Number(_));

console.log((a * b) % 2 === 0 ? "Even" : "Odd");
