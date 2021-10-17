const express = require('express')
const PORT = 3000
const app = express()

app.get('/', (req,res)=>{
    console.log(req.headers)
    res.send('GET')
})


app.listen(PORT,() =>{
    console.log(`Server running at PORT ${3000}`)
})


