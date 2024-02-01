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
//     let type = "";
  
//     switch (true) {
//       case degrees < 90:
//         type = "acuto";
//         break;
//       case degrees === 90:
//         type = "retto";
//         break;
//       case degrees > 90 && degrees < 180:
//         type = "ottuso";
//         break;
//       case degrees === 180:
//         type = "piatto";
//         break;
//       default:
//         type = "unclassified";
//     }
//     return type;
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

// Esercizi EXTRA:
// _______________

// ESERCIZIO 1:
// Partendo da una stringa (passata come parametro), ritorna il carattere più usato nella stringa stessa.

// function checkCarattere (stringa) {
//     let frequenzaCaratteri = {};
  
//     for (let carattere of stringa) {
//       if (carattere in frequenzaCaratteri) {
//         frequenzaCaratteri[carattere]++;
//       } else {
//         frequenzaCaratteri[carattere] = 1;
//       }
//     }
  
//     let caratterePiùFrequente = "";
//     let frequenzaMassima = 0;
  
//     for (let carattere in frequenzaCaratteri) {
//       if (frequenzaCaratteri[carattere] > frequenzaMassima) {
//         frequenzaMassima = frequenzaCaratteri[carattere];
//         caratterePiùFrequente = carattere;
//       }
//     }
  
//     return caratterePiùFrequente;
// }

// console.log(checkCarattere("efhijcebicebhicbhcbhchicehuiwcdodwowkwkwkwrufbnc")); 

// ESERCIZIO 2: 
// Controlla che due stringhe passate come parametri siano gli anagrammi l'una dell'altra. 
// Ignora punteggiatura e spazi e ricordate di rendere la stringa tutta in minuscolo. 
// Se le due parole sono anagrammi, ritorna true', altrimenti ritorna false'.

// function anagramma(string1, string2) {
//     // Controllo in prima battuta se le parole hanno lo stesso numero di caratteri 
//     if (string1.length !== string2.length) { 
//         return "Sono due parole di lunghezza differente, non saranno mai anagrammi l'uno dell'altro!";
//     }

//     // Ignoro i caratteri maiuscoli rendendo tutto minuscolo
//     string1 = string1.toLowerCase();
//     string2 = string2.toLowerCase();

//     let frequenzaCaratteri1 = {};
//     let frequenzaCaratteri2 = {};

//     // Controlla quali e quanti sono i caratteri nella stringa 1
//     for (let char of string1) {
//         if (char in frequenzaCaratteri1) {
//             frequenzaCaratteri1[char]++;
//         } else {
//             frequenzaCaratteri1[char] = 1;
//         }
//     }
//     // Controlla quali e quanti sono i caratteri nella stringa 2
//     for (let char of string2) {
//         if (char in frequenzaCaratteri2) {
//             frequenzaCaratteri2[char]++;
//         } else {
//             frequenzaCaratteri2[char] = 1;
//         }
//     }

//     //Questo ciclo itera all'interno del primo oggetto, se quella proprietà esiste anche nel secondo oggetto procede e 
//     //controlla se entrambi hanno anche lo stesso valore.
//     let charUguali = 0;

//     for (let char in frequenzaCaratteri1) {
//         if (char in frequenzaCaratteri2) {
//             if (frequenzaCaratteri1[char] === frequenzaCaratteri2[char]) {
//                 charUguali++;
//             }
//         }
//     }
//     //Se il valore di charUguali è uguale al numero di caratteri unici presenti nella prima stringa vuol dire che le due parole
//     //sono anagrammi l'uno dell'altra
//     return (charUguali === Object.keys(frequenzaCaratteri1).length);
// }

// console.log(anagramma("tiziano", "notizia"));

// ESERCIZIO 3:
// Partendo da una lista di possibili anagrammi e da una parola (entrambi passati come parametri), 
// ritorna un nuovo array contenente tutti gli anagrammi corretti della parola data.
// Per esempio, partendo da "cartine" e ["carenti", "incerta", "espatrio"], 
// il valore ritornato deve essere ["carenti", "incerta"].

// function anagrammiCheck(string, array) {
//     // Ignoro i caratteri maiuscoli rendendo tutto minuscolo
//     string = string.toLowerCase();

//     let frequenzaCaratteriString = {};
//     let newArray = [];

//     // Controlla quali e quanti sono i caratteri nella stringa
//     for (let char of string) {
//         if (char in frequenzaCaratteriString) {
//             frequenzaCaratteriString[char]++;
//         } else {
//             frequenzaCaratteriString[char] = 1;
//         }
//     }

//     //Itera all'interno dell'array e controlla se ogni stringa è un'anagramma
//     for (let element of array) {
//         element = element.toLowerCase();
//         let frequenzaCaratteriArray = {};

//         for (let char of element) {
//             if (char in frequenzaCaratteriArray) {
//                 frequenzaCaratteriArray[char]++;
//             } else {
//                 frequenzaCaratteriArray[char] = 1;
//             }
//         }
//         let charUguali = 0;

//         for (let char in frequenzaCaratteriString) {
//             if (char in frequenzaCaratteriArray) {
//                 if (frequenzaCaratteriString[char] === frequenzaCaratteriArray[char]) {
//                     charUguali++;
//                 }
//             }
//         }

//         //Se la stringa nell'array è un'anagramma inseriscilo all'interno del nuovo array contenente solo anagrammi
//         if (charUguali === Object.keys(frequenzaCaratteriString).length) {
//             newArray.push(element);
//         }
//     }
//     return newArray;
// }

// let myString = "cartine";
// let myArray = ["carenti", "incerta", "espatrio"];
// console.log(anagrammiCheck(myString, myArray));

// ESERCIZIO 4:
// Partendo da una stringa passata come parametro, ritorna 'true' se la stringa è palindroma o 'false se non lo è.

// function palindroma (string) {
//     string = string.toLowerCase();

//     for (let i = 0; i < string.length / 2; i++) {
//         if (string[i] !== string[string.length - 1 - i]) {
//             return false;
//         }
//     }
//     return true;
// }

// console.log(palindroma("anna"));
// console.log(palindroma("fabio"));

// ESERCIZIO 5:
// Partendo da un numero intero (dai parametri) ritorna un numero che contenga le stesse cifre, 
// ma in ordine contrario. Es. 189 → 981

// function numeroContrario (num) {
//     let myNum = "" + num;
//     let newNum = "";

//     for (let i = myNum.length - 1; i >= 0 ; i--) {
//         newNum += myNum[i];
//     }
//     return parseInt(newNum);
// }

// console.log(numeroContrario(9432));

// ESERCIZIO 6:
// 6. Scrivi una funzione che accetti un numero positivo X come parametro. 
// La funzione dovrebbe stampare a console una "scala" creata con il carattere "#" e avente X scalini.
// Es.
// X=2
// #
// ##
// X=3
// #
// ##
// ###

// function scala(Scalini) {
//     for (let i = 1; i <= Scalini; i++) {
//         let scala = '';

//         for (let j = 0; j < i; j++) {
//             scala += '#';
//         }

//         console.log(scala);
//     }
// }

// scala(2);
// scala(3);
// scala(10);

// ESERCIZIO 7:
// Crea una funzione che, data una stringa come parametro, ritorni la stessa stringa, ma al contrario. Es. "Ciao" ****→ "oaiC"

// function stringaAlContrario (string) {
//     let newString = "";

//     for (let i = string.length - 1; i >= 0 ; i--) {
//         newString += string[i];
//     }
//     return newString;
// }

// console.log(stringaAlContrario("Ciao"));

// ESERCIZIO 8:
// Crea una funzione che accetti un array e un numero Y come parametro. Dividi l'array in sotto-array aventi lunghezza Y.
// Es. array: [1, 2, 3, 4], y: 2 → [[ 1, 2], [3, 4]]
// array: [1, 2, 3, 4, 5], y: 4 → [[ 1, 2, 3, 4], [5]]

// function dividiArray(array, lunghezza) {
//     let finalArray = [];

//     for (let i = 0; i < array.length; i += lunghezza) {
//         let sottoArray = array.slice(i, i + lunghezza);
//         finalArray.push(sottoArray);
//     }

//     return finalArray;
// }

// let myArr = [1, 2, 3, 4];
// let myArr2 = [1, 2, 3, 4, 5]
// console.log(dividiArray(myArr, 2));
// console.log(dividiArray(myArr2, 4));

// ESERCIZIO 9: 
// Scrivi una funzione che accetti un numero positivo X come parametro. La funzione dovrebbe stampare a console una "piramide"
// create con il carattere "#" e avente X strati.
// Es.
// X=3
//   #
//  ###
// #####

// function piramide(strati) {
//     for (let i = 1; i <= strati; i++) {
//         let spazi = ' '.repeat(strati - i);
//         let hashtags = '#'.repeat(2 * i - 1);
//         console.log(spazi + hashtags);
//     }
// }

// piramide(3);
// piramide(7);

// ESERCIZIO 10: 
// Scrivi una funzione che accetti un intero N e ritorni una matrice a spirale NxN:
// Es. N= 2
// [[1, 2],
//  [4, 3]]
// N= 3
// [[1, 2, 3],
//  [8, 9, 4],
//  [7, 6, 5]]
// N = 4
// [[1,   2,  3, 4],
//  [12, 13, 14, 5],
//  [11, 16, 15, 6],
//  [10,  9,  8, 7]]