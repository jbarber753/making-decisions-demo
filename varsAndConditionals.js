/*
    In this file, we'll be using variables, conditionals,
    and loops to play out a fight between Jon Snow and
    Jamie Lannister.
*/ 

let jonSnowAttack = 25;
let jaimeLannisterAttack = 35;

if (jonSnowAttack > jaimeLannisterAttack){
    console.log("Jon's attack is greater than Jaime's")
}
else if (jaimeLannisterAttack > jonSnowAttack){
    console.log("Jaime's attack is greater than Jon's")
}
else{
    console.log("It's a tie")
}

let jonSnowHealth = 100;
let jonSnowDefense = 0;