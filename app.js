const a = document.querySelectorAll('input')[0]
const b = document.querySelectorAll('input')[1]
const add = document.querySelector('#add')
const multiply = document.querySelector('#multiply')
const subtract = document.querySelector('#subtract')
const resultBox = document.querySelector('.result')

const sum = () => {
    const result= parseInt(a.value) + parseInt(b.value)
    resultBox.innerHTML= result
}

const product = () => {
    const result= parseInt(a.value) * parseInt(b.value)
    resultBox.innerHTML= result
}
const minus = () => {
    const result= parseInt(a.value) - parseInt(b.value)
    resultBox.innerHTML= result
}

const calculate =(event, operation) => {
    // if(op == 'add'){
    //     console.log('Adding')
    // } else if (op == 'multiply'){
    //     console.log('Multiply')
    // }

    switch (operation) {
        case "add":
            resultBox.innerHTML = parseInt(a.value) + parseInt(b.value)
            break
        case "multply":
            resultBox.innerHTML = parseInt(a.value) + parseInt(b.value)
            break
        case "subtract":
            resultBox.innerHTML = parseInt(a.value) - parseFloat(b.value)
            break    
        default:
            resultBox.innerHTML = "Not a valid operation"        
    }
}



// add.addEventListener('click', sum)
// multiply.addEventListener('click', product)


add.addEventListener('click', (event) => { calculate(event,'add')})

multiply.addEventListener('click',(event) => { calculate(event,'multiply')})

subtract.addEventListener('click',(event) => { calculate(event,'subtract')})

