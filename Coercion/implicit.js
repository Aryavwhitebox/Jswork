let s='hello'
let s1=5
s1+=s
console.log(s1);  //5hello
console.log(typeof(s1)); //here the javascript itself convert
//s1 which is int to a string

if('hey'){
    console.log('true');
}
else{
    console.log('false');
} //true
//all the strings, int all the data types or values
//will be considered as true by js implicitly

if(''){
    console.log('true');
}
else{
    console.log('false');
}

//apart from empty value, 0 null and undefned all other values 
//in the parameter of if treats as true
