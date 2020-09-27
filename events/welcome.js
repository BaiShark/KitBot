const Discord = require('discord.js');
const config = require('../config.json');

module.exports = (member) => {
    const embed = new Discord.MessageEmbed()
        .setTitle('Добро пожаловать!')
        .setDescription(`Добро пожаловать на сервер, ${member}. Надеюсь, тебе тут понравится.`)
        .setThumbnail(member.user.displayAvatarURL())
        .setTimestamp()
        .setColor(config.embedColor);

    member.guild.channels.cache.get(config.welcomeChannel).send(embed);
}