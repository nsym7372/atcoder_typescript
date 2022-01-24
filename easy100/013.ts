import * as fs from "fs";
import { exit } from "process";
let [a, b, c] = fs.readFileSync("/dev/stdin", "utf8").split(" ").map(Number);

if (a === b && b === c && a % 2 === 0) {
    console.log(-1);
    exit();
}

const isEven = (n: number) => {
    return n % 2 === 0;
};

let count = 0;
while (isEven(a) && isEven(b) && isEven(c)) {
    const ah = a / 2;
    const bh = b / 2;
    const ch = c / 2;

    a = ah + bh;
    b = bh + ch;
    c = ch + ah;

    count++;
}

console.log(count);
