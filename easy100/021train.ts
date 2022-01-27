import * as fs from "fs";
let n = Number(fs.readFileSync("/dev/stdin", "utf8"));

// 篩
const getPrimes = (limit: number): number[] => {
    const primes = [];

    const is_prime = [...Array(limit)].map((_) => true);
    is_prime[0] = false;
    is_prime[1] = false;

    for (let i = 0; i < limit; i++) {
        if (is_prime[i] === false) {
            continue;
        }

        primes.push(i);
        for (let j = 0; j < limit; j = j + i) {
            is_prime[j] = false;
        }
    }
    return primes;
};

const minPrime = getPrimes(10 ** 6).filter((v) => v >= n)[0];
console.log(minPrime);
