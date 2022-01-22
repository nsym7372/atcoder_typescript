import * as fs from "fs";
import { exit } from "process";
const inputs = fs.readFileSync("/dev/stdin", "utf8").split("\n");

const sheet = inputs.slice(0, 3).map((_) => _.split(" ").map(Number));
const bingo = [...Array(3)].map((_) => Array(3).fill(false));
const n = Number(inputs[3]);

const getIndex = (input: number): [boolean, number, number] => {
    for (let r = 0; r < 3; r++) {
        for (let c = 0; c < 3; c++) {
            if (sheet[r][c] === input) {
                return [true, r, c];
            }
        }
    }
    return [false, -1, -1];
};

for (let i = 4; i < 4 + n; i++) {
    const index = getIndex(Number(inputs[i]));
    if (index[0]) {
        bingo[index[1]][index[2]] = true;
    }
}

// 横
for (let row of bingo) {
    if (row.every((_) => _)) {
        console.log("Yes");
        exit();
    }
}

// 縦
for (let c = 0; c < 3; c++) {
    let result = true;
    for (let r = 0; r < 3; r++) {
        if (bingo[r][c] === false) {
            result = false;
        }
    }

    if (result) {
        console.log("Yes");
        exit();
    }
}

// 斜め
const pattern = [
    [
        [0, 0],
        [1, 1],
        [2, 2],
    ],
    [
        [0, 2],
        [1, 1],
        [2, 0],
    ],
];

for (let p of pattern) {
    let result = true;
    for (let i of p) {
        if (bingo[i[0]][i[1]] === false) {
            result = false;
        }
    }

    if (result) {
        console.log("Yes");
        exit();
    }
}
console.log("No");
