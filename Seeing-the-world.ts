
// store thelocation in a array. make sure the array is not in alphabetical oder.
let places :string[] = ['italy','germany','agra','eifel tower','times square'];

//print your array in its original oder.
console.log('Orignal '+ places);

//print your array in alphabetical order in alphabetical order without modifying the actual list.
console.log ('copy ' + [...places].sort());

//show that your array is still in its original order by printing it.
console.log('Orignal '+ places);

//print your array in reverse alphabetical order without changing the order of the original list.
console.log('copy ' + [...places].sort().reverse());

//show that your array is still in its original order by printing it again.
console.log('Orignal '+ places);

//revers tha order pf your list . print the array to show that its order has changed.
console.log('Orignal '+ places.reverse());

//revers the order of your list again. print the list to show it's back to its original order.
console.log('Orignal '+ places.reverse());

//stort your array so it's stored in alphabetical order. print the array to show that its order has been changed .
console.log('Orignal '+ places.sort());

//stort to changr you array so its stored in reverse alphabetical order. print the list to show that its order has changed.
console.log('Orignal '+ places.sort().reverse());
