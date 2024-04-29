
// write a program that creates objects containing these items.

//Datatype of person object
interface person {
    age :number,
    name : string,
    natinolity : string,
    student : boolean,
}

//person object
let person :person ={

    age : 20 ,
    name : 'shariq' ,
    natinolity : 'pakistan',
    student : true ,
}

//print person
console.log(person);

//Datatypes of car object
interface car {
    maker :string
    color : string
    automatic :boolean
}
//car object 
let car = {
    makre : 'toyota',
    color : 'black',
    automatic : true
}

//print car
console.log(car);
