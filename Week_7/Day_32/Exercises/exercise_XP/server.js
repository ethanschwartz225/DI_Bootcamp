const http = require('http')

const server = http.createServer((request, response) => {
    let obj = {
        firstname: "John",
        lastname: "Doe"
    }
    response.end(JSON.stringify(obj))
})

server.listen(8080)
