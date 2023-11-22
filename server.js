const express = require('express');
const app = express();
const port = 8080;

const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
app.use(express.static('public'))


app.listen(port, function(){
    console.log('ok');
});

app.get('/', function(req,res){
    res.sendFile(__dirname + '/index.html');
});

app.get('/nonce', function(req,res){
    res.sendFile(__dirname + '/nonce.html');
});

app.get('/4-1', function(req,res){
    res.sendFile(__dirname + '/fourMinusOne.html');
});

app.get('/shop', function(req,res){
    res.sendFile(__dirname + '/shop.html');
});


const mongoose = require('mongoose');
//const { db, collection } = require('./schemas/userInfo.js');
var db = mongoose.connection;
mongoose.connect('mongodb+srv://nonce:scg2023!@nonce.wtefm6r.mongodb.net/',{

useNewUrlParser:true,
useUnifiedTopology:true
})
.then(()=> console.log('mongodb ok'))
.catch((err) => {
    console.log(err);
});

app.post('/submit', (req, res) => {
    var name = req.body.name;
    var number = req.body.number;

    var user = {
        "name" : name,
        "number" : number
    }

    db.collection('users').insertOne(user,(err,collection)=>{
        if(err){
            throw err;
        }
        console.log("submit successful");
    });

    return res.redirect('/');
})