import { toASCII } from "punycode";

let current_user: string[] = ['shaRiq','saqIb','iqbAl','baSit','biLal'];

let new_user: string[] = ['shariq','moiz','tanzeel','ahmed','iqbal'];

new_user.forEach(newusername => {
    let lowercase: string = newusername.toLowerCase();
    if(current_user.map(c_user => c_user.toLowerCase()).includes(lowercase)){
        console.log(`The username ${newusername} is not available. please write a diffrent username`);
    }
    else{
        console.log(`The username ${newusername} is available.`);
    }
})