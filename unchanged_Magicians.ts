let magician: string[] = ['Harry potter','Hermione Granger','Ron Wesly','Albus Dumbledore'];

function copyArray(arr:string[]){
   return [...arr]
}


function make_great (magicianArry:string[]){
    for(let i=0; i<magicianArry.length; i++){
        magicianArry[i] = 'the Great ' + magicianArry[i]
    }
}

function show_magicians(magicians: string[]){

    magicians.forEach(element => {
        console.log(element);
    });
}

const copymagiciansArray = copyArray(magician)


make_great(copymagiciansArray);

console.log('\n\nThis is my orignal array:');
show_magicians(magician);

console.log('\n\nThis is my modfied copy of the array:');
show_magicians(copymagiciansArray);