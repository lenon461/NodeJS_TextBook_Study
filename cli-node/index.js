#!/usr/bin/env node

const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

rl.question('예제가 재미있습니까? (y/n) ', (answer) => {
    if(answer === 'y'){
        console.log('ZZZ');

console.log('Hello CLI', process.argv);

