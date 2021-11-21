const express = require('express');
const app = express()

app.use('/', express.static('public'))
app.use('/pic', express.static('public/image.html'))
app.use('/form', express.static('public/form.html'))
app.use('/formData', express.static('public/formData.html'))

app.get('/:hobby', (req, res, then) => {
    if(isNaN(req.params.hobby)){
        res.send(req.params.hobby);
        console.log('req.params.hobby:',req.params.hobby);
    } else {
        throw new Error('Status: 404');
    }
    then();
})

app.listen(5000);