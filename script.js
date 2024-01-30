// ESERCIZIO 1:
// Crea una funzione che controlli due numeri interi. Ritorna 'true' se uno dei due è 50 o se la somma dei due è 50.

// function twoNumbers(num1, num2) {
//     return (num1 === 50 || num2 === 50 || (num1 + num2 === 50));
// }
// console.log(twoNumbers(50, 50));

// ESERCIZIO 2: 
// Crea una funzione che rimuova il carattere ad una specifica posizione da una stringa. 
// Passa la stringa e la posizione come parametri e ritorna la stringa modificata.

// function removeChar(string, position) {
//     if(string.length >= position) {
//         return string = string.replace(string[position-1], "");
//     } else {
//         return "U can't do that!!"
//     };
// }
// console.log(removeChar("ciao", 4));

// ESERCIZIO 3: 
// Crea una funzione che controlli se due numeri siano compresi tra 40 e 60 o tra 70 e 100. Ritorna
// 'true' se rispecchiano queste condizioni, altrimenti ritorna 'false'.

// function controlNum (num3, num4) {
//     return ((num3 > 40 && num3 < 60) || (num3 > 70 && num3 < 100)) && ((num4 > 40 && num4 < 60) || (num4 > 70 && num4 < 100)) 
// }
// console.log(controlNum(85, 68));

// ESERCIZIO 4:
// Crea una funzione che accetti un nome di città come parametro e ritorni il nome stesso se inizia con
// "Los" o "New", altrimenti ritorni 'false'.

// function city(cityName) {
//     if (cityName.startsWith("Los") || cityName.startsWith("New")) {
//       return cityName;
//     }
//     return false;
// }

// console.log(city("Los Santos"));
// console.log(city("New Orleans"));    
// console.log(city("Lisbona"));

// ESERCIZIO 5:
// Crea una funzione che calcoli e ritorni la somma di tutti gli elementi di un array.
// L'array deve essere passato come parametro.

// function sumArray (array) {
//     let total = 0;
//     array.forEach(element => {
//         total += element;
//     });
//     return total;
// }
// let array = [3, 5, 9, 2, 1];
// console.log(sumArray(array));

// ESERCIZIO 6:
// Crea una funzione che controlli che un array NON contenga i numeri 1 o 3. Se NON li contiene, ritorna
// 'true', altrimenti ritorna 'false'.

// function controlArrayNum (array) {
//     return !(array.includes(1) || array.includes(3));
// }
// let array = [10, 5, 9, 2, 2];
// console.log(controlArrayNum(array));

// ESERCIZIO 7: 
// Crea una funzione per trovare il tipo di un angolo i cui gradi sono passati come parametro.
// Angolo acuto: meno di 90° → ritorna "acuto"
// Angolo ottuso: tra i 90° e i 180° gradi → ritorna "ottuso"
// Angolo retto: 90° → ritorna "retto"
// Angolo piatto: 180° → ritorna "piatto"

// function typeOfDegree(degrees) {
//     let tipo = "";
  
//     switch (true) {
//       case degrees < 90:
//         tipo = "acuto";
//         break;
//       case degrees === 90:
//         tipo = "retto";
//         break;
//       case degrees > 90 && degrees < 180:
//         tipo = "ottuso";
//         break;
//       case degrees === 180:
//         tipo = "piatto";
//         break;
//       default:
//         tipo = "unclassified";
//     }
//     return tipo;
// }
  
// console.log(typeOfDegree(54));   
// console.log(typeOfDegree(90));   
// console.log(typeOfDegree(157));  
// console.log(typeOfDegree(180)); 
// console.log(typeOfDegree(290)); 
  

// ESERCIZIO 8:
// Crea una funzione che crei un acronimo a partire da una frase. Es. "Fabbrica Italiana Automobili
// Torino" deve ritornare "FIAT".

// function creaAcronimo(frase) {
//     let parole = frase.split(' ');
//     let acronimo = "";

//     parole.forEach(parola => {
//         acronimo += parola[0].toUpperCase();
//     });

//     return acronimo;
// }

// let frase = "Fabio Carucci compagnia di viaggi";
// console.log(creaAcronimo(frase)); 