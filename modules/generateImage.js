const Discord = require('discord.js');
const fetch = require('node-fetch');
const config = require('../config.json');
const characters = 'abcdefghijklmnopqrstuvwxyz'.split('');

module.exports = async (message, result) => {
    let id = '';

    for (let i=0; i<4; ++i) id += characters[Math.floor(Math.random()*characters.length)];
    for (let i=0; i<2; ++i) id += Math.floor(Math.random()*9);

    const pattern = RegExp("<img.+?src=[\"'](.+?)[\"'].*?>");
    const url = await fetch(`https://prnt.sc/${id}`).then(res => res.text()).then(async (body) => {
        let url = pattern.exec(body)[1];
        if (url.startsWith('//')) url = `https:${url}`;

        const embed = new Discord.MessageEmbed()
            .setTitle(':frame_photo:Случайное изображение')
            .setImage(url)
            .setColor(config.embedColor)
            .setTimestamp()
            .setFooter('Чтобы получить новое изображение, нажмите реакцию ниже', 'https://i.imgur.com/022pOyg.png');

        if (!result) {
            result = await message.channel.send(embed);
            await result.react('🔄');
        }
        else {
            result = await result.edit(embed);
        }
        return url;
    });

    const filter = (reaction, user) => {
        return '🔄'.includes(reaction.emoji.name) && user.id === message.author.id;
    };
    result.awaitReactions(filter, { max: 1, time: 60000, errors: ['time'] })
        .then( () => {
            result.reactions.resolve('🔄').users.remove(message.author.id);
            require('./generateImage.js')(message, result);
        })
        .catch( () => {
            const embed = new Discord.MessageEmbed()
                .setTitle(':frame_photo:Случайное изображение')
                .setImage(url)
                .setColor(config.embedColor)
                .setTimestamp();

            result.edit(embed);
            result.reactions.removeAll();
        });
};