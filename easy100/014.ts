import * as fs from "fs";
let [n, k] = fs.readFileSync("/dev/stdin", "utf8").split(" ").map(BigInt);

let nn = n % k;

let prev = 1000000000000000001n;
while (nn <= prev) {
    prev = nn;
    nn = nn - k < 0 ? (nn - k) * -1n : nn - k;
}
console.log(Number(prev));
