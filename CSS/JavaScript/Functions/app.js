function capitalize(argument) {
    
let strNoSpace = argument.trim();

let firstLetter = (strNoSpace.slice(0, 1)).toUpperCase();
let noFirst = strNoSpace.slice(1);
let combine = firstLetter + noFirst;
    return combine;
    
}

capitalize("eggplant");