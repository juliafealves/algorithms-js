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

function readline() {
    return inputString[currentLine++];
}

function main() {
    const quantidadeTestes = parseInt(readline());

    for (let i = 0; i < quantidadeTestes; i++) {
        const tamanhoString = parseInt(readline());
        const string = readline();
        const questoes = {};
        let fezCerto = true;

        for (let l = 0; l < tamanhoString; l++) {
            let letra = string[l];

            if(questoes.hasOwnProperty(letra)) {
                if(l - questoes[letra] > 1) {
                    console.log("NO");
                    fezCerto = false;
                    break;
                }
                questoes[letra] = l;
            } else {
                questoes[letra] = l;
            }
        }

        if(fezCerto) {
            console.log("YES");
        }
    }
}