const http= require('http')
console.log(http)

const server =http.createServer((request,response) => {
    console.log(request)
})

console.log(server)