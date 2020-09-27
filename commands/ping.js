const Discord = require('discord.js');
const config = require('../config.json');

module.exports = {
    name: 'ping',
    description: 'Information about the arguments provided.',
    execute(message) {
        let embed = new Discord.MessageEmbed()
            .setTitle('Пинг...')
            .setColor(config.embedColor);
        message.channel.send(embed).then(res => {
            const ping = res.createdTimestamp - message.createdTimestamp;

            embed = new Discord.MessageEmbed()
                .setTitle('Понг!')
                .setDescription(`Пинг бота ${ping}ms!`)
                .setTimestamp()
                .setColor(config.embedColor);

            res.edit(embed);
        });
    }
};