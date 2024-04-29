// write a series of conditional tests.

//creating car variablr
let car :string = 'subaru';

// Test No1
console.log("Is car == 'subaru'? I predict true.");
console.log(car == 'subaru')

// = hum kisi value ko set kar raha hain.
// == hum kisi value ko check kar raha hain .
// ===hum kisi value ko uski datatypes ke sath check kar raha hain.
// !=  not Equal 
//2 === 2 iska result aaha ga true
// 2 != 2 iska result aahaga fasle

// Test No 2
console.log("Is car === 'subaru'? I predict true.");
console.log(car === 'subaru')

// Test No 3
console.log("Is car != 'honda'? I predict true.");
console.log(car != 'honda')

// Test No 4
console.log("Is car !== 'ford'? I predict true.");
console.log(car !== 'ford')

// Test No 5
console.log("Is car.upper case == 'SUBARU'? I predict true.");
console.log(car.toUpperCase() == 'SUBARU')

// Test No 6
console.log("Is car == 'SUBARU'? I predict false.");
console.log(car == 'SUBARU')

// Test No 7
console.log("Is car === 'SUBARU'? I predict false.");
console.log(car === 'SUBARU')

// Test No 8
console.log("Is car ===  'Train'? I predict false.");
console.log(car === 'Train')

// Test No 9
console.log("Is car ===  'Bus'? I predict false.");
console.log(car === 'Bus')

// Test No 10
console.log("Is car ===  'cycle'? I predict false.");
console.log(car === 'cycle')