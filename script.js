/* 1-Ejercicio  */

let edad = parseInt(prompt("Ingrese su edad: "));
if (edad >= 18) {
    console.log("Eres mayor de edad");
} else {
    console.log("Eres menor de edad");
}

/* 2-Ejercicio */

let numeroUsuario = parseFloat(prompt("Ingrese su número: "));
if (numeroUsuario >= 0) {
    console.log("El número es positivo");
} else {
    console.log("El número es negativo"); 
}

/* 3-Ejercicio */

let numero = parseFloat(prompt("Ingrese un número: "));
if (numero % 2 === 0) {
    console.log("El número es par");
} else {
    console.log("El número es impar");
}

/* 4-Ejercicio */

let totalCompra = parseFloat(prompt("Ingrese el total de su compra: "));
if (totalCompra > 100) {
    let descuento = totalCompra * 0.1;
    totalCompra -= descuento;
    console.log("Tienes un descuento del 10% y su total es: " + totalCompra);
} else {
    console.log("No tienes descuento");
}
 
/* 5-Ejercicio */

let numero1 = parseFloat(prompt("Ingrese el primer número: "));
let numero2 = parseFloat(prompt("Ingrese el segundo número: "));
if (numero1 > numero2) {
    console.log("El primer número es mayor que el segundo");
} else if (numero1 < numero2) {
    console.log("El segundo número es mayor que el primero");
} else {
    console.log("Ambos números son iguales");
}
