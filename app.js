const express = require('express')
const util = require('minecraft-server-util')

const config = require('./config.js')

const app = express()
app.set('view engine', 'ejs')
app.use(express.static('public'))

app.get('/map', (req, res) => {
    res.render('map', {config})
})

app.get('/', async (req, res) => {
    const query = await util.queryFull(config.mcAddress, config.mcPort).catch((error) => console.error(error))
    if (query === undefined) {
        res.render('index', {players: undefined, slots: undefined, version: undefined, config})
    } else {
        res.render('index', {players: query.players.list, slots: query.players.max, version: query.version, config})
    }
})

app.listen(1998, () => {
    console.log(`up`)
})