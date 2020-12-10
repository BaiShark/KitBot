const Discord = require('discord.js');
const config = require('../../config.json');

module.exports = {
    name: 'coin',
    adminCommand: false,
    usage: `**${config.prefix}coin**`,
    description: 'Подбросить монетку.',
   async execute(message) {
        let embed;
        if (Math.round(Math.random()) === 0) {
            embed = new Discord.MessageEmbed()
                .setTitle(':coin:Выпал орёл!')
                .setThumbnail('https://i.imgur.com/35Vdrxy.png')
                .setTimestamp()
                .setColor(config.embedColor);
        } else {
            embed = new Discord.MessageEmbed()
                .setTitle(':coin:Выпала решка!')
                .setThumbnail('https://i.imgur.com/PYPK3PD.png')
                .setTimestamp()
                .setColor(config.embedColor);
        }
        return message.channel.send(embed);
    }
};