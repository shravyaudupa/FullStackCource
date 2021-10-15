// const http= require('http')
// const fs = require('fs')
// const path = require('path')
// const { url } = require('inspector')
// // console.log(http)

// const server =http.createServer((request,response) => {
    
//     const {url} = request
//     if(url== '/login') {
//         response.write('<h1>Login</h1>')
//         response.end()
//     }
//     if(url== '/signup') {
//         response.write('<h1>SignUp</h1>')
//         response.end()
//     }
// })

// server.listen(3000, () => {
//     console.log(`Server listening at port : ${3000}`)
// })



const data =[{ name: "shravya"}, { name: "sarva"}, { name: "vishwa"}]

const express = require('express')
const app = express()

app.get('/getNames', (req, res) => {
    res.send(data)
})

app.listen(3000, () => {
    console.log("server listening a port 3000")
})