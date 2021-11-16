const http = require('http');
const server = http.createServer((request, response) => {
    response.setHeader('Content-Type', 'text/HTML')
    response.end('' +
        '<html lang="">' +
            '<body>' +
                '<header>' +
                    '<h1>This is my first response.</h1>' +
                    '<h1>This is my second response.</h1>' +
                    '<h3>This is my third response.</h3>' +
                '</header>' +
            '</body>' +
        '</html>')
})
server.listen(3000)

