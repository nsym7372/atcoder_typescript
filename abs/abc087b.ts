import * as fs from "fs";
const [a, b, c, x] = fs
    .readFileSync("/dev/stdin", "utf8")
    .split("\n")
    .map((_) => Number(_));

let count = 0;
for (let i in [...Array(a + 1)]) {
    for (let j in [...Array(b + 1)]) {
        for (let k in [...Array(c + 1)]) {
            if (Number(i) * 500 + Number(j) * 100 + Number(k) * 50 === x) {
                count++;
            }
        }
    }
}
console.log(count);
