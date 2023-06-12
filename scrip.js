const textArea = document.querySelector(".text-area");
const mensaje = document.querySelector(".mensaje");
const copiar = document.querySelector(".copiar");


function validartexto(){

    let textoescrito = document.querySelector(".text-area").value;
    let validador = textoescrito.match(/^[a-z]*$/) ;
    
    if(!validador || validador == 0) {

        alert("Solo se permite letras minisculas y sin acentos");
        location.reload();
        return true;

    }
}

function  btnencriptar(){
   
    const textoencriptado = encriptar(textArea.value);
    mensaje.value = textoencriptado;
    textArea.value = " ";
    mensaje.style.backgroundImage = "none";
    alert("texto enciptado")

    
    
}

//llaves de encriptado
// la letra "e" es convertida  para "enter"
// la letra "i" es convertida  para "imes"
// la letra "a" es convertida  para "air"
// la letra "o" es convertida  para "ober"
// la letra "u" es convertida  para "uftat"


function encriptar(stringencriptada){

    let matrizcodigo = [["e", "enter"], ["i","imes"], ["a","air"], ["o", "ober"], ["u", "uftat"]];

    stringencriptada = stringencriptada

    for (let i = 0 ; i < matrizcodigo.length; i++){

        if (stringencriptada.includes(matrizcodigo[i][0])){
           
            stringencriptada = stringencriptada.replaceAll(matrizcodigo[i][0], matrizcodigo[i][1])
           
        } 
        
    }

    copiar.style.display = "block";
    return stringencriptada

}

function desencriptar(stringdesencriptada){

    let matrizcodigo = [["e", "enter"], ["i","imes"], ["a","air"], ["o", "ober"], ["u", "uftat"]];

    stringdesencriptada = stringdesencriptada

    for (let i = 0 ; i < matrizcodigo.length; i++){

        if (stringdesencriptada.includes(matrizcodigo[i][1])){

            stringdesencriptada = stringdesencriptada.replaceAll(matrizcodigo[i][1], matrizcodigo[i][0])
        
        }

    } 
    return stringdesencriptada

}

function  btndesencriptar(){
   
    const textoencriptado = desencriptar(textArea.value);
    mensaje.value = textoencriptado;
    textArea.value = "";
   
}

copiar.addEventListener("click", () => {
   
        var contenido = mensaje;
        navigator.clipboard.writeText(contenido.value);
        alert("Texto copiado");
        mensaje.value =" ";
        copiar.style.display = "none";
        textArea.focus();
        
    }
)

