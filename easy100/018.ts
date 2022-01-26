import * as fs from "fs";
const sl = fs.readFileSync("/dev/stdin", "utf8").trim().split("");

let result = 0;
let chain = 0;
sl.forEach((v) => {
    if (["A", "C", "G", "T"].includes(v)) {
        chain++;
    } else {
        result = Math.max(result, chain);
        chain = 0;
    }
});

console.log(Math.max(result, chain));
