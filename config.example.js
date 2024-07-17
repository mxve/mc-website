const config = new function() {
    this.mcAddress = 'mc.mxve.de'
    this.mcPort = 25565
    this.port = 1998
    this.mapUrl = `https://map.${this.mcAddress}/`
    this.maxPlayers = 15
    this.setupContent = `
    <h1>Setup</h1>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam at nisl ac risus ultrices tincidunt. Nullam quis metus nec nunc tincidunt fermentum. Donec nec orci nec nunc tincidunt fermentum. Nulla facilisi. Sed in odio at libero ultrices tincidunt. Nullam quis metus nec nunc tincidunt fermentum. Donec nec orci nec nunc tincidunt fermentum. Nulla facilisi. Sed in odio at libero ultrices tincidunt.
    `
}

module.exports = config