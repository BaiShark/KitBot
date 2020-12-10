const Discord = require('discord.js');
require('dotenv').config();

const client = new Discord.Client();

require('./src/handlers/eventHandler')(client);
require('./src/handlers/commandHandler')(client);

client.login(process.env.TOKEN);