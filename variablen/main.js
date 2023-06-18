"use strict";

function main(){

    let product = "Mehl";

    switch(product){
        
        case "Mehl":
            console.log("Mehl kostet 9 Euro")
        break;

        case "Apfel":
        case "Birne":
            console.log("Früchte kosten 1 Euro")
        default:
            console.log("Falsche Eingabe")
    }

 
}


