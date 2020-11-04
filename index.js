const Discord = require('discord.js');
require('dotenv').config();

const client = new Discord.Client();

require('./handlers/eventHandler')(client);
require('./handlers/commandHandler')(client);

client.login(process.env.TOKEN);