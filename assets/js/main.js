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

let example = generateRandomNumbers(5);
console.log(example);

// Stampare in pagina i numeri generati