"use strict";
let outerVar = "outerVar";
console.log("outerVar in outer block before if: " + outerVar);

if(true){
    console.log("outerVar in if block: " + outerVar);
    outerVar = "outerVar in if"
    var ifVar = "ifVar";
    console.log("ifVar in if block: " + ifVar);
}

console.log("outerVar in outer block after if: " + outerVar);
console.log("ifVar in outer block: " + ifVar);

function tryVar() {
    console.log("outerVar in function: " + outerVar);
    outerVar = "outerVar in function";

    var functionVar = "functionVar";
    console.log("functionVar in function: " + functionVar);
}
tryVar();
console.log("outerVar in outer block after function: " + outerVar);
console.log("functionVar in outer block: " + functionVar);