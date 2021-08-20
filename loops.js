
//For Loop (inside the arrow function syntax)
myFunctionA = () => { 
    console.log('===FOR LOOP===');
    for (let i=0; i<5; i++){
        console.log(i);
    } 
}
myFunctionA(); //Prints: 0 1 2 3 4


//Do-While Loop
myFunctionB = () => {
    console.log('===DO WHILE LOOP===');
    let iterator = 0;
    do {
        iterator++;
        console.log(iterator)
    }while(iterator<4);
}
myFunctionB(); //Prints: 1 2 3 4


//While Loop
myFunctionC = () => {
    console.log('===WHILE LOOP===');
    let iterator = 0;
    while (iterator<4){
        iterator++;
        console.log(iterator);
    }
}
myFunctionC(); //Prints: 1 2 3 4


//For..in Loop (genting index and strings 'in' mean index)
myFunctionE = () => {
    console.log('===FOR..in LOOP===');
    const arr = [3, 5, 7];
    arr.foo = 'hello';
    for(let i in arr){
        console.log(i);
    }
}
myFunctionE(); // Prints: "0", "1", "2", "foo"


//For..of Loop (of getting the array values)
myFunctionF = () => {
    console.log('===FOR..of LOOP===');
    const arr = [3, 5, 7];
    arr.foo = 'hello';
    for (let i of arr){
        console.log(i);
    }
}
myFunctionF(); // Prints: 3, 5, 7