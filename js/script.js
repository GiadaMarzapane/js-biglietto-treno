const kmChoice = prompt ('Quanti kilometri devi percorrere?');
console.log('I kilometri da percorrere sono: ', kmChoice);
console.log(typeof 'I kilometri da percorrere sono: ', kmChoice);

const myAge = prompt('Quanti anni hai?');
console.log("L'utente ha: ", myAge);
console.log(typeof "L'utente ha: ", myAge, 'anni');

let tripPrice = kmChoice * 0.21;
tripPrice = tripPrice.toFixed(2);

console.log('Il prezzo del biglietto sarà €', tripPrice);
console.log(typeof 'Il prezzo base del biglietto sarà €', tripPrice);

if (myAge < '18') {
    document.getElementById('minorenne').innerHTML= (tripPrice - (tripPrice * 0.20));
    console.log(tripPrice - (tripPrice * 0.20));
    document.getElementById('baseprice').innerHTML = ('al posto di € ' + tripPrice);
}

if (myAge >= '65') {
    document.getElementById('over65').innerHTML = (tripPrice - (tripPrice * 0.40));
    console.log(tripPrice - (tripPrice * 0.40));
    document.getElementById('baseprice2').innerHTML = ('al posto di € ' + tripPrice);
}