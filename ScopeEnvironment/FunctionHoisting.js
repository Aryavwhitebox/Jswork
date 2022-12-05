/* //here we are hoisting the function i.e
//calling the function before declaring
sum(5,10)
sum(3,9)

function sum(num1,num2){
    console.log(num1+num2);
} */

/* //now hear we are assigning the function to sum
//and accessing it and it will work and give us o/p

var sum=function sum(num1,num2){
    console.log(num1+num2);  //17
}

sum(9,8) */


//now we will try hoisting of a variable inside the function
var sum=function(num1,num2)
{
    total =num1+num2
    var total
    console.log(total);  //16
    //here we are accessing the variable first and 
    //declaring it later as it is hoisted and we will be
    //able to access it
}
sum(10,6)