
function encriptar(texto){
    let textoEncriptado = texto.replace(/[aeiou]/g, function(vocal){
        switch(vocal){
            case 'a': return 'ai';
            case 'e': return 'enter';
            case 'i': return 'imes';
            case 'o': return 'ober';
            case 'u': return 'ufat';
            default: return vocal;
        }
    });
    return textoEncriptado
}

function desencriptar(texto){
    let textoDesencriptado = texto.replace(/ai|enter|imes|ober|ufat/g, function(encriptado){
        switch(encriptado) {
            case 'ai': return 'a';
            case 'enter': return 'e';
            case 'imes': return 'i';
            case 'ober': return 'o';
            case 'ufat': return 'u';
            default: return encriptado;
        }
    });
    return textoDesencriptado
}

function textoLimpio(texto){
    let vocalSinTilde = texto.replace(/[áéíóú]/g, function(vocal){
        switch(vocal){
            case 'á': return 'a';
            case 'é': return 'e';
            case 'í': return 'i';
            case 'ó': return 'o';
            case 'ú': return 'u';
            default: return vocal;
        }
    });
    return vocalSinTilde
}

function asignarTexto(elemento, texto){
    let parrafo = document.getElementById("textoTemporal");
            parrafo.innerText = texto;
}            

function limpiarCasilla(){
    let informacion = document.getElementById("inputUsuario");
    informacion.value = "";
}

function accionEncriptar(){
    let texto = document.getElementById("inputUsuario").value;
    let textoMinusculas = texto.toLowerCase()
    let textoPreparado = textoLimpio(textoMinusculas);
    asignarTexto("textoTemporal", encriptar(textoPreparado))
    document.getElementById("botonCopiar").style.display = "block"
    document.getElementById("muñeco").style.display = "none"
    limpiarCasilla()
}

function accionDesencriptar(){
    let texto = document.getElementById("inputUsuario").value;
    let textoMinusculas = texto.toLowerCase()
    let textoPreparado = textoLimpio(textoMinusculas);
    asignarTexto("textoTemporal", desencriptar(textoPreparado))
    document.getElementById("botonCopiar").style.display = "block"
    document.getElementById("muñeco").style.display = "none"
}

function copiarTexto() {
    const textoP = document.getElementById('textoTemporal');
    
    if (textoP && textoP.textContent) {
        navigator.clipboard.writeText(textoP.textContent)
            .then(() => {
                alert("Texto copiado al portapapeles");
            })
            .catch(err => {
                console.error("Error al copiar al portapapeles: ", err);
            });
    } else {
        console.error("Elemento o contenido no encontrado");
    }
}

