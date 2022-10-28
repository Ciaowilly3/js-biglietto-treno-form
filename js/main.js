const mainBtn = document.querySelector(".create");
const flushBtn = document.querySelector(".flush");

// tramite la funzione flush do uno scopo al bottone annulla
flushBtn.addEventListener( "click", function() {

    const ticket = document.querySelector(".ticket");

    ticket.innerHTML = `<h2 class="text-center text-white"> HAI ANNULLATO I DATI INSERITI</h2>
    <h4 class="text-center text-white">Ricarica la pagina per riprovare</h4>`

})

// lego mainBtn al bottone quindi al click faccio partire la funzione
mainBtn.addEventListener( "click", function () {

// dichiarazione variabili
const fullNameEl = document.getElementById("fullName");
const distanceEl = document.getElementById("distance");
const scontoEl = document.getElementById("sconto");
// prendo il valore dall'html
const fullName = fullNameEl.value;
const distance = distanceEl.value;
const sconto = scontoEl.value
let prezzoFinale = distance * 0.21;

// inizio a sostituire
const ticketName =document.getElementById("nome");
ticketName.innerHTML = fullName;

const ticketOffer = document.getElementById("offerta");
// if per far comparire l'offerta adatta
if (sconto==0){
    ticketOffer.innerHTML = " Biglietto Standard"
}else if (sconto==20){
    ticketOffer.innerHTML = " Offerta Bambini"
    prezzoFinale = prezzoFinale-(prezzoFinale*(sconto/100));
}else if (sconto==40){
    ticketOffer.innerHTML = " Offerta over 65"
    prezzoFinale = prezzoFinale-(prezzoFinale*(sconto/100));
}


// creo variabili random per carrozza e Codice CP
const carrozza =Math.floor((Math.random() * 20) + 1);
const carrozzaEl = document.getElementById("carrozza");
carrozzaEl.innerHTML = carrozza;

const codice =Math.floor((Math.random() * 100000) + 1);
const codiceEl = document.getElementById("codiceCp");
codiceEl.innerHTML = codice;

// mando in output il prezzo finale
const prezzoFinaleEl = document.getElementById("costoBiglietto");
prezzoFinaleEl.innerHTML = `${prezzoFinale}&euro;`

})