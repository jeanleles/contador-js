const btnDecrease = document.getElementById('decrease')
const btnEncrease = document.getElementById('encrease')

let currentNumber = 0

function decrease() {
   if(currentNumber > 0){
        document.getElementById('number').innerHTML = currentNumber - 1
        currentNumber = currentNumber - 1
        if(currentNumber == 0) {
            btnDecrease.classList.add('button-disabled')
        }
   }
}

btnDecrease.addEventListener('click', decrease)

function encrease() {
    document.getElementById('number').innerHTML = currentNumber + 1
    currentNumber = currentNumber + 1
    if(currentNumber > 0) {
        btnDecrease.classList.remove('button-disabled')
    }
 }

 btnEncrease.addEventListener('click', encrease)

function zero() {
    currentNumber = 0
    document.getElementById('number').innerHTML = 0
    btnDecrease.classList.add('button-disabled')
}

document.getElementById('zero').addEventListener('click', zero)