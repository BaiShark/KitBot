// const Discord = require('discord.js');
const config = require('../config.json');

module.exports = {
    name: 'play',
    adminCommand: false,
    usage: `**${config.prefix}play**`,
    description: 'Вывести пинг бота.',
    async execute(message, args, client) {
        await client.player.play(message, args.join(' '));
    }
};