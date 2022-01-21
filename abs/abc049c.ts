import { match } from "assert";
import * as fs from "fs";
import { exit } from "process";
const s_reverse = (word: string) => {
    return word.split("").reverse().join("");
};

let s = s_reverse(fs.readFileSync("/dev/stdin", "utf8").trim());
const r_words = [];
for (let word of ["dream", "dreamer", "erase", "eraser"]) {
    r_words.push(s_reverse(word));
}

while (s !== "") {
    let matched = false;
    for (let r of r_words) {
        if (s.startsWith(r)) {
            s = s.slice(r.length);
            matched = true;
            break;
        }
    }

    if (matched === false) {
        console.log("NO");
        exit();
    }
}
console.log("YES");
