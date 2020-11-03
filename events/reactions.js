const config = require('../config.json');

module.exports = async (message) => {
    const content = message.content.toLowerCase();
    if (config.reactionMessages.indexOf(content) === -1) return;

    for (const symbol of content) {
        if (!message.deleted) {
            const reactionEmoji = message.guild.emojis.cache.find(emoji => emoji.name === `${symbol}_letter`);
            await message.react(reactionEmoji);
        }
        else {
            return;
        }
    }
}