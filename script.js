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

/* 6-Ejercicio */

let ClasifiacionDeEdad = parseInt(prompt("Ingrese su edad: "));
if (ClasifiacionDeEdad >= 0 && ClasifiacionDeEdad <= 12) {
    console.log("Eres un niño");
} else if (ClasifiacionDeEdad > 12 && ClasifiacionDeEdad < 17) {
    console.log("Eres un adolescente");
} else if (ClasifiacionDeEdad >= 18 && ClasifiacionDeEdad < 64) {
    console.log("Eres un adulto");
} else if (ClasifiacionDeEdad >= 64) {
    console.log("Eres un adulto mayor");
}

/* 7-Ejercicio */

let nota = parseFloat(prompt("Ingrese una nota entre 0 y 100: "));
if (nota >= 90 && nota <= 100) {
    console.log("Excelente");
} else if (nota >= 70 && nota <= 89) {
    console.log("Aprobado");
} else if (nota >= 50 && nota <= 69) {
    console.log("Regular");
} else if (nota >= 0 && nota <= 49) {
    console.log("Insuficiente");
} else {
    console.log("Nota no válida");
}

/* 8-Ejercicio */

let OpcioMenu = prompt("Elija una opción de menú: 1.- Pizza 2.- Hamburguesa 3.- Tacos");
switch (OpcioMenu) {
    case '1':
        console.log("Has elegido pizza");
        break;
    case '2':
        console.log("Has elegido hamburguesa");
        break;
    case '3':
        console.log("Has elegido tacos");
        break;
    default:
        console.log("Opción no válida");
}

/* 9-Ejercicio  */

let LadoTriangulo = parseFloat(prompt("Ingrese el primer lado del triángulo: "));
let LadoTriangulo2 = parseFloat(prompt("Ingrese el segundo lado del triángulo: "));
let LadoTriangulo3 = parseFloat(prompt("Ingrese el tercer lado del triángulo: "));
if (LadoTriangulo === LadoTriangulo2 && LadoTriangulo2 === LadoTriangulo3) {
    console.log("El triángulo es equilátero");
} else if (LadoTriangulo === LadoTriangulo2 || LadoTriangulo2 === LadoTriangulo3 || LadoTriangulo3 === LadoTriangulo) {
    console.log("El triángulo es isósceles");
} else {
    console.log("El triángulo es escaleno");
}

/* 10-Ejercicio */

let adivinaNumero = parseInt(prompt("Adivina un número entre 1 y 10: "));
let numeroAleatorio = Math.floor(Math.random() * 10) + 1;
if (adivinaNumero === numeroAleatorio) {
    console.log("Has Acertado!");
} else {
    console.log("inteta de nuveo");
}

/* 11-Ejercicio */

let PrecioBase = parseFloat(prompt("Ingrese el precio base del producto: "));
if (PrecioBase > 500) {
    let descuento = PrecioBase * 0.15;
    console.log("El precio del producto con descuento es: " + (PrecioBase - descuento));
} else if (PrecioBase >= 300 && PrecioBase <= 500) {
    let descuento = PrecioBase * 0.10;
    console.log("El precio del producto con descuento es: " + (PrecioBase - descuento));
} else {
    let descuento = PrecioBase * 0.05;
    console.log("El precio del producto con descuento es: " + (PrecioBase - descuento));
}

/* 12-Ejercicio */

let año = parseInt(prompt("Ingrese un año: "));
if ((año % 4 === 0 && año % 100 !== 0) || (año % 400 === 0)) {
    console.log("El año " + año + " es bisiesto.");
} else {
    console.log("El año " + año + " no es bisiesto.");
}

