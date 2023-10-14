const express = require('express')
require('dotenv').config() // env congig
const cors = require('cors')
const PORT = 5000
const connectDb = require('./db/config')

const app = express()

//middleware
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.use(cors()) // cors middleware

app.use(`/api/user`, require('./route/userRoute')) // api path



// server listen
app.listen(PORT,() => {
    connectDb()
    console.log(`server is started and running @ http://localhost:${PORT}`)
})