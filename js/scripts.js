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
textRandNum.innerHTML = arrRandNum;

const timer = setTimeout(timerFunction, 30000);

function timerFunction() {
    textRandNum.innerHTML = "";
}

const inputNum = document.getElementById('input-num');
const buttonNum = document.getElementById('button-num');
const arrNumUser = [];

const textNumUser = document.querySelector('h3');

function onButtonCLick() {
    if(arrNumUser.length < 5) {
        arrNumUser.push(inputNum.value);
        console.log(arrNumUser);
        inputNum.value = "";
    }
    console.log(arrNumUser.length);
    textNumUser.innerHTML = `Numeri inseriti: ${arrNumUser}`;
}

buttonNum.addEventListener('click', onButtonCLick);