let distance = prompt(`Quanti km vuoi percorrere?`);

let age = prompt(`Quanti anni hai?`);

let standardPrice = distance * 0.21;

let outputMessage = document.getElementById('ticket-price');

if (age < 18) {

    let finalPrice = (Math.round(standardPrice * 0.8 * 100) / 100).toFixed(2);

    outputMessage.innerHTML = `<h3>Avendo ${age} anni hai diritto allo sconto del 20%!</h3><h3>Il prezzo del tuo biglietto è di ${finalPrice}&euro;</h3><button>Compra il biglietto</button>`;

} else if (age >= 65) {

    let finalPrice = (Math.round(standardPrice * 0.6 * 100) / 100).toFixed(2);

    outputMessage.innerHTML = `<h3>Avendo ${age} anni hai diritto allo sconto del 40%!</h3><h3>Il prezzo del tuo biglietto è di ${finalPrice}&euro;</h3><button>Compra il biglietto</button>`;

} else {

    let finalPrice = (Math.round(standardPrice * 100) / 100).toFixed(2);

    outputMessage.innerHTML = `<h3>Il prezzo del tuo biglietto è di ${finalPrice}&euro;</h3><button>Compra il biglietto</button>`;

}

