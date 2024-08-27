const textArea = document.querySelector(".text-area");
const mensajeEncriptado = document.querySelector(".mensaje-encriptado");
const COPY = document.querySelector('#copy');


/* 
La letra "e" es convertida para "enter"
La letra "i" es convertida para "imes"
La letra "a" es convertida para "ai"
La letra "o" es convertida para "ober"
La letra "u" es convertida para "ufat" 
*/


function btnEncriptar(){
   
    const textoEncriptado = encriptar(textArea.value)
    mensajeEncriptado.value = textoEncriptado;
    console.log(textoEncriptado);
    textArea.value = "";
    mensajeEncriptado.style.backgroundImage = "none";

    
}


function encriptar(stringEncriptada){
    let matrizCodigo = [["e","enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]];
    stringEncriptada=stringEncriptada.toLowerCase()

for(let i=0; i< matrizCodigo.length; i++){
    if(stringEncriptada.includes(matrizCodigo[i][0])){
        stringEncriptada = stringEncriptada.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1])
    }
}
return stringEncriptada
};



function btnDesencriptar(){
    const textoEncriptado = desencriptar(textArea.value)
    mensajeEncriptado.value = textoEncriptado;
    textArea.value = "";
}


function desencriptar(stringDesencriptada){
    let matrizCodigo = [["e","enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]];
    stringDesencriptada=stringDesencriptada.toLowerCase()

for(let i=0; i< matrizCodigo.length; i++){
    if(stringDesencriptada.includes(matrizCodigo[i][1])){
        stringDesencriptada = stringDesencriptada.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0])
    }
}
return stringDesencriptada
}

//boton copiar
COPY.addEventListener('click', () => {
    navigator.clipboard.writeText(mensajeEncriptado.value);
    alert("Texto copiado");
})