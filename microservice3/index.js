const express = require('express')
const app = express()

app.get('/', (req,res)=>{
    res.send('Hello World! This is MS3 service.')
})

app.get('/ms3/user', (req,res)=>{
    res.send({'msg':'Microservice 3: User Said Hola'})
})

app.listen(3003, ()=>{
    console.log('Microservice 3 is listening at port 3003')
})
