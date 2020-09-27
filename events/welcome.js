const Discord = require('discord.js');
const config = require('../config.json');

module.exports = (member) => {
    const embed = new Discord.MessageEmbed()
        .setTitle(`Добро пожаловать, ${member}!`)
        .setDescription('Добро пожаловать на сервер. Надеюсь, тебе тут понравится.')
        .setThumbnail(member.user.displayAvatarURL())
        .setColor(config.embedColor);

    member.guild.channels.cache.get(config.welcomeChannel).send(embed);
}