const { Guild } = require('../model/index');

async function getGuild(guild) {
    const guildData = await Guild.findOne({ id: guild.id });
    return guildData;
}

async function createGuild(guild) {
    const createGuild = new Guild({ id: guild.id });

    createGuild.save().then(x => {
        console.log(`Nouveaux serveur : (${x.id})`)
    });
}

async function updateGuild(guild, settings) {
    let guildData = await getGuild(guild);

    if(typeof guildData != 'object') guildData = {};

    for(const key in settings) {
        if(guildData[key] != settings[key]) guildData[key] = settings[key]
    }

    return guildData.updateOne(settings)
}

module.exports = {
    updateguild: updateGuild,
    createguild: createGuild,
    getguild: getGuild
};