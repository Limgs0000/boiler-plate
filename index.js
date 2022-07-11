const express = require('express')
const app = express()
const port = 5000

const mongoose = require('mongoose')
mongoose.connect('mongodb+srv://user:user@boilerplate.qttdow0.mongodb.net/?retryWrites=true&w=majority', {
    useNewUrlParser: true, useUnifiedTopology: true
}).then(() => console.log("MongoDB Connected..."))
  .catch(err => console.log(err))

app.get('/', (req, res) => {
  res.send('Hello World! ~ ㅇㅇㅇ')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})