const express = require('express')
const app = express() 
const cors = require('cors')

app.use(cors())

app.post('api/createUser', (req, res)=> {
    console.log(req,body)
res.json({status: 'ok'})

})
app.listen(1137, () => {
console.log('Server Started on 1337')

})