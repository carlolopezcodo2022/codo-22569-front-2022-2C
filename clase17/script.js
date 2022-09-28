//filtrar elementos
const alumnos = [
    {
        edad: 35,
        nombre: "carlos"
    },
    {
        edad: 30,
        nombre: "juan"
    },
    {
        edad: 40,
        nombre: "eduardo"
    },
    {
        edad: 38,
        nombre: "gaby"
    }
];

//alumnos con edad < 40
//declaro un array auxiliar donde guardar los que cumplan
const aux = [];
for (let unAlumno of alumnos) { //foreach (imperativo que y como)
    //console.log(unAlumno);
    if (unAlumno.edad < 40) {
        aux.push(unAlumno.nombre);
    }
}

console.log('menores de 40: ', aux);

//FILTER
const aux2 = alumnos.filter(unAlumno => unAlumno.edad < 40); //declarativo (que)
console.log('menores de 40: ', aux2);

//MAP
const nombresDeAlumnos = aux2.map(unAlumno => unAlumno.nombre); //(que quiero???)
console.log(nombresDeAlumnos);

//SOME: old: EJERCICIO
let existe = false;
for (let i=0;i<alumnos.length && !existe;i++) { //foreach (imperativo que y como)
    existe = alumnos[i].edad == 40;
}

// muestren si existe un alumnos con edad = 40
// y no recorrer todo el ciclo for
console.log(existe)

//SOME: new
const existe2 = alumnos.some(unAlumno => unAlumno.edad == 40);
console.log(existe2)

//SI TODOS LOS ALUMNOS TIENE EDAD = 35
let todos35 = true;
for (let i = 0; i < alumnos.length && (todos35 = alumnos[i].edad !== 35); i++) {}
console.log(todos35);

//EVERY
const todos35_2 = alumnos.every(unAlumno => unAlumno.edad == 35);
console.log(todos35_2);

//SUMAR TODAS LAS EDADES DE LOS ALUMNOS OLD
let edadTotal = 0;
alumnos.forEach(unAlumno => edadTotal += unAlumno.edad);//que

console.log(edadTotal);

//REDUCE
const edadTotal2 = alumnos.reduce((total,alumnoActual) => total + alumnoActual.edad,0);
console.log(edadTotal2);