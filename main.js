let lista = document.getElementById("lista");
let bottone = document.getElementById("bottone-aggiungi");

function aggiungiElemento(){
    let testoProdotto = prompt("Inserisci un prodotto");
    let nuovoElemento = document.createElement("li");
    nuovoElemento.innerHTML = testoProdotto;
    lista.appendChild(nuovoElemento);

    let bottoneCestino = document.createElement("button");
    bottoneCestino.className = "cestino";
    bottoneCestino.innerHTML = "🗑️";
    nuovoElemento.appendChild(bottoneCestino);
}   

function rimuoviElemento(event){
    let bottoneCestino = event.target.closest(".cestino");
    bottoneCestino.closest("li").remove();
}

bottone.addEventListener("click",aggiungiElemento);
lista.addEventListener("click", rimuoviElemento);




