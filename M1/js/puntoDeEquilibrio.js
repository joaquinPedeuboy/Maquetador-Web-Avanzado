function solicitar (){
    let costosFijos = parseFloat(prompt('Ingrese el costo fijo: '));
    let precioDeVenta = parseFloat(prompt('Ingrese el precio de venta: '));
    let costosVariables = parseFloat(prompt('Ingrese los costos variables: '));

    if (precioDeVenta - costosVariables === 0) {
        return alert('Error: La diferencia entre Ventas Totales y Costos Variables Totales no puede ser cero.');
    }
    let resultado = costosFijos / (precioDeVenta - costosVariables);

    document.write('Punto de equilibrio<br>')
    document.write("<p>"+resultado+"</p>");
}

solicitar();

