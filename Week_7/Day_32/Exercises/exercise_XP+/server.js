const express = require('express')
const app = express()

app.use(express.static('public'))
app.get('/index.html/:id', (req, res) => {

    console.log('req.params.id:', req.params.id);
    res.send(req.params.id);

    let obj = {
        firstname: "John",
        lastname: "Doe"
    }
    res.send(obj)
})

app.listen(3000)