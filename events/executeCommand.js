const config = require('../config.json');

module.exports = (client, message) => {
    if (!message.content.startsWith(config.prefix) || message.author.bot || message.channel.type === 'dm') return;

    const args = message.content.slice(config.prefix.length).trim().split(/ +/);
    const command = args.shift().toLowerCase();

    if (!client.commands.has(command)) return;

    try {
        if (command === 'help') client.commands.get(command).execute(message, args, client);
        else client.commands.get(command).execute(message, args);
    } catch (error) {
        console.error(error);
    }
}