#! /usr/bin/env node
import inquirer from "inquirer";
let answers = await inquirer.prompt([
    {
        name: "Sentence",
        type: "input",
        message: "Enter your sentence to count the words:"
    }
]);
let words = answers.Sentence.trim().split(" ");
console.log(words);
console.log(`There are ${words.length} words in your sentence.`);
