function calcular() {
    
    let valor1 = prompt('Ingrese el Valor1');
    let operacion = prompt('Ingrese el Operacion(+,-,*,/)');
    let valor2 = prompt('Ingrese el Valor2');

    console.log(valor1);
    console.log(valor2);
    console.log(operacion);

    const resultado = parseInt(valor1) + parseInt(valor2);

    console.log(resultado);
}