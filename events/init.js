module.exports = (client) => {
    client.user.setPresence({
        game: {
            name: 'в Уголке Китама',
            type: 0,
        }
    });
    console.log(`${client.user.username} запущен!`);
}