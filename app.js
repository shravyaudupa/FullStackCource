const fs =require('fs')


// fs.readFile('./text.txt','ucs-2',(error, data)=>{
//     if(error) console.log(error)
//     else console.log( data)

// })

console.log(fs.readFileSync('./text.txt', 'utf8'))

console.log("I'm shravya")