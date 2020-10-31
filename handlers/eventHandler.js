module.exports = async (client) => {
    client.on('ready', async () => {
        await require('../events/init')(client);
    });
    client.on('message', async (message) => {
        await require('../events/executeCommand')(client, message);
    });
    client.on('guildMemberAdd', async (member) => {
        await require('../events/welcome')(member);
    });
}