const deck = [
    {
        "id" : 1,
        "name" : "1.png",
        "src" : "./images/deck/0.png"
    },
    {
        "id" : 2,
        "name" : "2.jpg",
        "src" : "./images/deck/1.jpg"
    },
    {
        "id" : 3,
        "name" : "3.jpg",
        "src" : "./images/deck/2.jpg"
    },
    {
        "id" : 4,
        "name" : "4.jpg",
        "src" : "./images/deck/3.jpg"
    },
    {
        "id" : 5,
        "name" : "5.png",
        "src" : "./images/deck/4.jpg"
    },
    {
        "id" : 6,
        "name" : "6.jpg",
        "src" : "./images/deck/5.jpg"
    },
    {
        "id" : 7,
        "name" : "7.jpg",
        "src" : "./images/deck/6.jpg"
    },
    {
        "id" : 8,
        "name" : "8.png",
        "src" : "./images/deck/7.jpg"
    },
    {
        "id" : 9,
        "name" : "1.png",
        "src" : "./images/deck/0.png"
    },
    {
        "id" : 10,
        "name" : "2.jpg",
        "src" : "./images/deck/1.jpg"
    },
    {
        "id" : 11,
        "name" : "3.jpg",
        "src" : "./images/deck/2.jpg"
    },
    {
        "id" : 12,
        "name" : "4.jpg",
        "src" : "./images/deck/3.jpg"
    },
    {
        "id" : 13,
        "name" : "5.png",
        "src" : "./images/deck/4.jpg"
    },
    {
        "id" : 14,
        "name" : "6.jpg",
        "src" : "./images/deck/5.jpg"
    },
    {
        "id" : 15,
        "name" : "7.jpg",
        "src" : "./images/deck/6.jpg"
    },
    {
        "id" : 16,
        "name" : "8.png",
        "src" : "./images/deck/7.jpg"
    }
]




var jogo = document.getElementById("jogo-da-memoria")
var divCard = null
var img = null

deck.forEach( carta => {
    divCard = document.createElement("div")
    divCard.setAttribute("class","card")
    divCard.setAttribute("id", carta.id)
    divCard.setAttribute("onclick", "minha_funcao()")
 


    //Frente da carta
    tagImg = document.createElement("img")
    tagImg.setAttribute("src",carta.src)
    tagImg.setAttribute("alt",carta.name)
    tagImg.style.display = "none"
    divCard.appendChild(tagImg)

    //Verso da carta
    tagImg = document.createElement("img")
    tagImg.setAttribute("src","./images/deck/back.jpg")
    tagImg.setAttribute("alt","verso")
    tagImg.style.display = "block"
    divCard.appendChild(tagImg)

    jogo.appendChild(divCard)
})
/*jogo.innerHTML += 
`<div id=0 class="card">
    <img src="#" alt="CARD">
</div>
*/

function minha_funcao() {
    var card = document.getElementById(event.currentTarget.id)
    

    //i = 0 , 1, 2 ,3, ...
    for(var i = 0; i < card.children.length; i++){
        if(card.children[i].style.display == "none"){
            card.children[i].style.display = "block"
            continue
        }
        if(card.children[i].style.display == "block"){
            card.children[i].style.display = "none"
            continue
        }
    }

    pontuar(++pontuacao)
}


localStorage.setItem("record", 0);
var record = localStorage.getItem("record");

var pontuacao = 0
function pontuar(pontos){
    var spanPontuacao = document.getElementById("pontuacao")
    spanPontuacao.innerHTML = pontos
    
    //Se meu último registro for melhor que o Record, atualize-o.
    if( pontos > record){
        record = pontos
        localStorage.setItem("record", record);
    }

    var spanRecord = document.getElementById("record")
    spanRecord.innerHTML = record
}
pontuar(pontuacao)   //Pontuação Inicial do Game


function reset() {
    //Para cada carta
    for(var i = 0; i < jogo.children.length; i++){
        var carta = jogo.children[i]

        //Para cada imagem da carta, Frente e Verso
        for( var j = 0; j < carta.children.length; j++){
            if(carta.children[j].getAttribute("alt") == "verso"){
                carta.children[j].style.display = "block"
            }else{
                carta.children[j].style.display = "none"
            }
        }
    }
    pontuacao = 0 
    pontuar(pontuacao)
}
