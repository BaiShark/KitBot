const Discord = require('discord.js');
const config = require('./config.json');

const client = new Discord.Client();

require('./handlers/eventHandler')(client);
require('./handlers/commandHandler')(client);

client.login(config.token);