/*Primera parte:
Crear una función con tres parámetros que sean números que se suman entre sí.
Llamar a la función en el main y darle valores.

Segunda parte:

Crear una clase coche.
Dentro de la clase coche, una variable numérica que almacene el número de puertas que tiene.
Una función que incremente el número de puertas que tiene el coche.
Crear un objeto miCoche en el main y añadirle una puerta.
Mostrar el número de puertas que tiene el objeto.*/



function tresParametros() {
    let num1 = 1;
    let num2 = 2;
    let num3 = 3;
    let sumParam = num1 + num2 + num3;
    return sumParam;
}

let result = tresParametros();
console.log(result);
