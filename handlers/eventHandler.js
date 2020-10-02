const reqEvent = (event) => require(`../events/${event}`);

module.exports = client => {
    client.on('ready', async () => {
        reqEvent('init')(client);
    });
    client.on('message', async (message) => {
        reqEvent('executeCommand')(client, message);
    });
    client.on('guildMemberAdd', async (member) => {
        reqEvent('welcome')(member);
    });
}