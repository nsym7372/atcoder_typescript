import * as fs from "fs";
const inputs = fs.readFileSync("/dev/stdin", "utf8").split("\n");
const n = Number(inputs[0]);
const al = inputs[1].split(" ").map(Number);

const cards = [...Array(n)].map((_) => 0);
al.forEach((_) => (cards[_ - 1] += 1));

console.log(cards.indexOf(3) + 1);
