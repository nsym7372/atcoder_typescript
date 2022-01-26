import * as fs from "fs";
const [n, ...vl] = fs
    .readFileSync("/dev/stdin", "utf8")
    .trim()
    .split(/\s/)
    .map(Number);

const ret = vl
    .sort((a, b) => a - b)
    .reduce((p, c) => {
        return (p + c) / 2;
    });

console.log(ret);
