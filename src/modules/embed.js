const Discord = require('discord.js');
const config = require('../../config.json');

module.exports = {
    errorEmbed(errorText) {
        return new Discord.MessageEmbed()
            .setTitle(':x:Ошибка')
            .setDescription(errorText)
            .setTimestamp()
            .setColor(config.embedColor);
    },
    commandInfo(command) {
        let commandStatus;
        if (command.adminCommand) commandStatus = 'Да';
        else commandStatus = 'Нет';

        return new Discord.MessageEmbed()
            .setTitle(`:page_facing_up:Описание команды ${config.prefix + command.name}`)
            .setDescription(command.description)
            .addField('Требует роль администратора:', commandStatus)
            .addField('Использование:', command.usage)
            .setTimestamp()
            .setColor(config.embedColor);
    },
    defaultEmbed(title, description) {
        return new Discord.MessageEmbed()
            .setTitle(title)
            .setDescription(description)
            .setTimestamp()
            .setColor(config.embedColor);
    }
}
