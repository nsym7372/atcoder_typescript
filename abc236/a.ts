import * as fs from "fs";
const inputs = fs.readFileSync("/dev/stdin", "utf8").split("\n");
const sl = inputs[0].split("");
const [a, b] = inputs[1].split(" ").map((_) => Number(_) - 1);

const tmp = sl[a];
sl[a] = sl[b];
sl[b] = tmp;
console.log(sl.join(""));
