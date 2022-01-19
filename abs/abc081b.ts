import * as fs from "fs";
const input = fs.readFileSync("/dev/stdin", "utf8").split("\n");
const n = Number(input[0]);
let al = input[1].split(" ").map((_) => Number(_));

let canDiv = 0;
while (true) {
    if (al.every((i) => i % 2 === 0)) {
        canDiv++;
    } else {
        break;
    }

    al = al.map((j) => j / 2);
}
console.log(canDiv);
