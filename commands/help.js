const Discord = require('discord.js');
const config = require('../config.json');

module.exports = {
    name: 'help',
    adminCommand: false,
    description: 'Вывести полный список доступных команд.',
    execute(message, client) {
        let embed = new Discord.MessageEmbed()
            .setTitle(':robot:Команды')
            .setDescription('Полный список команд данного бота:')
            .setTimestamp()
            .setColor(config.embedColor);
        for (const command of client.commands) {
            if (command[1].adminCommand && message.member.roles.cache.get(config.adminRole)) {
                embed['fields'].push({
                    name: config.prefix + command[1].name,
                    value: command[1].description,
                    inline: true,
                });
            } else if (!command[1].adminCommand) {
                embed['fields'].push({
                    name: config.prefix + command[1].name,
                    value: command[1].description,
                    inline: true,
                });
            }
        }
        message.channel.send(embed);
    }
};