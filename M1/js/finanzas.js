function porcentaje(){
    let presupuesto = parseFloat(prompt('Ingrese su presupuesto: '));

    if(presupuesto < 0){
        return alert('Error: El presupuesto no puede ser negativo');
    }

    let gastosNecesarios = presupuesto * 0.5;
    let gastosOpcionales = presupuesto * 0.3;
    let ahorroEinversion = presupuesto * 0.2;

    document.write('MODELO 50-30-20<br>');
    document.write('Su presupuesto es: '+presupuesto + '<br>');
    document.write('Sus gastos necesarios son: ' + gastosNecesarios + '<br>');
    document.write('Sus gastos opcionales son: '+gastosOpcionales + '<br>');
    document.write('Sus ahorros e inversiones son: '+ahorroEinversion + '<br>');

}

porcentaje();