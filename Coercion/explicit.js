let num=15
//to string
console.log(typeof(String(num)));  //string
console.log(typeof(String(true))); //string
console.log(typeof(String(-98.10))); //string
console.log(typeof(String(null)));  //string
console.log(typeof(String(undefined))) ;  //string



//to number

console.log(typeof(Number('sameer'),typeof(Number('sameer'))));  //number
console.log(Number(true),typeof(Number(true))); //number
console.log(Number(true),typeof(Number(true))); //number
console.log(typeof(Number('hello'))); //number


//to boolean

console.log(Boolean(1),typeof(Boolean(1)));//true boolean
console.log(Boolean(2),typeof(Boolean(2))); //true boolean
console.log(Boolean(),typeof(Boolean()));//false boolean
console.log(Boolean(''),typeof(Boolean(''))); //false  boolean
console.log(Boolean(null),typeof(Boolean(null))); //false