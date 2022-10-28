const mainBtn = document.querySelector(".create");

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

// inizio a sostituire
const ticketName =document.getElementById("nome");
ticketName.innerHTML = fullName;

const ticketOffer = document.getElementById("offerta");
// if per far comparire l'offerta adatta
if (sconto==0){
    ticketOffer.innerHTML = " Biglietto Standard"
}else if (sconto==20){
    ticketOffer.innerHTML = " Offerta Bambini"
}else if (sconto==40){
    ticketOffer.innerHTML = " Offerta over 65"
}

})