import * as fs from "fs";
let n = Number(fs.readFileSync("/dev/stdin", "utf8"));

for (n; true; n++) {
    let isPrime = true;
    for (let i = 2; i < n; i++) {
        if (n % i === 0) {
            isPrime = false;
        }
    }
    if (isPrime) {
        console.log(n);
        break;
    }
}
