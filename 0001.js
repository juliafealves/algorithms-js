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
    const tests = parseInt(readLine());

    for (let t = 0; t < tests; t++) {
        const size = parseInt(readLine());
        const string = readLine();
        const questions = {};
        let isRight = true;

        for (let l = 0; l < size; l++) {
            let letter = string[l];

            if(questions.hasOwnProperty(letter)) {
                if(l - questions[letter] > 1) {
                    print("NO");
                    isRight = false;
                    break;
                }
                questions[letter] = l;
            } else {
                questions[letter] = l;
            }
        }

        if(isRight) {
            print("YES");
        }
    }
}