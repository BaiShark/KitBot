const Discord = require('discord.js');
const config = require('../config.json');

module.exports = {
    name: 'about',
    execute(message) {
        if (!message.member.roles.cache.get(config.adminRole)) return;

        let embed = new Discord.MessageEmbed()
            .setTitle(':link:Ссылки')
            .addField('Мой Steam', 'https://steamcommunity.com/id/kitaminka')
            .addField('Мой GitHub', 'https://github.com/Kitaminka')
            .addField('Приглашение на сервер','https://discord.gg/G3Dudc3')
            .setColor(config.embedColor);
        return message.channel.send(embed);
    }
};