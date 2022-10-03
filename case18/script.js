//funcion flecha / arrow function

//REACT
/*const addPalabra = () => {

}
*/
/* jquery!
addPalabra = function() {

}
*/

//scope

const arrayDePalabras = [];

function addPalabra() {
    //capturo el valor del input
    /*const inputPalabra = document.getElementById('palabra');
    console.log(inputPalabra);*/
    
    const valuePalabra = document.getElementById('palabra').value;
    console.log(valuePalabra);

    //validacion: que no sea vacio!
    if(valuePalabra === '') {
        alert('Debe completar la palabra');
        return;
    }

    //agrego la palabra al array
    arrayDePalabras.push(valuePalabra);
    //console.log(arrayDePalabras);

    listarPalabras();
}

function listarPalabras() {
    //valido que no sea vacio el array
    if(arrayDePalabras.length === 0) {
        return;
    }

    //limpio el div
    //document.getElementById('listado').innerHTML = '';
    //D.O.M
    //recorro el array y voy agregando las palabras
    const ul = document.createElement('ul');
    for(let unaPalabra of arrayDePalabras) {
        const li = document.createElement('li');
        //id al li
        li.id = Math.random();//0 - 0.999999
        li.className = 'texto-rojo';
        li.innerHTML = unaPalabra;

        //evento dinamico al li que estoy creando
        li.addEventListener('click',function() {
            alert('dentro del evento onclick de li')
        });

        ul.appendChild(li);
    }

    //document.getElementById('listado').innerHTML += ul;
    document.getElementById('listado').appendChild(ul);
    //arrayDePalabras.forEach(x => );
}
