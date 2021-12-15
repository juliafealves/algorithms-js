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

function main() {
    const size = parseInt(readLine());

    if(size > 2) {
        for (let n = 0; n < size; n++) {
            if(n >= 2) {
                print(1);
            } else {
                print(2);
            }
        }
    } else {
        print(-1);
    }
}