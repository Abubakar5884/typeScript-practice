import inquirer from "inquirer";
import div from "./div.js";
import mult from "./mult.js";
import add from "./add.js";
import sub from "./sub.js";
async function name() {
    const answer = await inquirer.prompt([
        {
            type: "input",
            name: "n1",
            message: "Enter your first number",
        },
        {
            type: "input",
            name: "n2",
            message: "Enter your second number",
        },
        {
            type: "list",
            name: "operators",
            message: "Choose Your Operator",
            choices: [
                { name: "Division", value: div },
                { name: "Multiplication", value: mult },
                { name: "Addition", value: add },
                { name: "Subtraction", value: sub },
            ]
        }
    ]);
    console.log(`The answer is ${answer.operators(answer.n1, answer.n2)}`);
}
name();
