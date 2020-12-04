const Discord = require('discord.js');
const error = require('../modules/error');
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
                .setDescription('Чтобы получить полную информацию по конкретной команде, напишите **!help <имя команды>**. Полный список команд данного бота:')
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
                embed = error.embed('Введенная вами команда не существует.');
            } else {
                const command = client.commands.get(args[0]);
                let commandStatus;

                if (client.commands.get(args[0]).adminCommand) commandStatus = 'Да';
                else commandStatus = 'Нет';
                embed = new Discord.MessageEmbed()
                    .setTitle(`:page_facing_up:Описание команды ${config.prefix + args[0]}`)
                    .setDescription(command.description)
                    .addField('Требует роль администратора:', commandStatus)
                    .addField('Использование:', command.usage)
                    .setTimestamp()
                    .setColor(config.embedColor);
            }
        }
        return message.channel.send(embed);
    }
};