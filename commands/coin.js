const Discord = require('discord.js');
const config = require('../config.json');

module.exports = {
    name: 'coin',
    adminCommand: false,
    usage: '**!coin**',
    description: 'Подбросить монетку.',
   async  execute(message) {
        let embed;
        if (Math.round(Math.random()) === 0) {
            embed = new Discord.MessageEmbed()
                .setTitle(':coin:Выпал орёл!')
                .attachFiles(['./img/orel.png'])
                .setThumbnail('attachment://orel.png')
                .setTimestamp()
                .setColor(config.embedColor);
        } else {
            embed = new Discord.MessageEmbed()
                .setTitle(':coin:Выпала решка!')
                .attachFiles(['./img/reshka.png'])
                .setThumbnail('attachment://reshka.png')
                .setTimestamp()
                .setColor(config.embedColor);
        }
        return message.channel.send(embed);
    }
};