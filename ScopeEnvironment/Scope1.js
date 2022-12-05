//js has two scopes one has global scope
//and another local scope
//global scope variables can be accessed anywhere
//local scoped variables can be accessed only in function

/*     let num1=10
    function Scope1(num2){
        console.log(num1+num2); //30
    }
    Scope1(20); */

/*     let num1=10
    //we are able to access num1 both inside and outside
    //the function as it is a global variable
    function Scope1(num2){
        console.log(num1); //10
        console.log(num1+num2); //30
    }
    console.log(num1); //10
    Scope1(20);  */

/*     let num1=10
 console.log(num1);
 console.log(num2);
 //we will get reference number here
 //as we cannot access local variable outside its block scope
    function Scope1(num2){
        console.log(num1); 
        console.log(num1+num2); 
    console.log(num1); }
    Scope1(20); 
 */
    /* let num1=10
    console.log(num1);
  
       function Scope1(num2){
         let total=num1+num2
         console.log(total); //30 //60
         //we will be able to access total now
         //as total has the variable num2 which is
         //declared locally
    }
       Scope1(20); 
       Scope1(50)
 */
       let num1=10
       console.log(num1);
     
          function Scope1(num2){
            let total;
            console.log(total);  //undefined //undefined
//here in the local environment first we are creating a total
//but not assigning any value to the total
//later we are assigning num1 and num2 sum
//that is the reason we are getting undefined then 30 and
//again undefined and 60

             total=num1+num2
            console.log(total); //30 //60
   
       }
          Scope1(20); 
          Scope1(50);