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
    
    const valuePalabra = document.getElementById('palabra').value;

    const isValid = validar(valuePalabra);

    if(!isValid) {
        alert('Debe completar la palabra');
        return;
    }

    agregar(valuePalabra);

    listarPalabras();
    //listarPalabrasHTML();
}

function agregar(palabra) {
    arrayDePalabras.push(palabra);    
}

function validar(valuePalabra) {
    return valuePalabra !== '';
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

function listarPalabrasHTML() {
    //valido que no sea vacio el array
    if(arrayDePalabras.length === 0) {
        return;
    }

    document.getElementById('listado').innerHTML = '';
    for(let unaPalabra of arrayDePalabras) {
        document.getElementById('listado').innerHTML += unaPalabra;
    }

    //document.getElementById('listado').innerHTML += ul;
}
