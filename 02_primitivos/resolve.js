/***********************************/
/* Ejercicios con tipos de datos: */
/**********************************/

// Declaración de una variable de tipo number de tipo entero
let number1 = 1;

// Declaración de una variable de tipo number de tipo flotante
let number2 = 1.5;

/* Colocar el resultado después de cada // */
const nombre = "JS";
let apellido;

console.log(parseFloat("10.5.56")); // 10.5
console.log(parseInt("10.5 usd")); // 10

console.log(`Hola ${1}`); // Hola 1
console.log(`Hola ${"nombre"}`); // Hola nombre
console.log(`Hola ${nombre}`); // Hola JS

console.log("Una cadena de texto"[4]); // c
console.log("Una cadena de texto"[0]); // U

console.log("LasQuinceLetras".length); // 15

console.log(1 / 0); // infinito
console.log(1 / "dos"); // NaN

console.log(apellido); // Undefined

// Convierta la cadena a un número entero
const cadenaEntero = "250px";
console.log(parseInt(cadenaEntero)); // 250

// Convierta la cadena a un número flotante
const cadenaFlotante = "250.5px";
console.log(parseFloat(cadenaFlotante)); // 250.5

// Responda las siguientes preguntas:
// 1. ¿Qué tipo de dato es el número negativo?
// ! number
// 2. ¿Qué tipo de dato es el número NaN?
// ! number
// 3. ¿Qué tipo de dato es el valor boleano true?
// ! boolean
// 4. Si una varibale fue declarada con let, pero no se le asignó un valor, ¿qué valor tiene?
// ! undefined
// 5. ¿Cual es el tipo de dato que se le conoce como valor vacio o desconocido?
// ! null
