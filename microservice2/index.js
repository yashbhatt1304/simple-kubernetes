const express = require('express')
const app = express()

app.get('/', (req,res)=>{
    res.send('Hello World! This is MS2 service.')
})

app.get('/ms2/user', (req,res)=>{
    res.send({'msg':'Microservice 2: User Said Hi'})
})

app.listen(3002, ()=>{
    console.log('Microservice 2 is listening at port 3002')
})
