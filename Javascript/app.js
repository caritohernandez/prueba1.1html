console.log("hola mundo");
//variables
let numero1 =45
let numero2 =39
let suma
console.log(numero1);
console.log(numero2);
suma = numero1 + numero2
resta = numero1 - numero2
multiplicacion = numero1 * numero2
mod = numero1 % numero2
console.log(suma)

//concatenar valores
console.log('LA SUMA DE',numero1,'y',numero2,'es: ',suma);

//literal template
console.log(`la resta de ${numero1} y ${numero2} es: ${resta}`);
//ejercicio 
fecha = parseFloat (prompt("ingrese fecha"))
if (fecha < 1900) {
    console.log("perdida");
}else if (fecha < 1925) {
    console.log("grandiosa");
}else if (fecha < 1946) {
    console.log("silenciosa");
}else if (fecha < 1965) {
    console.log("babyboomer");
}else if (fecha < 1981) {
    console.log("generacion x");
}else if (fecha< 1997) {
    console.log( "generacion y");
}else if (fecha < 2013) {
    console.log("generacion z");
}else if ( fecha < 2025) {
    console.log("generacion alpha");
}
