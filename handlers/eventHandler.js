const reqEvent = (event) => require(`../events/${event}`);

module.exports = client => {
    client.on('ready', () => {
        reqEvent('init')(client);
    });
    client.on('message', (message) => {
        reqEvent('executeCommand')(client, message);
    });
}