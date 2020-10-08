const Discord = require('discord.js');
const config = require('../config.json');

module.exports = {
    name: 'user',
    adminCommand: false,
    usage: '**!user**, **!user <id_пользователя>** или **!user <упоминание_пользователя>**',
    description: 'Вывести информацию о пользователе.',
    async execute(message, args) {
        let selectedMember, embed;
        if (!args[0]) {
            selectedMember = message.member;
        }
        else if (message.mentions.users.first()) {
            selectedMember = message.mentions.members.first();
        }
        else if (message.guild.members.cache.get(args[0])) {
            selectedMember = message.guild.members.cache.get(args[0]);
        }

        if (!selectedMember) {
            embed = new Discord.MessageEmbed()
                .setTitle(':x:Ошибка')
                .setDescription('Не удалось найти пользователя.')
                .setTimestamp()
                .setColor(config.embedColor);
        }
        else {
            embed = new Discord.MessageEmbed()
                .setTitle(`:page_facing_up:Информация о пользователе ${selectedMember.user.username}`)
                .setThumbnail(selectedMember.user.displayAvatarURL({ format:'png', dynamic:true, size:4096, }))
                .setDescription('Общая информация о пользователе.')
                .addField('Полный никнейм', `${selectedMember.user.username}#${selectedMember.user.discriminator}`)
                .addField('ID пользователя', selectedMember.user.id)
                .addField('Присоеденился', selectedMember.joinedAt)
                .addField('Аккаунт создан', selectedMember.user.createdAt)
                .addField('Высшая роль пользователя', selectedMember.roles.highest)
                .setTimestamp()
                .setColor(config.embedColor);
        }

        return message.channel.send(embed);
    }
};