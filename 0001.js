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

function readLineNumber(parse = parseInt) {
    return parse(readLine());
}

function main() {
    // 1 <= t <= 1000
    const tests = readLineNumber();

    for (let t = 0; t < tests; t++) {
        // 1 <= n <= 50
        const days = readLineNumber();
        const string = readLine();
        const questions = {};
        let isRight = true;

        for (let d = 0; d < days; d++) {
            let letter = string[d];

            if(questions.hasOwnProperty(letter)) {
                if(d - questions[letter] > 1) {
                    print("NO");
                    isRight = false;
                    break;
                }
                questions[letter] = d;
            } else {
                questions[letter] = d;
            }
        }

        if(isRight) {
            print("YES");
        }
    }
}