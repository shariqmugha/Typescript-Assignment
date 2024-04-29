
function makesandwiches (item: string[]){
    console.log('\nmaking your sandwich with:');

 item.forEach(element => console.log("- " + element));
    console.log('Enjoy your sandwich !\n');
}


makesandwiches(['Hma','cheese','lettuce']);
makesandwiches(['Turkey','Bacon']);
makesandwiches(['peanut better','jelly']);