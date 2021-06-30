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

var surname;
surname = prompt("Inserisci il tuo cognome");
console.log(surname);

// ! Chiediamo il colore preferito dell'utente

var bestcolor;
bestcolor = prompt("Inserisci il tuo colore preferito");
console.log(bestcolor);

// ! Stampiamo una password formata così: nomecognomecolorepreferito1337

var PsdGenPlaceholder;
PsdGenPlaceholder = document.getElementById("PsdGen");
PsdGenPlaceholder.innerText = name + surname + bestcolor + "1337";
console.log(PsdGenPlaceholder);