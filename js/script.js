
function aparece(id){
    desaparece(id);
    document.getElementById(id).style.display = 'flex';
}

function desaparece(id){
    let secciones = ['informacion','educacion','experiencia','habilidades','contacto']
    let indice = secciones.indexOf(id);
    for(i=0 ; i < secciones.length;i++){
        if(indice != i){
            document.getElementById(secciones[i]).style.display = 'none';
        }
    }
}


const btn_enviar = document.getElementById('btn-enviar');

const validacion = (e) => {
    e.preventDefault();
    const nombre = document.getElementById('nombre');
    const email = document.getElementById('email');
    if(nombre.value === ""){
        alert("por favor ingrese un nombre valido:");
        nombre.focus();
        return false;
    }

    if(email.value === ""){
        alert("Ingrese email valido");
        email.focus();
        return false;
    }

    if(!emailValido(email.value)){
        alert("ingrese un email valido");
        return false;
    }
    
    return true;
}

const emailValido = email =>{
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

btn_enviar.addEventListener('click', validacion);