const kmChoice = prompt('Quanti kilometri devi percorrere?');
console.log('I kilometri da percorrere sono: ', kmChoice);
console.log(typeof 'I kilometri da percorrere sono: ', kmChoice);

const myAge = prompt('Quanti anni hai?');
console.log("L'utente ha: ", myAge, 'anni');
console.log(typeof "L'utente ha: ", myAge);

let tripPrice = kmChoice * 0.21;
tripPrice = tripPrice.toFixed(2);

console.log('Il prezzo del biglietto sarà €', tripPrice);
console.log(typeof 'Il prezzo base del biglietto sarà €', tripPrice);

let discountPrice20 = (tripPrice - (tripPrice * 0.20));
discountPrice20 = discountPrice20.toFixed(2);

let discountPrice40 = (tripPrice - (tripPrice * 0.40));
discountPrice40 = discountPrice40.toFixed(2);

console.log('Il prezzo del biglietto sarà €', tripPrice);
console.log(typeof 'Il prezzo base del biglietto sarà €', tripPrice);

if (myAge < 18) {
    document.getElementById('minorenne').innerHTML = discountPrice20;
    console.log('Prezzo scontato: ', discountPrice20);
    document.getElementById('baseprice1').innerHTML = ('al posto di € ' + tripPrice);
}
else if (myAge >= 65) {
    document.getElementById('over65').innerHTML = discountPrice40;
    console.log('Prezzo scontato: ', discountPrice40);
    document.getElementById('baseprice2').innerHTML = ('al posto di € ' + tripPrice);
}
else {
    document.getElementById('baseprice').innerHTML = tripPrice;
}