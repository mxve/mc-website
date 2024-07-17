const express = require('express')
const util = require('minecraft-server-util')

const config = require('./config.js')

const app = express()
app.set('view engine', 'ejs')
app.use(express.static('public'))

app.get('/setup', (req, res) => {
    res.render('setup', {config})
})

async function index(req, res, all = undefined) {
    const query = await util.queryFull(config.mcAddress, config.mcPort).catch((error) => console.error(error))
    if (query === undefined) {
        res.render('index', {players: undefined, slots: undefined, version: undefined, all, config})
    } else {
        res.render('index', {players: query.players.list, slots: query.players.max, version: query.version, all, config})
    }
}

app.get('/', async (req, res) => {
    index(req, res)
})

app.get('/all', async (req, res) => {
    index(req, res, true)
})

app.listen(config.port, () => {
    console.log(`up`)
})