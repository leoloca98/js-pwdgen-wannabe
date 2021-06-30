/* Chiedi all’utente il suo nome,
poi chiedi il suo cognome,
poi chiedi il suo colore preferito
Infine scrivi sulla pagina nomecognomecolorepreferito21*/

// ! Chiediamo il nome all'utente

/*
1 - Variabile nome utente
2 - Chiediamo il nome all'utente attraverso un prompt
3 - Salviamo il nome nella varaibile "name"
*/

var name;
name = prompt("Inserisci il tuo nome");
console.log(name);

// ! Chiediamo il cognome all'utente

/*
1 - Variabile cognome utente
2 - Chiediamo il cognome all'utente attraverso un prompt
3 - Salviamo il cognome nella varaibile "name"
*/

var surname;
surname = prompt("Inserisci il tuo cognome");
console.log(surname);

// ! Chiediamo il colore preferito dell'utente

/*
1 - Variabile colore prefetito utente
2 - Chiediamo il colore preferito all'utente attraverso un prompt
3 - Salviamo il colore preferito nella varaibile "name"
*/

var bestcolor;
bestcolor = prompt("Inserisci il tuo colore preferito");
console.log(bestcolor);

// ! Stampiamo una password formata così: nomecognomecolorepreferito1337

/*
1 - Variabile dell'unione delle stringhe
2 - Leghiamo la variabile all'id dello span contenuto in h1. In modo tale che metterà la password ottenuta proprio li.
3 - Creiamo la password unendo le stringhe contenute in "name", "surname" e "bestcolor" e alla fine aggiungiamo "1337" (in formato stringa)
4 - Stampiamo la password ottenuta nello span con id="PsdGen"
*/

var PsdGenPlaceholder;
PsdGenPlaceholder = document.getElementById("PsdGen");
PsdGenPlaceholder.innerText = name + surname + bestcolor + "1337";
console.log(PsdGenPlaceholder);