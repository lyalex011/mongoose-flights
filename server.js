const express = require('express')
const jsxEngine = require('jsx-view-engine')
const methodOverride = require('method-override')
const flightRoutes = require('./routes/flightRoutes')

require('dotenv').config()



const mongoConfig = require('./config')
const app = express()
const PORT = 8082

mongoConfig()


app.set('view engine', 'jsx')
app.engine('jsx', jsxEngine())

app.use(methodOverride('_method'))
app.use(express.urlencoded({ extended: true }))
app.use(express.static('public'))

app.use('/flights', flightRoutes)

app.get("/", (req,res) => {
    res.send('Hello!')
})

app.listen(PORT)