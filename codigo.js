function encriptar() {
    var texto = document.getElementById("textoEntrada").value.toLowerCase();
    var texcifrar = texto.replace(/e/igm, "enter");
    var texcifrar = texcifrar.replace(/o/igm, "ober");
    var texcifrar = texcifrar.replace(/i/igm, "imes");
    var texcifrar = texcifrar.replace(/a/igm, "ai");
    var texcifrar = texcifrar.replace(/u/igm, "ufat");

    document.getElementById("diamante").style.display = "none";
    document.getElementById("titulo2").style.display = "none";
    document.getElementById("textoSalida").innerHTML = texcifrar;
    document.getElementById("copiar").style.display = "show";
    document.getElementById("copiar").style.display = "inherit";
    document.getElementById("textoEntrada").value = "";
}

function desencriptar() {
    var texto = document.getElementById("textoEntrada").value.toLowerCase();
    var texcifrar = texto.replace(/enter/igm, "e");
    var texcifrar = texcifrar.replace(/ober/igm, "o");
    var texcifrar = texcifrar.replace(/imes/igm, "i");
    var texcifrar = texcifrar.replace(/ai/igm, "a");
    var texcifrar = texcifrar.replace(/ufat/igm, "u");

    document.getElementById("diamante").style.display = "none";
    document.getElementById("titulo2").style.display = "none";
    document.getElementById("textoSalida").innerHTML = texcifrar;
    document.getElementById("copiar").style.display = "show";
    document.getElementById("copiar").style.display = "inherit";
    document.getElementById("textoEntrada").value = "";
}

function copiar() {
    var frase = document.querySelector("#textoSalida");
    frase.select();
    document.execCommand("copy");
}