import { generateKeySync } from "crypto";
import * as fs from "fs";
const [n, m, x, ...al] = fs
    .readFileSync("/dev/stdin", "utf8")
    .trim()
    .split(/\s/)
    .map(Number);

const gates = [...Array(n + 1)].map((v, i) => al.includes(i));

const toZero = gates.slice(0, x).filter((_) => _).length;
const toN = gates.slice(x + 1).filter((_) => _).length;
console.log(Math.min(toZero, toN));
