# This module

## Discord economie are a symple module to make a basic économis systeme with MongoDB or Mysql.

<br>
<br>

### To setup with mongoDB (to get/make uri go to this tutorial : https://www.youtube.com/watch?v=aygw0wjW5bA)

<br>
<br>

> ### NOTE : If you see "user" or "guild" you just add USER or GUILD, not id.

<br>
<br>

## To Import module

```js
const economie = require('discordjs-economie');
```

<br>
<br>

## To use the module with MongoDB
```js
const economie = require('discordjs-economie');

economie.db.mongooseConnect('mongoose uri');

economie.setClient(client);
```

> To Remove/Add money

```js
const economie = require('discordjs-economie');

economie.db.mongooseConnect('mongoose uri');

economie.setClient(client);

economie.db.mongoose.addMoney(ammount, user, guild);
economie.db.mongoose.removeMoney(ammount, user, guild);
```

> To get money off any user

```js
const economie = require('discordjs-economie');

economie.setClient(client);

economie.db.mongooseConnect('mongoose uri');

economie.db.mongoose.getMoney(user, guild);
```

<br>
<br>

## To use the module with Mysql

```js
const economie = require('discordjs-economie');

economie.db.mysqlConnect('host', 'user', 'port', 'password', 'database');

economie.setClient(client);
```

> To Remove/Add money

```js
const economie = require('discordjs-economie');

economie.db.mysqlConnect('host', 'user', 'port', 'password', 'database');

economie.setClient(client);

economie.db.mysql.addMoney(ammount, user, guild);
economie.db.mysql.removeMoney(ammount, user, guild);
```

> To get money off any user

```js
const economie = require('discordjs-economie');

economie.setClient(client);

economie.db.mysqlConnect('host', 'user', 'port', 'password', 'database');

economie.db.mysql.getMoney(user, guild);
```

<br>
<br>

> If you have a problem, you can contact us on github, and if you have a problematic error you will have to create an issue.

<br>
<br>
<br>

>## Github
<br>

[Jules010209](https://github.com/Jules010209) - [Yokachi](https://github.com/Yokachi)