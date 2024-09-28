const express = require('express')
const app = express()
const mongoose = require('mongoose')
const cors = require('cors')
require('dotenv').config()

app.use(express.json())
app.use(cors())

const dbConnection = async () => {
    try {
        await mongoose.connect(process.env.DB_URI)
        console.log('server connection established')
    } catch (err) {
        console.log(err.message)
    }
}
dbConnection()
app.listen(3000, () => {
    console.log(`Listening on port 3000`)
})