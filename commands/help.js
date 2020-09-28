const Discord = require('discord.js');
const config = require('../config.json');

module.exports = {
    name: 'help',
    showInHelp: true,
    description: 'Вывести полный список команд данного бота.',
    execute(message, client) {
        let embed = new Discord.MessageEmbed()
            .setTitle(':robot:Команды')
            .setDescription('Полный список команд данного бота:')
            .setTimestamp()
            .setColor(config.embedColor);
        for (const command of client.commands) {
            if (command[1].showInHelp) {
                embed['fields'].push({
                    name: config.prefix + command[1].name,
                    value: command[1].description,
                });
            }
        }
        message.channel.send(embed);
    }
};