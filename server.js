const express = require('express')
const PORT = 3000
const app = express()

app.post('/signup',(req, res) =>{
    console.log(req.body)
    res.send('tttt')
})

app.listen(PORT,() => {
    console.log(`Server running at PORT ${PORT}`)
})


