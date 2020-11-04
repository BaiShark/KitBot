const Discord = require('discord.js');
const config = require('../config.json');

module.exports = {
    embed(errorText) {
        return new Discord.MessageEmbed()
            .setTitle(':x:Ошибка')
            .setDescription(errorText)
            .setTimestamp()
            .setColor(config.embedColor);
    }
}
