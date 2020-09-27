const Discord = require('discord.js');
const config = require('../config.json');

module.exports = {
    name: 'ping',
    description: 'Information about the arguments provided.',
    execute(message) {
        let embed = new Discord.MessageEmbed()
            .setTitle('Pinging...')
            .setColor(config.embedColor);
        message.channel.send(embed).then(res => {
            const ping = res.createdTimestamp - message.createdTimestamp;

            embed = new Discord.MessageEmbed()
                .setTitle('Pong!')
                .setDescription(`Bot ping is ${ping}ms!`)
                .setTimestamp()
                .setColor(config.embedColor);

            res.edit(embed);
        });
    }
};