import * as fs from "fs";
const inputs = fs.readFileSync("/dev/stdin", "utf8").trim().split("\n");
const n = Number(inputs[3]);
const bl = inputs.slice(4);

// console.log(n);
// console.log(bl);

const bingo = inputs
    .slice(0, 3)
    .map((b) => b.split(" ").map((i) => bl.includes(i)));

// console.log(bingo);

const isBingo = (items: boolean[]) => {
    return items.every((_) => _);
};

const result =
    isBingo(bingo[0]) ||
    isBingo(bingo[1]) ||
    isBingo(bingo[2]) ||
    isBingo(bingo.map((_) => _[0])) ||
    isBingo(bingo.map((_) => _[1])) ||
    isBingo(bingo.map((_) => _[2])) ||
    isBingo(bingo.map((_, i) => _[i])) ||
    isBingo(bingo.map((_, i) => _[2 - i]));

console.log(result ? "Yes" : "No");
