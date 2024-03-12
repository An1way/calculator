let num = 42
let firstName = 'Aniway'
 const isProgrammer = true
 const resultElement = document.getElementById('result')
const input1 = document.getElementById('input1')
const input2 = document.getElementById('input2')
const submitBtn = document.getElementById('submit')
const plusBtn = document.getElementById('plus')
const minusBtn = document.getElementById('minus')
const umnojenieBtn = document.getElementById('umnojenie')
const delenieBtn = document.getElementById('delenie')
let action = '+'


// console.log(typeof sum)

plusBtn.onclick = function () {
    action = '+'
}
minusBtn.onclick = function () {
    action = '-'
}

umnojenieBtn.onclick = function () {
    action = '*'
}
delenieBtn.onclick = function () {
    action = '/'
}

function printResult(result) {
    if (result < 0) {
        resultElement.style.color ='red'
    } else{
        resultElement.style.color ='green'
    }
resultElement.textContent = result
    }
function computeNumbersWitchAction(input1, input2,actionSymbol) {
    const  num1 = Number(input1.value)
    const  num2 = Number(input2.value)
    if (actionSymbol == '+') {
       return num1 + num2
    }
    else if (actionSymbol == '-') {
       return num1 - num2
    }
    
    if (actionSymbol == '*') {
        return num1 * num2
     }
    else if (actionSymbol == '/') {
        return num1 / num2
     }
    return actionSymbol = '+' ? num1 + num2 : num1 - num2
    return actionSymbol = '*' ? num1 * num2 : num1 / num2
}


submitBtn.onclick = function () {
    const result = computeNumbersWitchAction(input1, input2, action)
    printResult(result)
    }

    if (action == '+') {
     const sum = Number(input1.value) + Number(input2.value)
     printResult(sum)

    }   else if (action == '-') {
         const sum = Number(input1.value) - Number(input2.value)
    
         printResult(sum)
      }
