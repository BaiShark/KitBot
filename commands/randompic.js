const Discord = require('discord.js');
const fetch = require('node-fetch');
const config = require('../config.json');
const characters = 'abcdefghijklmnopqrstuvwxyz'.split('');

module.exports = {
    name: 'randompic',
    adminCommand: false,
    usage: '**!randompic**',
    description: 'Вывести случайное изображение с сервиса https://prnt.sc/.',
    async execute(message) {
        let id = '';

        for (let i=0; i<4; ++i) id += characters[Math.floor(Math.random()*characters.length)];
        for (let i=0; i<2; ++i) id += Math.floor(Math.random()*9);

        const pattern = RegExp("<img.+?src=[\"'](.+?)[\"'].*?>");
        await fetch(`https://prnt.sc/${id}`).then(res => res.text()).then(async body => {
            let url = pattern.exec(body)[1];
            if (url.startsWith('//')) url = `https:${url}`;
            const embed = new Discord.MessageEmbed()
                .setTitle(':frame_photo:Случайное изображение')
                .setImage(url)
                .setColor(config.embedColor)
                .setTimestamp();
            return message.channel.send(embed);
        });
    }
};