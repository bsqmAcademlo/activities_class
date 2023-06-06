/******************************/
/* Ejercicios con funciones: */
/*****************************/

// Declara una función que reciba como parámetro nombre y edad y que
// imprima en consola: "Hola, mi nombre es [nombre] y tengo [edad] años".

function introduceMySelf(name = "Anonimo", age = 0) {
    return `Hola, mi nombre es ${name} y tengo ${age} años`;
}

// console.log(introduceMySelf());
// console.log(introduceMySelf("brayan", 23));
// console.log(introduceMySelf("stiven", 15));

/*
1 - Declara una variable global llamada saludo y colocale como valor "Hola los saludo desde:"
2 - Declara una función sin parámetros, dentro crea una varaible local llamada pais y colócala como valor el país de donde vienes.
3 - Tu función debe mostrar por consola: "Hola los saludo desde [pais]".
*/

let saludo = "Hola los saludo desde:";

function greeting(country = "desconocido") {
    return `${saludo} ${country}`;
}

// console.log(greeting("colombia"));
// console.log(greeting("venezuela"));
// console.log(greeting("francia"));
// console.log(greeting());

// Declara una función que reciba como parámetro numero y numero2 y que retorne el resultado de la suma de ambos.
function sumNumbers(n1 = 0, n2 = 0) {
    let sum = n1 + n2;
    return sum;
}

// console.log(sumNumbers(1, 2));
// console.log(sumNumbers(8, 2));
// console.log(sumNumbers(8, 12));
// console.log(sumNumbers());

// Con el valor retornado de la función anterior realiza una función que reciba como parámetro ese resultado y que retorne el doble del resultado.

// let result = sumNumbers(1, 3); // 4

function doubleNumber(num) {
    return num * 2;
}

// console.log(doubleNumber(result)); // 8

// Crea una función que retorne un mensaje de bienvenida, recibiendo como parámetro el nombre de la persona, pero si no se recibe ningún parámetro debe retornar "Bienvenido Anónimo".
function welcome(user = "Anónimo") {
    return `Bienvenido ${user}`;
}

// console.log(welcome("brayan"));
// console.log(welcome());
// console.log(welcome("pepe"));
// console.log(welcome(0));

// Crea una función que compruebe si 2 números son iguales. Si lo son, retorna true, si no, retorna false.
function isEqual(n1, n2) {
    return n1 === n2;
}

// console.log(isEqual(2, "2")); // false
// console.log(isEqual(2, 2)); // true
// console.log(isEqual(10, 2)); // false
// console.log(isEqual(12, 12)); // true
