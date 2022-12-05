//the mechanism where variables and function can be used
// before declaring the is called hoisting in js

num1=10
console.log(num1);
var num1
//CODE EXECUTION
//the variables and function declarations are moved to the 
//top of their scope before code execution
//js has 2 steps in executing a particular script
//step1: creation
//step2: execution

//here we have the concept of hoisting where in the js
//hoisting mechanism will push the declaration variables to the top
//and will be undefined and then declaration happens
 console.log(s1) //undefined
s1='sameer'
console.log(s1);
var s1
