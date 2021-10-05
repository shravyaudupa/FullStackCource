let value= new Promise((resolve,reject)=>{
    setTimeout(()=>{
        reject('Hello')
        console.log(value)
    }, 3000)
    
})
console.log(value)