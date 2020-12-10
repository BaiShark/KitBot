const Discord = require('discord.js');
const Embed = require('../modules/embed');
const config = require('../../config.json');

module.exports = {
    name: 'user',
    adminCommand: false,
    usage: `**${config.prefix}user**, **${config.prefix}user <id_пользователя>** или **${config.prefix}user <упоминание_пользователя>**`,
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
            embed = Embed.errorEmbed('Не удалось найти пользователя.');
        }
        else {
            embed = new Discord.MessageEmbed()
                .setTitle(`:page_facing_up:Информация о пользователе ${selectedMember.user.username}`)
                .setThumbnail(selectedMember.user.displayAvatarURL({ format:'png', dynamic:true, size:4096, }))
                .setDescription('Общая информация о пользователе.')
                .addField('Никнейм пользователя', `${selectedMember.user.username}#${selectedMember.user.discriminator}`)
                .addField('ID пользователя', selectedMember.user.id)
                .addField('Пользователь присоеденился', `${selectedMember.joinedAt.getUTCDate()}.${selectedMember.joinedAt.getUTCMonth()}.${selectedMember.joinedAt.getUTCFullYear()} ${selectedMember.joinedAt.getUTCHours()}:${selectedMember.joinedAt.getUTCMinutes()}:${selectedMember.joinedAt.getUTCSeconds()} UTC`)
                .addField('Аккаунт пользователя создан', `${selectedMember.user.createdAt.getUTCDate()}.${selectedMember.user.createdAt.getUTCMonth()}.${selectedMember.user.createdAt.getUTCFullYear()} ${selectedMember.user.createdAt.getUTCHours()}:${selectedMember.user.createdAt.getUTCMinutes()}:${selectedMember.user.createdAt.getUTCSeconds()} UTC`)
                .addField('Высшая роль пользователя', selectedMember.roles.highest)
                .setTimestamp()
                .setColor(config.embedColor);
        }

        return message.channel.send(embed);
    }
};