const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const fs = require('fs');

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.use('/', express.static('public'));

app.post('/list',(req,res)=>{
  console.log(req.body);
  let shoppingList = [];
    try {
      const file = fs.readFileSync('./list');
      shoppingList = JSON.parse(file)
    }
    catch(error){
      console.log(error);
    }
    finally {
      shoppingList.push(req.body)
    }

  fs.writeFile('./list', JSON.stringify(shoppingList), err => {
    if(err){
      console.log('error writing to file');
    }
  })

  res.send({message:'OK'})
})

app.use('/list', express.static(__dirname + '/list'))

app.use('/listpage', express.static(__dirname + '/listPage.html'))


app.listen(3000);