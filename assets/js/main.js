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
    // La lista si resetta ogni volta che viene premuto Start
    numbersList.innerHTML = "";

    for (let index = 0; index < numbers.length; index++) {
        let element = numbers[index];
        let listItem = document.createElement("li");
        listItem.innerText = element;
        listItem.style.margin = "0 0.5rem";
        numbersList.appendChild(listItem);
    }

}

/* let example = generateRandomNumbers(5);
console.log(example);
console.log(typeof(example));
printNumbers(example); */

// Far generare e stampare la lista di numeri al click del pulsante Start

/**
 * La funzione al click del pulsante Start genera 5 numeri casuali e li stampa a schermo
 * @param {*} event L'evento scatenante (il click)
 */
function handleClick(event) {

    numbers = generateRandomNumbers(5);
    printNumbers(numbers);
    createTimer(10);
    setTimeout(readInput, 11000);


}

const startBtn = document.getElementById("startBtn");
startBtn.addEventListener("click", handleClick);

// Creare una funzione per generare il timer (ad ogni secondo stampi numeri decrescenti a schermo)

/**
 * La funzione genera un timer decrescente della durata di "seconds"
 * @param {number} seconds Il tempo di durata del timer (in secondi)
 */
function createTimer(seconds) {

    const timer = document.getElementById("timer");

    let clock = setInterval(function() {

        timer.innerText = seconds--;
        //console.log(seconds);

        if (seconds < 0) {
            clearInterval(clock);
        }

    }, 1000);

}

// Creare una funzione che legga gli input inseriti dall'utente

function readInput() {

    const inputs = [];

    for (let index = 0; index < 5; index++) {
        let input = parseInt(prompt("Inserisci il numero"));
        inputs.push(input);
    }

    console.log(inputs);
    console.log(numbers);

}