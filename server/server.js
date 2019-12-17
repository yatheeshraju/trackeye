const express = require('express')
const app = express();

const port = process.env.PORT || 5000 ;


// An api endpoint that returns a short list of items
app.get('/tracker/:token', (req,res) => {
    res.send(req.params);
});



app.listen(port, () => console.log(`Example app listening on port ${port}!`))