"use strict";
process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', input => inputString += input);
process.stdin.on('end', () => {
    inputString = inputString.trim().split('\n').map(string => string.trim());
    main();
});

function print(message) {
    console.log(message);
}

function readLine() {
    return inputString[currentLine++];
}

function readElements(parse = parseInt, separator = ' ') {
    return readLine().split(separator).map(input => parse ? parse(input) : input);
}

function main() {
    let zeros = 0;
    let ones = 0;
    const [_, queries] = readElements();
    const list = readLine().split(' ').map(input => {
        input = parseInt(input);
        if (input === 1) {
            ones++;
        } else {
            zeros++;
        }

        return input;
    });

    for (let q = 0; q < queries; q++) {
        const [type, value] = readElements();
        let index = value - 1;

        if(type === 2) {
            print((value <= ones) ? "1" : "0");
        } else {
            list[index] = 1 - list[index];
            if (list[index] === 1) {
                ones++;
                zeros--;
            } else{
                zeros++;
                ones--;
            }
        }
    }
}