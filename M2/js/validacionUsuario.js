function validacionUsuario(){
    const usuario = "admin";
    const password = "1234";

    let usuarioIngresado = prompt('Ingrese su usuario: ');
    let passwordIngresada = prompt('Ingrese su contraseña: ');

    if(usuario == usuarioIngresado && password == passwordIngresada){
        console.log("Acceso concedido");
    }else{
        return alert('ERROR: Usuario y/o Contraseña incorrecta.');
    }

}

validacionUsuario();