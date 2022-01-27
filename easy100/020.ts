import * as fs from "fs";
const n = Number(fs.readFileSync("/dev/stdin", "utf8").trim());

const even = (v: number) => v / 2;
const odd = (v: number) => 3 * v + 1;

const buf = [n];
while (true) {
    const target = buf[buf.length - 1];
    let value = 0;
    if (target % 2 === 0) {
        value = even(target);
    } else {
        value = odd(target);
    }

    if (buf.includes(value)) {
        console.log(buf.length + 1);
        break;
    } else {
        buf.push(value);
    }
}
