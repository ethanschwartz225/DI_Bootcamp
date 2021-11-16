const express = require('express')
const app = express()

app.get('/', (req, res) => {
    res.send('<html lang="en"><body><h1>This is an HTML tag!</h1></body></html>')
})

app.listen(3000)