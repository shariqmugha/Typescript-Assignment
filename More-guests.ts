let Guest_list :string[] =['imran khan','Nawaz sharif','asif ali zardari'];

// for(let i=0; i<Guest_list.length; i++){
   //  console.log('Dear Mr. ' + Guest_list[i] + ',\n\nIt is our pleasure to invite you in our party.\n\nThank you!')
// }

let absent_guest :string = 'imran khan' ;

let new_guest :string = 'kamran tessori' ;

Guest_list[0] = new_guest ;


for(let i=0; i<Guest_list.length; i++){
    console.log('Dear Mr.' + Guest_list[i]+',\n\nIt is our pleasure to invite you in our party.\n\nThank you!\n\n')
}

console.log('Mr. ${absent_guest} is not coming to the party.');

console.log('Good News! We find Big Table so we are vinviting 3 more guest.')

Guest_list.unshift('sir zia khan') ;
Guest_list.splice(2 ,0 , 'Maryam nawaz');
Guest_list.push('bilawal bhutto zardari');

for(let i=0; i<Guest_list.length; i++){

    console.log('Dear Mr.' + Guest_list[i]+',\n\nIt is our pleasure to invite you in our party.\n\nThank you!\n\n')
}