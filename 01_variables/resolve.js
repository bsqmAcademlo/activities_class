/******************************/
/* Ejercicios con variables: */
/*****************************/
/*
Ejercicio 1:
1. Declarar dos variables: nombre y usuario sin asignarle ningún valor.
2. Asignar tu nombre a la variable nombre.
3. Copia el valor de nombre a la variable usuario.
4. sin usar la consola responde ¿Qué valor tiene la variable usuario?
*/

let nombre;
let usuario;

nombre = "brayan";
usuario = nombre;

// ! usuario // => brayan

// console.log(usuario);

/*
Ejercicio 2:
¿Cómo nombrarías a dicha variable? *en ingles*
1. Crea una variable con el nombre de "nuestro planeta".
2. Crea una variable para almacenar el "nombre del usuario actual" de un sitio web.
*/

let ourPlanet;
let currentUser;

/*
Ejercicio 3:
¿Qué valor tiene la variable userName?
1. Crea la variable userName usando var.
2. Asigna el nombre de una persona a la variable userName.
3. Crea otra variable con el mismo nombre de la variable anterior.
4. Asigna tu nombre a esta variable.
*/

var userName;
userName = "stiven";
var userName;
userName = "brayan";

/*
Ejercicio 4:
¿Cuál es la diferencia entre var, let y const? */

// const => no deja modificarse ni redeclararse, scope de bloque ✅
// let => no deja redeclararse pero si deja reasignarse, scope de bloque ✅
// var => deja redeclararse, deja reasignarse, tiene un scope glonal ❌
