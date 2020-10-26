const Discord = require('discord.js');

const client = new Discord.Client();

require('./handlers/eventHandler')(client);
require('./handlers/commandHandler')(client);

client.login("NzUzMjY3Mzc3OTE1MDM1ODE5.X1js6Q.QHNMAeUZ9JXIS8HZpYOE0LmIhA8");