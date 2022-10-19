//tipo fuerte
var edad = 10;
//edad = 'hola soy carlios';
function saludar(saludo) {
    console.log(saludo);
}
function sumar(a, b) {
    return a + b;
}
//tipo de datos
var anio = 10;
var nombre = 'carlos';
var alto = false;
var fechaNac = new Date();
var articulo = {
    nombre: '',
    edad: 55
};
var Persona = /** @class */ (function () {
    //contructor
    function Persona(sexo, nombre) {
        //this que la referencia dentro de la clase que permite ver los atributos y metodos
        this.fechaNac = new Date();
        this.nombre = nombre;
        this.sexo = sexo;
    }
    //metodos 
    Persona.prototype.mostrarDatos = function () {
        console.log(yo.fechaNac);
        console.log(yo.nombre);
        console.log(yo.sexo);
    };
    Persona.prototype.hablar = function () {
        //logica de como habla una persona
    };
    return Persona;
}());
var Animal = /** @class */ (function () {
    function Animal() {
    }
    Animal.prototype.hablar = function () {
    };
    return Animal;
}());
//puedo instanciar objetos de la clase persona
var yo = new Persona('masculino', 'carlos');
var vos = new Persona('femenino', 'maria');
yo.mostrarDatos();
vos.mostrarDatos();
