function black(){
    var escuro = window.document.body.style.backgroundColor = "#222222";
    var letrasClaras = window.document.body.style.color = "white";
    var links = window.document.getElementsByClassName("text_decoration");
    for (var i = 0; i < links.length; i++) {
        links[i].style.color = "white";
    }

    var redes = window.document.getElementsByClassName("botao-click");
    var negrito = window.document.getElementByTagName("strong");
    negrito.body.style.color = "white";


    for (var i = 0; i < redes.length; i++) {
        redes[i].style.color = "white";
        redes[i].style.backgroundColor = "#222222";
        redes[i].style.borderColor = "white";
    }

    var rodape = window.document.getElementsByClassName("rodape");
    for (var i = 0; i < rodape.length; i++) {
        rodape[i].style.backgroundColor = "white";
    }

    var textoRodape = window.document.getElementById("textoRodape");
    textoRodape.style.color = "black";

    var tituloSobreEu = window.document.getElementById("titleAboutMe");
    tituloSobreEu.style.color = "white";

        var buttonWhats = window.document.getElementsByClassName("text_redes");
        for (var i = 0; i < buttonWhats.length; i++) {
            buttonWhats[i].style.color = "white";  // Altera a cor do texto para branco
        
        }

    return escuro;
}