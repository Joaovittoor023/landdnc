var leonardo = window.document.getElementById("leonardo")
var samanta = window.document.getElementById("samanta")
var bruna = window.document.getElementById("bruna")
var setaDireita = window.document.getElementById("seta-direita")
var setaEsquerda = window.document.getElementById("seta-esquerda")

function RolarParaDireita() {
    bruna.style = "display:none"
    samanta.style = "display:flex"
    setaDireita.style = "display:none"
    setaEsquerda.style = "display:flex; margin-top:55px"
}

function RolarParaEsquerda(){
    bruna.style = "display:flex"
    samanta.style = "display:none"
    setaDireita.style = "display:flex"
    setaEsquerda.style = "display:none"
}
