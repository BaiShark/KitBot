const Discord = require('discord.js');

const client = new Discord.Client();

require('./handlers/eventHandler')(client);
require('./handlers/commandHandler')(client);

client.login("NzUzMjY3Mzc3OTE1MDM1ODE5.X1js6Q.w746q3D1kJ4DQCQK-9c-ijmZ0vo");