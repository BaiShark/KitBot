module.exports = (client) => {
    client.user.setActivity('в Уголке Китама');
    console.log(`${client.user.username} запущен!`);
}