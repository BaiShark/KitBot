const Discord = require('discord.js');
const config = require('../config.json');

module.exports = {
    name: 'about',
    adminCommand: true,
    usage: '**!about**',
    description: 'Вывести информацию о сервере и его создателе.',
    async execute(message) {
        if (!message.member.roles.cache.get(config.adminRole)) return;
        if (message.deletable) message.delete();

        const rulesEmbed = new Discord.MessageEmbed()
            .setTitle(':exclamation:Правила')
            .setDescription('Находясь на этом сервере вы соглашаетесь со следующими правилами:')
            .addField('Условия использования Discord','https://discord.com/terms')
            .addField('Правила сообщества Discord', 'https://discord.com/guidelines')
            .setColor(config.embedColor);

        const linkEmbed = new Discord.MessageEmbed()
            .setTitle(':link:Ссылки')
            .setDescription('Полезные ссылки:')
            .addField('Мой Steam', 'https://steamcommunity.com/id/kitaminka')
            .addField('Мой GitHub', 'https://github.com/Kitaminka')
            .addField('Приглашение на сервер','https://discord.gg/G3Dudc3')
            .setColor(config.embedColor);

        return message.channel.send(rulesEmbed).then( () => {message.channel.send(linkEmbed)});
    }
};