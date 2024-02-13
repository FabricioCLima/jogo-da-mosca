//PRIMEIRO ENCONTRAR A ALTURA E LARGURA DA TELA 

let altura = 0
let largura = 0
let vidas = 1
let tempo = 60

var criaMosquitoTempo = 1500

let nivel = window.location.search

nivel = nivel.replace('?', '')

 if (nivel === 'normal') {
    criaMosquitoTempo = 1500
 }else if (nivel === 'dificil') {
    criaMosquitoTempo = 1000
 }else if (nivel === 'chucknorris') {
    criaMosquitoTempo = 750
 }

function ajustaTamanho() {
     altura = window.innerHeight 
     largura = window.innerWidth
     console.log(largura, altura)
}
ajustaTamanho()

let cronometro = setInterval(function(){

    tempo--

    if(tempo < 0) {

        clearInterval(cronometro)
        clearInterval(criaMosca)
        window.location.href = 'vitoria.html'
    }else {
        document.getElementById('cronometro').innerHTML = tempo
    }   
}, 1000)

function posicaoRandomica() {

    //REMOVER MOSQUITO ANTERIOR CASO EXISTA
    if(document.getElementById('mosquito')) {
        document.getElementById('mosquito').remove()

        console.log('elemento selecionado foi: v' + vidas)

        if (vidas > 3) {
            window.location.href = 'fim_de_jogo.html'
            
        } else {
            document.getElementById('v' + vidas).src = "assets/img/coracao_vazio.png"    
            vidas++
           
        }
        
        
    }

    let posicaoX = Math.floor(Math.random() * largura ) - 90
    let posicaoY = Math.floor(Math.random() * altura ) - 90 

posicaoX = posicaoX < 0 ? 0 : posicaoX 
posicaoY = posicaoY < 0 ? 0 : posicaoY

console.log(posicaoX, posicaoY)

    //CRIAR ELEMENTO HTML
    let mosquito = document.createElement('img')
    mosquito.src = 'assets/img/mosquito.png'
    mosquito.className = tamanhoAleatorio () +  ' ' + ladoAlreatorio ()
    mosquito.style.left = posicaoX + 'px'
    mosquito.style.top = posicaoY + 'px'
    mosquito.style.position = 'absolute'
    mosquito.id = 'mosquito'
    mosquito.onclick = function() {
        this.remove()
        
    }
    document.body.appendChild(mosquito)

    
}

function tamanhoAleatorio () {

    let classe = Math.floor(Math.random() * 3)
    
    switch(classe) {    
        case 0: 
            return 'mosquito1'
        case 1:
            return 'mosquito2'
        case 2:
            return 'mosquito3'
    }
}

function ladoAlreatorio () {

    let classe = Math.floor(Math.random() * 2)
    
    switch(classe) {    
        case 0: 
            return 'ladoA'
        case 1:
            return 'ladoB'
    }
}