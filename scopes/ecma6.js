"use strict";
let outerLet = "outerLet";
console.log("outerLet in outer block before if: " + outerLet);

if(true){
    console.log("outerLet in if block: " + outerLet);
    outerLet = "outerLet in if";
    let ifLet = "ifLet";
    console.log("ifLet in if block: " + ifLet);
}

console.log("outerLet in outer block after if: " + outerLet);
console.log("ifLet in outer block: " + ifLet);

function tryVar() {
    console.log("outerLet in function: " + outerLet);
    outerLet = "outerLet in function";

    let functionLet = "functionLet";
    console.log("functionLet in function: " + functionLet);
}
tryVar();
console.log("outerVar in outer block after function: " + outerLet);
console.log("functionVar in outer block: " + functionLet);