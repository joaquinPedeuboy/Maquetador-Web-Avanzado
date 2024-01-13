function validacion(){
    let edad = parseInt(prompt('Ingrese su edad: '));

    if(edad<18){
        return alert('Error: No puede ingresar, es menor de edad.');
    }else{
        return alert('Bienvenido, puede ingresar.')
    }
}

validacion();