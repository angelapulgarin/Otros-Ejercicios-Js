//1. Usando un bucle for escribir un script que pida un valor entero 
//y muestre en pantalla una lista de números desde el 0 al valor tecleado. 
//Los números se separarán por comas.

let numero = prompt ("Ingresa un numero entero");
for (let inicia = 0; inicia < numero; inicia++ ) {
    console.log(inicia + ",");
}