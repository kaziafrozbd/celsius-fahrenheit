// celsius to fahrenheit


// function celsiusToFahrenheit(celsius){
//     let fahrenheit = celsius * 9/5 + 32;
//     return fahrenheit;

// }
// let myCelsius = 5;
// let myFahrenheit = celsiusToFahrenheit(myCelsius);
// console.log(myFahrenheit);

// fahrenheit to celsius 

function fahrenheitToCelsius(fahrenheit){
    let newCelsius = (fahrenheit - 32) * 5 / 9;
    return newCelsius;
}

let myFahrenheitTemp = 1;
let myCelsiusTemp = fahrenheitToCelsius(myFahrenheitTemp);
console.log(myCelsiusTemp);