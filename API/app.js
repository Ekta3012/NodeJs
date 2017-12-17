var express=require('express');
var app=express();
var bodyParser=require('body-parser');
var mongoose=require('mongoose');

//connect to mongoose

mongoose.connect('mongodb://localhost/api');
var db=mongoose.connection;

app.get('/',function(req,res){
    res.send('Hello world');
});

app.get('/api/genres',function(req,res){

});

app.listen(3000);
console.log('connected');