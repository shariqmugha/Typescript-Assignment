let Guest_list :string[] =['imran khan','Nawaz sharif','asif ali zardari'];
// for(let i=0; i<Guest_list.length; i++){
   //  console.log('Dear Mr. ' + Guest_list[i] + ',\n\nIt is our pleasure to invite you in our party.\n\nThank you!')
// }

let absent_guest :string = 'imran khan' ;
let new_guest :string = 'kamran tessori' ;
Guest_list[0] = new_guest ;

//for(let i=0; i<Guest_list.length; i++){
   //console.log('Dear Mr.' + Guest_list[i]+',\n\nIt is our pleasure to invite you in our party.\n\nThank you!\n\n')
//}

// console.log('Mr. ${absent_guest} is not coming to the party.');
// console.log('Good News! We find Big Table so we are vinviting 3 more guest.')

// array me 3 guest add kiya hain.
Guest_list.unshift('sir zia khan') ;
Guest_list.splice(2 ,0 , 'Maryam nawaz');
Guest_list.push('bilawal bhutto zardari');

// yahan per meny 6 guest ke array ko print kraya hain.
// for(let i=0; i<Guest_list.length; i++){
    // console.log('Dear Mr.' + Guest_list[i]+',\n\nIt is our pleasure to invite you in our party.\n\nThank you!\n\n')
// }

// sorry message to guest for not inviting.
// console.log('\nsorry we can not arrange big table, only two peoples will be invited.');

//yaha per mene guest remove kiye hain
while(Guest_list.length > 2){
  let remove_Guest = Guest_list.pop();
  //console.log(`sorry Mr.${remove_Guest}, you are note invited for Dinner.`);
}

//Hamare bacha huwe 2 invited guest
// for(let i=0; i<Guest_list.length; i++){
    // console.log('Dear Mr.' + Guest_list[i]+',\n\nYour are still invited.\n\nThank you!\n\n')
// }

// Mene sare guest array  se remove kar diye.
Guest_list.splice(0, 2);
console.log(Guest_list);

//Exercise 19

//printe a message indicating the number of prople you are inviting to dinner.

console.log(`total number of guest are ${Guest_list.length}`);