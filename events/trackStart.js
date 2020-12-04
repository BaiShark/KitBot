module.exports = async (message, track) => {
    message.channel.send(`Now playing ${track.title}...`);
}