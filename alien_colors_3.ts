let alienColors: string = "green";

//version 1 of the program
if(alienColors === "green"){
    console.log("version 1: player earned 5 points.");
}
else if (alienColors === "yellow"){
    console.log("player earned 10 points.");
}
else if(alienColors === "red"){
    console.log("player earned 15 points.");
}
else{
    console.log("player select right color.");
}

//version 2 of the program
alienColors = "yellow";
if(alienColors === "green"){
    console.log("player earned 5 points.");
}
else if (alienColors === "yellow"){
    console.log("version 2: player earned 10 points.");
}
else if(alienColors === "red"){
    console.log("player earned 15 points.");
}
else{
    console.log("player select right color.");
}

//version 3 of the program
alienColors = "red";
if(alienColors === "green"){
    console.log("player earned 5 points.");
}
else if (alienColors === "yellow"){
    console.log("player earned 10 points.");
}
else if(alienColors === "red"){
    console.log("version 3: player earned 15 points.");
}
else{
    console.log("player select right color.");
}