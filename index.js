const db = require('./src/client/db');

function Client(client) {
    if(!client.ws) throw new Error("Client invalide");

    client.on('messageCreate', async message => {
        // Not add the bot in your database
        if(message.author.bot) return;
    });

    module.exports = {
        client: client,
        setClient: Client,
        db: db
    }

    console.log('Client connecter');
}

module.exports = {
    client: null,
    setClient: Client,
    db: db
}