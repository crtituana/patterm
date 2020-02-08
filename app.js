const express = require('express');
const decory = require('./decoryDuck');
const mallar = require('./mallarDuck');
const red = require('./redHeadQuak');
const robber = require('./robberHeat');
const app = express();
const patitoHule = new decory;
const donald = new mallar;
const roberto = new robber;
const pelirrojo = new red;


app.get("/mallarDuck",(req, res)=>{
    res.send(`${donald.nadar()}${donald.quak()}`)
    
});

app.get("/decoryDuck",(req, res)=>{
    res.send(`${patitoHule.fly()}${patitoHule.quak()}`)
    
});

app.get("/robberHeat",(req, res)=>{
    res.send(`${roberto.fly()}${roberto.quak()}`)
    
});

app.get("/redHeadQuak",(req, res)=>{
    res.send(`${pelirrojo.fly()}${pelirrojo.quak()}`)
    
})

module.exports = app;