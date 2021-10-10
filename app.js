var body = document.querySelector('body')
var label = document.querySelector('label')


const callbackfunc =(event) => {
    body.classList.toggle('dark')
}

label.addEventListener('click', callbackfunc)
