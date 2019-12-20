const express = require('express')
const app = express();
var bodyParser = require('body-parser');

const port = process.env.PORT || 5000 ;

// create application/json parser
var jsonParser = bodyParser.json()

// create application/x-www-form-urlencoded parser
var urlencodedParser = bodyParser.urlencoded({ extended: false })

// An api endpoint that returns a short list of items
app.get('/tracker/:token', (req,res) => {
    res.send(req.params);
});

app.post('/create',jsonParser, (req,res) => {
   console.log(req.body.uniqueName);
   res.sendStatus(200);
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`))