const Discord = require('discord.js');
const Embed = require('../modules/embed');
const config = require('../config.json');

module.exports = {
    name: 'help',
    adminCommand: false,
    usage: `**${config.prefix}help** или **${config.prefix}help <имя_команды>**`,
    description: 'Вывести полный список доступных команд.',
    async execute(message, args, client) {
        let embed;
        if (!args[0]) {
            embed = new Discord.MessageEmbed()
                .setTitle(':robot:Список команд')
                .setDescription(`Чтобы получить полную информацию по конкретной команде, напишите **${config.prefix}help <имя команды>**. Полный список команд данного бота:`)
                .setTimestamp()
                .setColor(config.embedColor);
            for (const command of client.commands) {
                if (command[1].adminCommand && message.member.roles.cache.get(config.adminRole)) {
                    embed['fields'].push({
                        name: config.prefix + command[1].name,
                        value: command[1].description,
                        inline: false,
                    });
                } else if (!command[1].adminCommand) {
                    embed['fields'].push({
                        name: config.prefix + command[1].name,
                        value: command[1].description,
                        inline: false,
                    });
                }
            }
        } else {
            if (!client.commands.has(args[0])) {
                embed = Embed.errorEmbed('Введенная вами команда не существует.');
            } else {
                embed = Embed.commandInfo(client.commands.get(args[0]));
            }
        }
        return message.channel.send(embed);
    }
};