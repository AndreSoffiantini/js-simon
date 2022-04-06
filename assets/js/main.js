/* Visualizzare in pagina 5 numeri casuali.Da lì parte un timer di 30 secondi.
Dopo 30 secondi l 'utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, 
tramite il prompt().
Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali 
dei numeri da indovinare sono stati individuati. */

// Creare una funzione per generare numeri casuali

/**
 * La funzione genera un array contenente numeri casuali di dimensione "size"
 * @param {number} size La quantità di numeri desiderata
 * @returns Un array contenente "size" numeri casuali
 */
function generateRandomNumbers(size) {

    const numbers = [];

    while (numbers.length < size) {

        let number = Math.floor(1000 * Math.random());
        numbers.push(number);

    }

    return numbers;

}

/* let example = generateRandomNumbers(5);
console.log(example); */

// Creare una funzione che stampi un li in numbersList, ognuno contenente un numero dell'array di input

/**
 * La funzione stampa a schermo i numeri contenuti nell'array "numbers" all'interno 
 * di una lista non ordinata
 * @param {object} numbers 
 */
function printNumbers(numbers) {

    const numbersList = document.getElementById("numbersList");

    for (let index = 0; index < numbers.length; index++) {
        let element = numbers[index];
        let listItem = document.createElement("li");
        listItem.innerText = element;
        numbersList.appendChild(listItem);
    }

}

let example = generateRandomNumbers(5);
console.log(example);
console.log(typeof(example));
printNumbers(example);