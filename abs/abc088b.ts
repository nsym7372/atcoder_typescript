import * as fs from "fs";
const inputs = fs.readFileSync("/dev/stdin", "utf8").split("\n");
const n = Number(inputs[0]);
const al = inputs[1]
    .split(" ")
    .map((_) => Number(_))
    .sort((a, b) => b - a);

let alice = 0;
let bob = 0;
for (let i = 0; i < n; i++) {
    if (i % 2 === 0) {
        alice += al[i];
    } else {
        bob += al[i];
    }
}

console.log(alice - bob);
