const fs =require('fs')
fs.readFile('./text.txt','ucs-2',(error, data)=>{
    if(error) console.log(error)
    else console.log( data)

})