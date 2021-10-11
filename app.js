const button = document.querySelector('button')
const input = document.querySelector('input')
const div = document.querySelector('div')

// div.innerHTML = localStorage.getItem('Inputvalue')

// button.addEventListener('click', (req, res) => {
//     localStorage.setItem('Inputvalue', [1, 2, 3, 4])
//     div.innerHTML = input.value
// })




const arr = [1,2,3,4,5,6]

// JSON.stringify(arr)



localStorage.setItem('val', JSON.stringify(arr))
// console.log(arr)
console.log(localStorage.getItem('val'))


