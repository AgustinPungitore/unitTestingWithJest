// declaramos una funcion con el mismo nombre "formEuroToDollar"
const fromEuroToDollar = function(valueInEuro) {
    // convertimos el valor a dolares
    let valueInDollar = valueInEuro * 1.2;
    // retornamos el valor
    return valueInDollar;
}

// declaramos una funcion con el mismo nombre "formEuroToDollar"
const fromDollarToYen = function(valueInDollar) {
    // convertimos el valor a dolares
    let valueInYen = valueInDollar * 127.9 / 1.2;
    // retornamos el valor
    return parseFloat(valueInYen.toFixed(1));
}

// declaramos una funcion con el mismo nombre "formEuroToDollar"
const fromYenToPound = function(valueInYen) {
    // convertimos el valor a dolares
    let valueInPound = valueInYen * 0.8 / 127.9;
    // retornamos el valor
    return parseFloat(valueInPound.toFixed(1));
}



// // esta es mi funcion que suma dos numeros
const sum = (a, b) => {
    return a + b
}

// // solo un registro en consola para nosotros.
console.log(sum(7, 3))

// // exporta la función para usarla en otros archivos 
// // (similar a la palabra clave `export` cuando se usa webpack)
module.exports = {
    sum,
    fromEuroToDollar,
    fromDollarToYen,
    fromYenToPound
};




// one euro is:
let oneEuroIs = {
    "JPY": 127.9, // japan yen
    "USD": 1.2, // us dollar
    "GBP": 0.8, // british pound
}

// 1 EUR (Euro) = 1.2 USD (US Dollar)