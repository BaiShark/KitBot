const error = require('../modules/error');
const config = require('../config.json');

module.exports = {
    name: 'say',
    adminCommand: true,
    usage: '**!say <какой-то текст>**',
    description: 'Вывести сообщение от имени бота.',
    async execute(message, args) {
        if (!message.member.roles.cache.get(config.adminRole)) return;
        if (!args[0]) return message.channel.send(error.embed('Вы не указали отправляемое сообщение.'));
        if (message.deletable) message.delete();
        return message.channel.send(args.join(' '));
    }
};