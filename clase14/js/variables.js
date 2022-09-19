/*
    Esto es un comentario en js: multilinea
 */
// comentario de una linea
let valor1;
let valor2;
let resultado;

//asignar valores a las variables
valor1 = 10;
valor2 = 20;
//operaicon matematica
resultado = valor1 + valor2;
//muestror por consola
console.log(resultado);
//alert(resultado);

//string
let nombre = 'carlos';//string
let apellido = 'lopez';//string
let edad = 36; //number
let letra = 'a';
let esArgentino = true;//boolean > true | false
//tipo objeto
let persona = {
    nombre: 'carlos',
    apellido: 'lopez',
    edad: 36,
    letra:'a',
    esArgentino: true
};

console.log('edad:',edad);
edad = 37;//es posible porque edad es variable
console.log('edad:',edad);

console.log('variable apellido:', apellido);//linea 27
console.log(persona);

//mostar algun atributo del objeto persona
console.log(persona.esArgentino, persona.apellido, persona.edad);

//dejar fijo un valor
const altura = 175;
console.log('altura:',altura);
// altura = 176;

//cambio el valor de persona a un objeto vacio sin atributos
//persona.edad = 37;
persona = {
    nuevoAtributo:150,
    tienAuto: true
};
console.log(persona);

//creo un nuevo objeto constante
const auto = {
    chasis: 123456789,
    anio: 2022,
    color: 'rojo',
    esNacional: true
};
console.log(auto);

//puedo cambiar los valores de los atributos de los objeto
//'como?
//objeto.atributo = valor;
auto.color = 'amarillo'; 
console.log(auto);
