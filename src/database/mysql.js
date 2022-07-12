const sql = require('mysql2');

function mysqlConnect(host, user, port, password, database) {
    const mysql = new sql.createConnection({
        host: host,
        user: user,
        port: port,
        password: password,
        database: database
    });

    mysql.connect(function(err) {
        if(err) throw err;
    
        console.log('Connéctée a la database mysql');

        var sql = "CREATE TABLE if not exists economie (guildID VARCHAR(255), userID VARCHAR(255), userName VARCHAR(255), moneyAmount VARCHAR(255))";

        mysql.query(sql, function(errr, other) {
            if(errr) throw errr;
        });
    });

    module.exports = mysql;
}

module.exports = mysqlConnect;