// const a = document.querySelectorAll('input')[0]
// const b = document.querySelectorAll('input')[1]
// const add = document.querySelector('#add')
// const multiply = document.querySelector('#multiply')
// const subtract = document.querySelector('#subtract')
// const resultBox = document.querySelector('.result')

// const sum = () => {
//     const result= parseInt(a.value) + parseInt(b.value)
//     resultBox.innerHTML= result
// }

// const product = () => {
//     const result= parseInt(a.value) * parseInt(b.value)
//     resultBox.innerHTML= result
// }
// const minus = () => {
//     const result= parseInt(a.value) - parseInt(b.value)
//     resultBox.innerHTML= result
// }

// const calculate =(event, operation) => {
//     // if(op == 'add'){
//     //     console.log('Adding')
//     // } else if (op == 'multiply'){
//     //     console.log('Multiply')
//     // }

//     switch (operation) {
//         case "add":
//             resultBox.innerHTML = parseInt(a.value) + parseInt(b.value)
//             break
//         case "multply":
//             resultBox.innerHTML = parseInt(a.value) + parseInt(b.value)
//             break
//         case "subtract":
//             resultBox.innerHTML = parseInt(a.value) - parseFloat(b.value)
//             break    
//         default:
//             resultBox.innerHTML = "Not a valid operation"        
//     }
// }



// // add.addEventListener('click', sum)
// // multiply.addEventListener('click', product)


// add.addEventListener('click', (event) => { calculate(event,'add')})

// multiply.addEventListener('click',(event) => { calculate(event,'multiply')})

// subtract.addEventListener('click',(event) => { calculate(event,'subtract')})






var arr = [1, 2, 3, 4, 5, 6, 7, 8]
var arr_1 = arr.slice(5,7)
console.log(arr_1)


// var new_arr=[]

// for(var i = 0; i<arr.length; i++){
//     if(arr[i]%2!=0) new_arr.push(arr[i])

// }
// console.log(new_arr)


// var new_arr = arr.filter((element, index) =>  {
//     if(element %2 === 0 ) return true
// })

// console.log(new_arr)



// console.log(arr.splice(5, 2))
// console.log(arr)