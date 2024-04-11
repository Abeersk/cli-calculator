#! /usr/bin/env node
import inquirer from "inquirer"

const answer = await inquirer.prompt([

   {  name :"firstnumber",
      type :"number",
      message:"Enter first number"
      

   },
   {
    name: "secondnumber", type: "number", message: "Enter second number" 
   },
   {
 
     name: "operator",
     message:"Select one of the following operator",
     type: "list",
     choices: ["Addition","Subtraction","Multiplication","Division"] 
     
    }

   


]);


if(answer.operator === "Addition"){
    console.log(answer.firstnumber + answer.secondnumber );
    
}else if (answer.operator === "Subtraction"){
    console.log(answer.firstnumber - answer.secondnumber);
    
}else if (answer.operator === "Multiplication"){
    console.log(answer.firstnumber * answer.secondnumber);
    
}else if (answer.operator === "Division"){
    console.log(answer.firstnumber / answer.secondnumber);
    
}else{console.log("Please select the following operator");
}




