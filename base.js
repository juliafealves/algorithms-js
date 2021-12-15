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

}