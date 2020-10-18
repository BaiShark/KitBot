const config = require('../config.json');

module.exports = async (client, message) => {
    if (!message.content.startsWith(config.prefix) || message.author.bot || message.channel.type === 'dm') return;

    const args = message.content.slice(config.prefix.length).trim().split(/ +/);
    const command = args.shift().toLowerCase();

    if (!client.commands.has(command)) return;

    try {
        message.channel.startTyping();
        await client.commands.get(command).execute(message, args, client);
        await message.channel.stopTyping();
    } catch (error) {
        console.error(error);
    }
}