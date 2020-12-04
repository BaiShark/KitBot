const Discord = require('discord.js');
const DiscordPlayer = require('discord-player');
require('dotenv').config();

const client = new Discord.Client();
const player = new DiscordPlayer.Player(client);
client.player = player;

require('./handlers/eventHandler')(client);
require('./handlers/commandHandler')(client);

client.login(process.env.token);