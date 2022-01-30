//RE

import * as fs from "fs";
import { exit } from "process";
const s = fs.readFileSync("/dev/stdin", "utf8").trim();
const sl = s.split("");

const printResult = (ary: string[]) => {
    const asc = ary.join("");
    const desc = [...ary].reverse().join("");

    if (asc === desc) {
        console.log("Yes");
        exit();
    }
};

//すでに回文なら終了
printResult(sl);

let suf = 0;
for (let i = sl.length - 1; i > 0; i--) {
    if (sl[i] === "a") {
        suf++;
    } else {
        break;
    }
}

let pre = 0;
for (let j = 0; j <= sl.length; j++) {
    if (sl[j] === "a") {
        pre++;
    } else {
        break;
    }
}

if (pre > suf) {
    console.log("No");
    exit();
}

const as = [...Array(suf - pre)].map((_) => "a");
sl.unshift(...as);
const asc = sl.join("");
const desc = sl.reverse().join("");
console.log(asc === desc ? "Yes" : "No");
