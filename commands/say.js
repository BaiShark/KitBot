const error = require('../modules/error');
const config = require('../config.json');

module.exports = {
    name: 'say',
    adminCommand: true,
    usage: '**!say <какой-то текст>**',
    description: 'Вывести сообщение от имени бота.',
    async execute(message, args) {
        if (!message.member.roles.cache.get(config.adminRole)) return;
        if (message.deletable) message.delete();

        if (!args[0]) return message.channel.send(error.embed('Вы не указали отправляемое сообщение.'));

        return message.channel.send(args.join(' '));
    }
};