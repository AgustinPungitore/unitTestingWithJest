// importar la función sum del archivo app.js
const {
    sum,
    fromEuroToDollar,
    fromDollarToYen,
    fromYenToPound
} = require('./app.js');

// comienza tu primera prueba
test('adds 14 + 9 to equal 23', () => {
    //dentro de la prueba llamamos a nuestra función sum con 2 números
    let total = sum(14, 9);

    // esperamos que la suma de esos 2 números sea 23
    expect(total).toBe(23);
});

test("One euro should be 1.206 dollars", function() {
    // importo la funcion desde app.js


    // hago mi comparacion (la prueba)
    expect(fromEuroToDollar(3.5)).toBe(4.2); //1 euro son 1.2 dolares, entonces 3.5 euros deberian ser = (3.5 * 1.2)
})

test("1.2 dollar should be 127.9 yen", function() {


    expect(fromDollarToYen(2.4)).toBe(255.8); // 1.2 dolares son 127.9, entonces 2.4 dolares deberian ser = (2.4 * 127.9)
})

test("0.8 pounds should be 127.9 yen ", function() {

    // hago mi comparacion (la prueba)
    expect(fromYenToPound(255.8)).toBe(1.6); // 0.8 pounds son 127.9 yens, entonces 255.8 yens deberian ser = ( * 127.9)
})