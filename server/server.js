const express = require('express')
const app = express();
var bodyParser = require('body-parser');
var mongoose= require('mongoose');
const port = process.env.PORT || 5000 ;
var tracker = require('./models/tracker');

// mongodb connection 
if (mongoose.connect('mongodb://localhost/trackerdev', {useUnifiedTopology: true,useNewUrlParser:true,useFindAndModify:true})){
    console.log('Connected to database on localhost !');
}else{
    console.log('Error connecting to database on localhost !');
}

// create application/json parser
var jsonParser = bodyParser.json()

// create application/x-www-form-urlencoded parser
var urlencodedParser = bodyParser.urlencoded({ extended: false })

// An api endpoint that returns a short list of items
app.get('/tracker/:token', (req,res) => {
    id=req.params.token;
    tracker.find({_id:id}, function(err, trackers) {
        if(err){
            res.send('fail');
           }else{
            res.send(trackers);
     }
    })
    
});

app.post('/create',jsonParser, (req,res) => {
   name=req.body.uniqueName;
   var newTracker= tracker({
       name:name,
       location:''
   });
   newTracker.save(function(err){
       if(err){
        res.send('fail');
       }else{
        res.send('success');
       }
   })
   
});

app.post('/update',jsonParser, (req,res) => {
    console.log(req.body);
    tracker.findOneAndUpdate({ name:req.body.name }, { $set:{location: req.body.location}}, function(err,tracker) {
        if(err){
            console.log(err);
            res.send('fail');
           }else{
            res.send('success');
           }
      });
    
 });

 app.get('/trackers',jsonParser, (req,res) => {
    tracker.find({}, function(err, trackers) {
        if(err){
            res.send('fail');
           }else{
            res.send(trackers);
           }
    })
 });

app.listen(port, () => console.log(`Server started listening on port ${port}!`))