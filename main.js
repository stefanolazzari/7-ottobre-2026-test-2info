let lista = document.getElementById("lista");
let bottone = document.getElementById("bottone-aggiungi");

function aggiungiElemento(){
    let testoProdotto = prompt("Inserisci un prodotto");
    let nuovoElemento = document.createElement("li");
    nuovoElemento.innerHTML = testoProdotto;
    lista.appendChild(nuovoElemento);

    let bottoneCestino = document.createElement("button");
    bottoneCestino.innerHTML = "🗑️";
    nuovoElemento.appendChild(bottoneCestino);
}   

bottone.addEventListener("click",aggiungiElemento);




