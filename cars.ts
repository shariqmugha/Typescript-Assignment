import { features } from "process";

function storeCarInfo(manufacture: string, modelName: string, ...extraOption: {[key: string]: any} [] ): object{
    const  CarInfo ={
        manufacture,
        modelName,
        ...Object.assign({}, ...extraOption)
    }

    return CarInfo;
};

let answer = storeCarInfo("Honda","civic",{Color:'black'},{features: ['navigition','power window']})

console.log(answer);