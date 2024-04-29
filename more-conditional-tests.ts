import test from "node:test";
// Equality and Inequality Test 1
console.log("Equlity test with strings: ", "Apple" ==="Apple");
// Equality and Inequality Test 2 
console.log("Equlity test with strings: ", ("Apple" as string) != "orange");


// Tests using the lower case function
console.log("lower caes function :", "Hello" . toLowerCase()==="hello")


// Numerical tests involving equality  
console.log("Equlity test with Number: ", 26 === 26);
// Numerical tests involving inquality
console.log("Inequality test with Number: ", (26 as number) != 35);

//greater than test  
console.log("Greater than test: ", 10 > 5);

// less than test
console.log("Less than test: ", 5 < 10);

// , gerater than or equal to// Numerical tests involving equality and inquality
console.log( "gerater than and equal to test:", 10 >= 10)
//less than or equal to
console.log("less than or equal to test;", 5 <=10)

//Tests using "and" operator
console.log("Ans operator test: ", 5===5 && 10 > 5);              
//Tests using "or" operator
console.log("Ans operator test: ", 5===5 || false);     

//Test whether an item is in a array 
const fruits : string[] = ['Apple','Mango','Banana'];
console.log('Test "Apple" in the array: ',fruits.includes("Apple"));

//Test whether an item is not in a array 
console.log('Testing "Amrood" is not in array: ' ,!fruits.includes('Amrood'))