const express = require('express')
const fetch = require('node-fetch');

require('dotenv').config()

const app = express()

app.get('/', (req,res)=>{
    res.send('Hello World! This is MS1 service.')
})

app.get('/ms1/user', (req,res)=>{
    res.send('Hello World from MS1 User!')
})



app.get('/ms2', async (req,res)=>{
    const apiRes = await fetch(`${process.env.URL}:3001/user`)
    const apiResJson = await apiRes.json()
    console.log(apiResJson)    
    res.send(apiResJson)
})

app.get('/ms3', async (req,res)=>{
    const apiRes = await fetch(`${process.env.URL}:3002/user`)
    const apiResJson = await apiRes.json()
    console.log(apiResJson)
    res.send(apiResJson)
})

app.listen(3001, ()=>{
    console.log('Microservice 1 is listening at port 3001')
})
