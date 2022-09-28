const edades = [31,38,25,36,40];
//               0  1  2  3  4
//cuanto hay? 5
const cantidadElementos = edades.length;

//posiciones
//0,1,2,3,4
let valorActual = edades[0];
console.log(0,valorActual);

console.log(1,edades[1]);
console.log(2,edades[2]);
console.log(3,edades[3]);
console.log(4,edades[4]);
console.log('--------');
//uso un ciclo for
for(let i = 0;i < edades.length;i+=3) {
    console.log(i, edades[i]);
}
