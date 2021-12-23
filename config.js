const config = new function() {
    this.mcAddress = 'mc.mxve.de'
    this.mcPort = 25565
    this.port = 1998
    this.mapUrl = `https://map.${this.mcAddress}/`
    this.maxPlayers = 15
}

module.exports = config