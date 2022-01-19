import * as fs from "fs";

const input = fs.readFileSync("/dev/stdin", "utf8");
const a = +input.split("\n")[0];
const bc = input
    .split("\n")[1]
    .split(" ")
    .map((_) => Number(_));
const d: string = input.split("\n")[2];

console.log(`${a + bc[0] + bc[1]} ${d}`);
