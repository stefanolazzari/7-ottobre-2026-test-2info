let lista = document.getElementById("lista");
let bottone = document.getElementById("bottone-aggiungi");

function aggiungiElemento() {
    let testoProdotto = prompt("Inserisci un prodotto");

    if (!testoProdotto) {
        return;
    }

    let nuovoElemento = document.createElement("li");
    nuovoElemento.textContent = testoProdotto;

    let bottoneCestino = document.createElement("button");
    bottoneCestino.type = "button";
    bottoneCestino.className = "cestino";
    bottoneCestino.setAttribute("aria-label", "Elimina elemento");
    bottoneCestino.textContent = "🗑️";

    nuovoElemento.appendChild(bottoneCestino);
    lista.appendChild(nuovoElemento);
}

function eliminaElemento(event) {
    let bottoneCestino = event.target.closest(".cestino");

    if (!bottoneCestino) {
        return;
    }

    bottoneCestino.closest("li").remove();
}

bottone.addEventListener("click", aggiungiElemento);
lista.addEventListener("click", eliminaElemento);

