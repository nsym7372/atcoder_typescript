import * as fs from "fs";
const [n, a, b] = fs
    .readFileSync("/dev/stdin", "utf8")
    .split(" ")
    .map((_) => Number(_));

let result = 0;
for (let i in [...Array(n + 1)]) {
    let s = i
        .split("")
        .map((_) => Number(_))
        .reduce((acc, x) => {
            return acc + x;
        }, 0);
    if (a <= s && s <= b) {
        result += Number(i);
    }
}
console.log(result);
