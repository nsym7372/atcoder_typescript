import * as fs from "fs";
const [n, ...al] = fs
    .readFileSync("/dev/stdin", "utf8")
    .split(/\s/)
    .map(Number);

const ret = al.reduce(
    (p, c, i) => {
        p[c - 1] = i + 1;
        return p;
    },
    [...Array(n)]
);

const result = [...ret];
console.log(result.join(" "));
