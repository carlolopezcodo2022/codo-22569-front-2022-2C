const personas = [
    {
        dni: 1234578,
        nombre: 'juan',
        direcciones: [
            {
                calle: 'av siempre viva',
                localidad: {
                    cp: 1236,
                    nombre: 'caba'
                }
            },
            {
                calle: 'calle 14',
                localidad: {
                    cp: 1237,
                    nombre: 'amba'
                }
            }
        ]
    },
    {
        dni: 1234579,
        nombre: 'carlos',
        direcciones: [
            {
                calle: 'calle 16',
                localidad: {
                    cp: 1236,
                    nombre: 'caba'
                }
            },
        ]
    }
];

function repasoArray() {
    console.log(persona);
    //mostrae el atributo nombre de la persona
    console.log(persona.nombre);

    //ahora convierto a json pero como string
    const strPersona = JSON.stringify(persona);
    console.log(strPersona);
    // console.log(strPersona.nombre);

    //ahora "parseo" strPersona a un objeto 
    const otrPersona = JSON.parse(strPersona);
    console.log(otrPersona);
    console.log(persona.dni);

    //AVERIGUAR SI EXISTE EL CODIGO POSTAL 1267: some() true|false
    //const existe = persona.direcciones.some(dir => dir.localidad.cp === 1237);
    //console.log(existe);

    let existe = false;
    for (let i = 0; !existe && i < persona.length; i++) {
        existe = persona[i].direcciones.some(dir => dir.localidad.cp === 1237);
    }
    console.log(existe);

    const existeV2 = 
        persona.every(per => per.direcciones.some(dir => dir.localidad.cp !== 1237));

    console.log(existeV2);

    //usando un map
    const dirs = persona.map(p => p.direcciones);
    console.log(dirs);

    const dirFlat = dirs.flat();
    console.log(dirFlat);

    const existeV3 = dirFlat.some(d => d.localidad.cp === 1237);
    console.log(existeV3);
    //-----------------

    let array1 = [1,2,3, [4,5,6],7,8 ];
    //             [1,2,3,4,5,6,7,8]
    console.log(array1);

    array1 = array1.flat();
    console.log(array1);
}

//dibujar los datos de la persona en un div
function CrearDivPersona(personas) {
    const divPersona = document.getElementById('contenidoExterno');
    personas.forEach(persona => {
        divPersona.innerHTML += CrearCardPersona(persona);
    });
}

function CrearCardPersona(unaPersona) {
    const html = `<div class="card" style="width: 18rem;">    
    <div class="card-body">
      <h5 class="card-title">${unaPersona.nombre}</h5>
      <p class="card-text">${CrearDirecciones(unaPersona.direcciones)}</p>
      <a href="#" class="btn btn-primary">Go somewhere</a>
    </div>
  </div>`;   //alt+96
  return html; 
}

function CrearDirecciones(direccion) {
    let dirs = '<ul>';
    const dires = direccion.forEach(
        d => dirs += '<li>' + d.calle + ',' + d.localidad.cp  + '</li>'
    );
    return dirs + dires + '</ul>';
}
//inicio
//invocando a la funcion CrearDivPersona
CrearDivPersona(personas);