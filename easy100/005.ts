import * as fs from "fs";
const inputs = fs.readFileSync("/dev/stdin", "utf8").split("\n");
const [n, m, c] = inputs[0].split(" ").map(Number);
const bl = inputs[1].split(" ").map(Number);
const am = inputs.slice(2, n + 2);

let count = 0;
for (let a_row of am) {
    const al = a_row.split(" ").map(Number);
    let sum = c;
    for (let i = 0; i < m; i++) {
        sum += al[i] * bl[i];
    }

    if (sum > 0) {
        count++;
    }
}
console.log(count);
