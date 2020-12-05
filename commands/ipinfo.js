const Discord = require('discord.js');
const unirest = require('unirest');
const Embed = require('../modules/embed');
const config = require('../config.json');

module.exports = {
    name: 'ipinfo',
    adminCommand: false,
    usage: `**${config.prefix}ipinfo <ip_адресс>**`,
    description: 'Вывести информацию об ip адресе.',
    async execute(message, args) {
        let embed;
        if (!args[0]) return message.channel.send(Embed.errorEmbed('Вы не указали ip адрес.'));
        else {
            const req = unirest('GET', `http://ipwhois.app/json/${args[0]}`);

            embed = req.end( (res) => {
                if (res.error) throw res.error;
                const ipInfo = res.body;

                if (ipInfo.success) {
                    embed = new Discord.MessageEmbed()
                        .setTitle(`:page_facing_up:Информация о ip адресе ${args[0]}`)
                        .setDescription('Общая информация о ip адресе.')
                        .addField('Тип ip адреса', ipInfo.type)
                        .addField('Страна', ipInfo.country)
                        .addField('Город', ipInfo.city)
                        .addField('Широта', ipInfo.latitude)
                        .addField('Долгота', ipInfo.longitude)
                        .setTimestamp()
                        .setColor(config.embedColor);
                }
                else {
                    embed = Embed.errorEmbed('Произошла ошибка. Возможно, вы ввели неправильный ip адрес.');
                }
                return message.channel.send(embed);
            });
        }
    }
};