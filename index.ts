#! /usr/bin/env node

import inquirer from "inquirer"
import chalk from "chalk"



//2- list prompt
console.log(chalk.bgBlue("====================== WELCOME TO THE SIMPLE CALCULATOR APP =============== "));

while (true) {

    const myCalc = await inquirer.prompt([
        {
            type: 'list',
            name: 'operation',
            message: 'What operation you want to perform?',
            choices: ['add', 'subtract', 'multiply', 'division', 'modulos']
            
        },
        {
            type: 'number',
            name: 'num1',
            message: 'Enter first number',
        },
        {
            type: 'number',
            name: 'num2',
            message: 'Enter other number',
        }
    ]);

    if (myCalc.operation === 'add') {
        console.log(chalk.green.bold(`The sum of your numbers is ${myCalc.num1 + myCalc.num2}`));
        const { playOrExit } = await inquirer.prompt({
            type: 'list',
            name: 'playOrExit',
            message: 'Do you want to play again or exit?',
            choices: ['Play again', 'Exit']
        });

        if (playOrExit === 'Exit') {
            console.log(chalk.magenta(" **************************************************************** "));
            console.log(chalk.magentaBright(" ================ THANKS FOR USING THE CALCULATOR APP =========== "));
            console.log(chalk.magenta(" **************************************************************** "));
            break;
        }
    } else if (myCalc.operation === 'subtract') {
        console.log(chalk.red.bold(`The difference of your numbers is ${myCalc.num1 - myCalc.num2}`));
        const { playOrExit } = await inquirer.prompt({
            type: 'list',
            name: 'playOrExit',
            message: 'Do you want to play again or exit?',
            choices: ['Play again', 'Exit']
        });

        if (playOrExit === 'Exit') {
            console.log(chalk.magenta(" **************************************************************** "));
            console.log(chalk.magentaBright(" ================ THANKS FOR USING THE CALCULATOR APP =========== "));
            console.log(chalk.magenta(" **************************************************************** "));
            break;
        }

    } else if (myCalc.operation === 'multiply') {
        console.log(chalk.gray(`The product of your numbers is ${myCalc.num1 * myCalc.num2}`));
        const { playOrExit } = await inquirer.prompt({
            type: 'list',
            name: 'playOrExit',
            message: 'Do you want to play again or exit?',
            choices: ['Play again', 'Exit']
        });

        if (playOrExit === 'Exit') {
            console.log(chalk.magenta(" **************************************************************** "));
            console.log(chalk.magentaBright(" ================ THANKS FOR USING THE CALCULATOR APP =========== "));
            console.log(chalk.magenta(" **************************************************************** "));
            break;
        }

    } else if (myCalc.operation === 'division') {
        console.log(chalk.bgBlueBright(`The quotient of ${myCalc.num1} and ${myCalc.num2} is ${myCalc.num1 / myCalc.num2}`));
        const { playOrExit } = await inquirer.prompt({
            type: 'list',
            name: 'playOrExit',
            message: 'Do you want to play again or exit?',
            choices: ['Play again', 'Exit']
        });

        if (playOrExit === 'Exit') {
            console.log(chalk.magenta(" **************************************************************** "));
            console.log(chalk.magentaBright(" ================ THANKS FOR USING THE CALCULATOR APP =========== "));
            console.log(chalk.magenta(" **************************************************************** "));
            break;
        }

    } else if (myCalc.operation === 'modulos') {
        console.log(chalk.bgBlackBright(`The remainder of ${myCalc.num1} and ${myCalc.num2} is ${myCalc.num1 % myCalc.num2}`));
        const { playOrExit } = await inquirer.prompt({
            type: 'list',
            name: 'playOrExit',
            message: 'Do you want to play again or exit?',
            choices: ['Play again', 'Exit']
        });

        if (playOrExit === 'Exit') {
                   console.log(chalk.magenta(" **************************************************************** "));
                    console.log(chalk.magentaBright (" ================ THANKS FOR USING THE CALCULATOR APP =========== "));
                    console.log(chalk.magenta(" **************************************************************** "));
            break;
        }
    } else {
        console.log(chalk.bgRedBright(" =========== INVALID NUMBER OR OPERATION PLEASE TRY AGAIN!!! ==========="));
    }

};

