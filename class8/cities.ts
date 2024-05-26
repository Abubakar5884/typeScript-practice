import inquirer from "inquirer"

let cities = ["hyderabad", "karachi", "islamabad", "lahore", "nawabshah", "quetta", "peshawer", "larkana", "skardu", "rawalpindi", "multan"]

for (let i = "islamabad";;){
let answer = await inquirer.prompt([{
    name:"city",
    type:"input",
    message:"what is the cleanest city in pakistan"
}])
if (answer.city === "islamabad"){
        console.log(`${answer.city} is the cleanest city.`)
        break;
    } else (console.log("You are wrong"))
} 



// FIRST EVER VERSION OF THIS PROGRAM

// import inquirer from "inquirer"
// let cities = ["hyderabad", "karachi", "islamabad", "lahore", "nawabshah", "quetta", "peshawer", "larkana", "skardu", "rawalpindi", "multan"]

// for (let i = 0; i <= 10; i++){
// let answer = await inquirer.prompt([{
//     name:"city",
//     type:"input",
//     message:"what is the cleanest city in pakistan"
// }])
// if (answer.city === "islamabad")
//     if(answer.city === "islamabad"){
//         console.log(`${answer.city} is the cleanest city.`)
//     } else {
//         break;
//     } else (console.log("You are wrong"))

// }