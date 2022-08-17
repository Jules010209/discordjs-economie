// -------------------------
//
//           ADD
//
// -------------------------

async function addMoney(add_amount, add_user, guild) {
    const adfunc = require('../utils/mongooseFunc');

    const index = require('../../index');
    const client = index.client;

    if(!client.ws) throw new Error("Please connect client with : economie.setClient(client)")
    if(!guild.members) throw new Error('Please define an valid guild')
    const guildSettings = await adfunc.getguild(guild)
    if(!guildSettings || !guildSettings.users) {
        await adfunc.createguild(guild);
    }

    if(!add_amount) throw new Error('Please define an amount');
    if(parseInt(add_amount) !== add_amount) throw new Error('Amount is not a int');
    if(add_amount == 0) throw new Error('Amount must be > 0');
    if(!add_user) throw new Error('Please define an member');

    const filtredUser = guildSettings.users.filter(u => u.userId == add_user.id);

    if(filtredUser.length == 0) {
        let UserArray = await guildSettings.users;

        const userTemplate = {
            userId: add_user.id,
            userName: add_user.username,
            moneyAmmount: 0,
        }

        UserArray.push(userTemplate);
        adfunc.updateguild(guild, { users: UserArray });

    } else if(filtredUser.length > 1) {
        throw new Error('An error have been ocured');
    }

    for(userss of filtredUser) {
        amountAfter = userss.moneyAmmount + add_amount
        const filtredUsers = guildSettings.users.map(u => u.userId).indexOf(add_user.id);
        if(filtredUsers == -1) throw new Error({ content:`ERREUR`, ephemeral:true });
        guildSettings.users.splice(filtredUsers, 1);
        adfunc.updateguild(guild, { users: guildSettings.users });
        const UserArray = guildSettings.users;

        const userTemplate = {
            userId: userss.userId,
            userName: userss.userName,
            moneyAmmount: userss.moneyAmmount + add_amount,
        }

        UserArray.push(userTemplate);
        adfunc.updateguild(guild, { users: UserArray})
    }
}

// -------------------------
//
//          REMOVE
//
// -------------------------

async function removeMoney(remove_amount, remove_user, guild) {
    const adfunc = require('../utils/mongooseFunc');

    const index = require('../../index');
    const client = index.client;

    if(!client.ws) throw new Error("Please connect client with : economie.setClient(client)")
    if(!guild.members) throw new Error('Please define an valid guild')
    const guildSettings = await adfunc.getguild(guild)
    if(!guildSettings || !guildSettings.users) {
        await adfunc.createguild(guild);
    }

    if(!remove_amount) throw new Error('Please define an amount');
    if(parseInt(remove_amount) !== remove_amount) throw new Error('Amount is not a int');
    if(remove_amount == 0) throw new Error('Amount must be > 0');
    if(!remove_user) throw new Error('Please define an member');

    const filtredUser = guildSettings.users.filter(u => u.userId == remove_user.id);


    if(filtredUser.length == 0) {
        let UserArray = await guildSettings.users;

        const userTemplate = {
            userId: remove_user.id,
            userName: remove_user.username,
            moneyAmmount: 0,
        }

        UserArray.push(userTemplate);
        adfunc.updateguild(guild, { users: UserArray });
    } else if(filtredUser.length > 1) {
        throw new Error('An error have been ocured');
    }

    for(userss of filtredUser) {
        amountAfter = userss.moneyAmmount + remove_amount
        const filtredUsers = guildSettings.users.map(u => u.userId).indexOf(remove_user.id);
        if(filtredUsers == -1) throw new Error({ content:`erreur`, ephemeral:true });
        guildSettings.users.splice(filtredUsers, 1);
        adfunc.updateguild(guild, { users: guildSettings.users });
        const UserArray = guildSettings.users;

        if((userss.moneyAmmount - remove_amount) < 0) return

        const userTemplate = {
            userId: userss.userId,
            userName: userss.userName,
            moneyAmmount: userss.moneyAmmount - remove_amount,
        }

        UserArray.push(userTemplate);
        adfunc.updateguild(guild, { users: UserArray });
    }
}

// -------------------------
//
//            GET
//
// -------------------------

async function getMoney(userId, guild) {
    const adfunc = require('../utils/mongooseFunc');

    const index = require('../../index');
    const client = index.client;

    if(!client.ws) throw new Error("Please connect client with : economie.setClient(client)");
    if(!guild.members) throw new Error('Please define an valid guild');
    const guildSettings = await adfunc.getguild(guild);
    if(!guildSettings || !guildSettings.users) {
        await adfunc.createguild(guild);
    }

    const filtredUser = guildSettings.users.filter(u => u.userId == userId);

    if(filtredUser.length == 0) {
        return 0;
    } else if(filtredUser.length > 1) {
        throw new Error('An error have been ocured');
    }

    for(userss of filtredUser) {
        // return userss.moneyAmmount;
        console.log(userss.moneyAmmount)
    }
}

module.exports = { addMoney, removeMoney, getMoney };