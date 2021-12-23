const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const knex = require('./knex');

app.use(cors())

app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

app.get('/', (req, res) => res.end('hello from a server localhost:5000'))

app.post('/new_user', (req, res) => {

    knex.db('card_holders')
        .insert(
            {
                firstname: req.body.firstName,
                lastname: req.body.lastName,
                email: req.body.email,
                username: req.body.username,
                password: req.body.password
            }
        )
        .then(function() {
            res.json({success: true, message:'Registration successful. '})
        })
        .catch(err => console.log(err))
})

app.listen(5000, () => {
    console.log('You are listening on localhost:5000.')
})