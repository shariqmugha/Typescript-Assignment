import { describe } from "node:test";

function describe_city(city: string, country:string = 'Default Country.'){
    console.log(`${city} is in ${country}`);
}

describe_city('karachi','pakistan');
describe_city('Tokyo','japan');
describe_city('paris');