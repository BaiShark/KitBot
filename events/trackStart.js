const Embed = require('../modules/embed');

module.exports = async (message, track) => {
    message.channel.send(Embed.defaultEmbed(`Сейчас играет ${track.name}`, ``));
}