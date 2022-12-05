if(5===5){
    console.log(true);
}
else{
    console.log(false);
}

if(5>10 && 10>5){
    //even if one condition is false
    //we will get false for and and
    console.log(true);
}
else{
    console.log(false);
}

if(9>5 || 10>11){
    console.log(true);
}
else{
    console.log(false);
}
//ternary operator
//here it takes two different conditions 
//for ? and :
//here if it is true ? got executed
//and if it is false : got executed

2<3 ?console.log(true) : console.log(false);