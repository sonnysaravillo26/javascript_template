// TYPES OF FUNCTIONS

//Named function 
function myFunctionA(){
    console.log('helloworld');
}
myFunctionA(); // Prints: helloworld


//Named function with Arguments
function myFunctionB(parameter1){
    console.log(parameter1);
}
myFunctionB(10); // Prints: 10


//Anonymous function
const myFunctionC = function(){
    console.log('hellowthere');
}
myFunctionC(); // Prints: hellothere


//Anonymous function with arguments
const myFunctionD = function(parameter1){
    console.log(parameter1);
}
myFunctionD(20); // Prints: 20


//Arrow function with a single argument
const myFunctionE = parameter1 =>{
    console.log(parameter1);
}
myFunctionE(30); // Prints: 30


//Arrow function with two arguments
const myFunctionF = (parameter1, parameter2) =>{
    console.log(parameter1 + parameter2);
}
myFunctionF(2, 2) // Prints: 4


//Concise arrow function with arguments
const mySum = (a, b) => a + b;
console.log(mySum(2, 10)); // Prints: 12
