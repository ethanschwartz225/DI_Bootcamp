const express = require('express');
const app = express();
const fs = require('fs');
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

app.use('/', express.static(__dirname + '/public'));

app.post('/namelist', (req, res, then) => {
    console.log(req.body);
    let names = [];

    try {
        const file = fs.readFileSync('./nameslist.json');
        names = JSON.parse(file);
    }
    catch(error) {
        console.log(error)
    }
    finally {
        names.push(req.body);
    }
    fs.writeFile('./nameslist.json', JSON.stringify(names), error => {
        if(error) {
            console.log('This is an error warning.');
        }
})
  res.send({message:'OK'})
then();
})

app.use('/names', express.static('nameslist.json'));



app.listen(3000, () => {
    console.log('Hello from localhost:3000!');
})