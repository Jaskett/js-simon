// Visualizzare in pagina 5 numeri casuali
// Parte un timer di 30 secondi

// Dopo 30 secondi i numeri scompaiono e l'utente deve inserire, uno alla volta, i numeri che ha visto precedentemente
// Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati

function randomNumFunction(numMinFunc, numMaxFunc) {
    let randomFunction = Math.floor(Math.random() * (numMaxFunc - numMinFunc + 1) + numMinFunc);

    return randomFunction;
}

const arrRandNum = [];

for(let i = 1; i <= 5; i++) {
    let randomNumber = randomNumFunction(1, 1000);
    arrRandNum.push(randomNumber);
}

console.log(arrRandNum);
const textRandNum = document.querySelector('h2');
textRandNum.innerHTML = arrRandNum;

const textTimer = document.getElementById('timer-text');
textTimer.innerHTML = "Memorizza e attendi 30 secondi";

// Attivo il timer 30 secondi
const timer = setTimeout(timerFunction, 30000);

function timerFunction() {
    textRandNum.innerHTML = "";
    textTimer.innerHTML = "Inserisci i numeri che hai visto uno alla volta e nel giusto ordine";
}

const inputNum = document.getElementById('input-num');
const buttonNum = document.getElementById('button-num');
const arrNumUser = [];

buttonNum.addEventListener('click',
    function() {
        if(arrNumUser.length < 4) {
            arrNumUser.push(inputNum.value);
            console.log(arrNumUser);
            inputNum.value = "";
        }
        else if(arrNumUser.length < 5) {
            arrNumUser.push(inputNum.value);

            document.getElementById('num-user').innerHTML = `Numeri inseriti: ${arrNumUser}`;
            console.log("Numeri inseriti: ", arrNumUser);

            document.querySelector('.num-pc').innerHTML = `Numeri da indovinare: ${arrRandNum}`;
            console.log("Numeri da indovinare: ", arrRandNum);

            const textResult = document.querySelector('h3');
            let arrayEqual = arrayEqualFunction(arrRandNum, arrNumUser);

            if(arrayEqual === true) {
                textResult.innerHTML = "Hai indovinato tutti i numeri, hai vinto!";
                textResult.style.color = "green";
                console.log("Hai indovinato tutti i numeri, hai vinto!");
                textTimer.innerHTML = "";
            }
            else {
                textResult.innerHTML = "Non hai indovinato tutti i numeri, hai perso!";
                textResult.style.color = "red";
                console.log("Non hai indovinato tutti i numeri, hai perso!");
                textTimer.innerHTML = "";
            }
        }
    }
)

function arrayEqualFunction(a, b) {
    if(a == b) {
        return true;
    }
    else if(a == null || b == null) {
        return false;
    }
    else if(a.length != b.length) {
        return false;
    }

    for(var i = 0; i < a.length; ++i) {
        if(a[i] != b[i]) {
            return false;
        }
    }
    return true;
}