import * as fs from "fs";
const [h, w] = fs.readFileSync("/dev/stdin", "utf8").split(" ").map(Number);

console.log(h === 1 || w === 1 ? 1 : Math.ceil((h * w) / 2));
