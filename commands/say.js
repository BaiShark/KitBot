const Embed = require('../modules/embed');
const config = require('../config.json');

module.exports = {
    name: 'say',
    adminCommand: true,
    usage: `**${config.prefix}say <какой-то текст>**`,
    description: 'Вывести сообщение от имени бота.',
    async execute(message, args) {
        if (!message.member.roles.cache.get(config.adminRole)) return;
        if (!args[0]) return message.channel.send(Embed.errorEmbed('Вы не указали отправляемое сообщение.'));
        if (message.deletable) message.delete();
        return message.channel.send(args.join(' '));
    }
};