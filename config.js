const config = new function() {
    this.mcAddress = 'mc.mxve.de'
    this.mcPort = 25565
    this.port = 1998
    this.mapUrl = `http://${this.mcAddress}:8123/`
    this.maxPlayers = 20
}

module.exports = config