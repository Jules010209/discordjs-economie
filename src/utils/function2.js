// -------------------------
//
//           ADD
//
// -------------------------

async function addMoney(add_amount, add_user, guild) {
    const mysql = require('../database/mysql.js');

    const index = require('../../index');
    const client = index.client;

    if(!client.ws) throw new Error('Please connect client with : economie.setClient(client)');
    if(!guild) throw new Error('Please define an valid guild');

    if(!add_amount) throw new Error('Please define an amount');
    if(parseInt(add_amount) !== add_amount) throw new Error('Amount n\'est pas un int');
    if(add_amount == 0) throw new Error('Amount must be > 0');
    if(!add_user) throw new Error('Please define an member');
    
    mysql.query(`SELECT * FROM economie WHERE (userID, guildID) = ('${add_user.id}', '${guild.id}')`, async(err, req) => {
        if(err) throw err;
        
        if(req.length < 1) {
            let sql = `INSERT INTO economie (guildID, userID, userName, moneyAmount) VALUES ('${guild.id}', '${add_user.id}', '${add_user.username}', '0')`;
            
            mysql.query(sql, function(err) {
                if(err) throw err;
            });
        } else {
            let int = parseInt(req[0].moneyAmount);
            let int2 = add_amount;
            let calcul = int + int2;

            let sql = `UPDATE economie SET moneyAmount = '${calcul}' WHERE userID = ${add_user.id}`;

            mysql.query(sql, function(err) {
                if(err) throw err;
            });
        }
    });
}

// -------------------------
//
//          REMOVE
//
// -------------------------

async function removeMoney(remove_amount, remove_user, guild) {
    const mysql = require('../database/mysql.js');

    const index = require('../../index');
    const client = index.client;

    if(!client.ws) throw new Error("Please connect client with : economie.setClient(client)")
    if(!guild) throw new Error('Please define an valid guild');

    if(!remove_amount) throw new Error('Please define an amount');
    if(parseInt(remove_amount) !== remove_amount) throw new Error('Amount is not a int');
    if(remove_amount == 0) throw new Error('Amount must be > 0');
    if(!remove_user) throw new Error('Please define an member');

    mysql.query(`SELECT * FROM economie WHERE (userID, guildID) = ('${remove_user.id}', '${guild.id}')`, async(err, req) => {
        if(err) throw err;
        
        if(req.length < 1) {
            let sql = `INSERT INTO economie (guildID, userID, userName, moneyAmount) VALUES ('${guild.id}', '${remove_user.id}', '${remove_user.username}', '0')`;
            
            mysql.query(sql, function(err) {
                if(err) throw err;
            });
        } else {
            let int = parseInt(req[0].moneyAmount);
            let int2 = remove_amount;
            let calcul = int - int2;

            if(calcul < 0){
                return;
            } else {
                let sql = `UPDATE economie SET moneyAmount = '${calcul}' WHERE userID = ${remove_user.id}`;
    
                mysql.query(sql, function(err) {
                    if(err) throw err;
                });
            }
        }
    });
}

// -------------------------
//
//            GET
//
// -------------------------

async function getMoney(user, guild) {
    const mysql = require('../database/mysql.js');

    const index = require('../../index');
    const client = index.client;

    if(!client.ws) throw new Error("Please connect client with : economie.setClient(client)");
    if(!guild) throw new Error('Please define an valid guild');
    
    mysql.query(`SELECT * FROM economie WHERE (userID, guildID) = ('${user.id}', '${guild.id}')`, (err, req) => {
        if(err) throw err;

        if(req.length < 1) {
            return null;
        } else {
            let reponse = req[0].moneyAmount;
            
            return reponse;
        }
    });
}

module.exports = { addMoney, removeMoney, getMoney };