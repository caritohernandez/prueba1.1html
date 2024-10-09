console.log("hola mundo");
//variables
//let numero1 =45
//let numero2 =39
//let suma
/*console.log(numero1);
console.log(numero2);
suma = numero1 + numero2
resta = numero1 - numero2
multiplicacion = numero1 * numero2
division = numero1 / numero2
mod = numero1 % numero2
console.log(suma)

//concatenar valores
console.log('LA SUMA DE',numero1,'y',numero2,'es: ',suma);

//literal template
console.log(`la resta de ${numero1} y ${numero2} es: ${resta}`);
//ejercicio 
/*fecha = parseFloat (prompt("ingrese fecha"))
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

//operador tenario
/*let res = (edad >=18)? "es mayor de edad": "es menor de edad";*/

//ejercicio monedas
/*let cantidad = parseInt(prompt("ingrese la cantidad en pesos"));
let moneda = parseInt(prompt("ingrese la moneda 1:dolar, 2:euro, 3:libra"));
let dolar = 4280
let euro = 4728
let libra= 5600

switch (moneda) {
    case 1: 
        console.log(`la cantidad de dolares es: ${cantidad/dolar}`);
        break;
    case 2: 
        console.log(`la cantidad de euros es: ${cantidad/euro}`);
        break
    case 3: 
        console.log(`la cantidad de libras es: ${cantidad/libra}`);
        break
    default:
        console.log('ingrese una opcion correcta'); 
        break
} 
  */      
/*let menu,bebida;
switch (menu=prompt('tipo de menu: carne,pescado, ensalada'))
  to lower case(){
    case 'carne':
        bebida='¿desea beber vino tinto?';
        break;
    case 'pescado':
        bebida='¿desea beber vino blanco?';
        break;   
    case 'ensalada':
        bebida='desea beber agua?';
        break;
    default:
        bebida= 'elija carne, pescado o ensalada';
}
alert(bebida);*/
let tabla =1
for (let i = 1; i<=10; i++) {
    for (let j = 1; j <= 10; j++) {
        console.log(`${i}*${j}= ${(i*j)}`);
        
    }
    console.log('')
    
}

//ejercicio realizar un calculo matematico

/*let opcion;
let estado = true;
let coseno, seno, raiz, numero;

while (estado) {
opcion = (parseInt(prompt('seleccione una opcion 1.raiz 2.seno 3.coseno 4.salir')));
switch (opcion) {
    case 1: alert ('selecciono raiz');
        numero= (parseFloat(prompt('ingrese un numero para calcular la raiz')));
        raiz = Math.sqrt(numero);
        alert(`la raiz de $(numero) es: $(raiz)`); 
        break;
    case 2: alert ('selecciono seno');
            numero= (parseFloat(prompt('ingrese un numero para calcular el seno')));
            raiz = Math.sin(numero);
            alert(`el seno de $(numero) es: $(seno)`); 
            break;
    case 3: alert ('selecciono coseno');
        numero= (parseFloat(prompt('ingrese un numero para calcular el coseno')));
        raiz = Math.cos(numero);
        alert(`el coseno de $(numero) es: $(coseno)`); 
        break;
    case 4: alert ('saliendo');
    estado=false;
    break; 
    default:
       alert('la opcion no existe');
        
}
}*/
//ejercicio adivina el numero aleatorio

//Do while
//calcular area del circulo, cuadrado y triangulo
//area circulo:A= pi*r*r
//area cuadrado A= lado*lado
//area triangulo A= b * h/2
/*let ac,acu;
let r,lado
const pi=3.1416
let opcion
do {
    opcion=parseInt(prompt('1.area circulo \n 2.area cuadrado \n 3.salir'));
    switch (opcion) {
        case 1: alert('area del circulo');
        r=parseFloat(prompt('ingrese el valor del radio'));
        ac=pi *(r*r);
        alert(`el area del circulo es: ${ac}`);            
        break;
        case 2: alert('area del cuadrado');
        lado=parseFloat(prompt('ingrese el valor del lado'));
        acu= (lado*lado);
        alert(`el area del cuadrado es: ${acu}`);            
        break;
        case 3: 
        alert('saliendo');
        break
        default:
            alert('opcion no valida');
    }
} while (opcion !=3);
*/
//ejercicio conversiones temperaturas
/*let KC, a
let KF, b
let FC, c
let status= true;
let opcion;
do {
    opcion= parseInt(prompt(1.kelvin a celsius \n 2.kelvin a farenheit \n farenheit a celsius));
switch (opcion) {
    case 1: alert('kelvin a celsius');
    a= parseFloat(prompt('ingrese el valor en kelvin'));
    KC=a-273.15
    alert(`la temperatura en celsius es: ${KC} grados celsius`);        
        break;
    case 2: alert('kelvin a farenheit');
        b= parseFloat(prompt('ingrese el valor en kelvin'));
        KF= (9*(b-273.15)/5)+32
        alert(`la temperatura en farenheit es: ${KF} grados farenheit`);
        break;
    case 3: alert('farenheit a celsius');
    c= parseFloat(prompt('ingrese el valor en farenheit'));
    FC=(5*(c-32))/9
    alert(`la temperatura en celsius es: ${FCC} grados farenheit`);
    break;
    case 4: alert('saliendo');
    estado=false;
    break;
    default:
        alert('opcion no válida');   
}
} while (estado);
*/
//ejercicio repaso viernes- dibujar triangulo
let num= parseInt(prompt('ingrese un numero entero positivo para dibujar el triangulo'));
if(num<0){
    for (let i= 1; i<=numero;i++) {
    console.log('*'.repeat(i));        
    }
}else{
    console.log('ingrese un numero entero positivo');
}