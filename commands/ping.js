const Discord = require('discord.js');
const config = require('../config.json');

module.exports = {
    name: 'ping',
    adminCommand: false,
    description: 'Вывести пинг бота.',
    execute(message) {
        let embed = new Discord.MessageEmbed()
            .setTitle('Пинг...')
            .setColor(config.embedColor);
        message.channel.send(embed).then(res => {
            const ping = res.createdTimestamp - message.createdTimestamp;

            embed = new Discord.MessageEmbed()
                .setTitle(':ping_pong:Понг!')
                .setDescription(`Пинг бота ${ping}ms!`)
                .setTimestamp()
                .setColor(config.embedColor);

            return res.edit(embed);
        });
    }
};