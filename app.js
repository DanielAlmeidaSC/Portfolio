
let contadorClick = 0;

const botaoModoDark = document.getElementById('modoEscuro');
botaoModoDark.addEventListener('click', function() {
    contadorClick++; // Incrementa o contador a cada clique

    if (contadorClick === 1) {
        black(); 
    } else if (contadorClick === 2) {
        // Recarrega a página no segundo clique, mantendo o modo escuro
        location.reload();
    }
});


function black() {
    var titleEscuro = document.getElementById('modoEscuro');
    titleEscuro.innerHTML = "Modo Claro";
    var links = document.getElementsByClassName("text_decoration");
    for (var i = 0; i < links.length; i++) {
        links[i].style.color = "white";
    }

    var tituloSobreEu = document.getElementById('titleAboutMe');
    if (tituloSobreEu) {
        tituloSobreEu.style.color = "gold";
    }

    document.body.style.backgroundColor = "#222222";
    document.body.style.color = "white";

    var negrito = document.getElementById('negrito');
    if (negrito) {
        negrito.style.color = "gold";
    }
    var redes = document.getElementsByClassName("botao-click");
    for (var i = 0; i < redes.length; i++) {
        redes[i].style.color = "white";
        redes[i].style.border = "1px solid white";
        redes[i].style.boxShadow = "2px 2px 10px gold";
        redes[i].style.backgroundColor = "transparent";
    }

    var rodape = document.querySelectorAll('footer');
    for (var i = 0; i < rodape.length; i++) {
        rodape[i].style.backgroundColor = "black";
    }

    var textoRodape = document.getElementsByClassName('textoRodape');
        for (var i = 0; i < textoRodape.length; i++) {
            textoRodape[i].style.color = "gold";
        }

    var whatsapp = document.getElementsByClassName('botoes_contato1');
    if(whatsapp){
        whatsapp[0].style.backgroundColor = "transparent";
        whatsapp[0].style.border = "1px solid white";
        
        var whatsWord = document.getElementsByClassName('text_redes');
        whatsWord[0].style.color = "white";
    }
}
