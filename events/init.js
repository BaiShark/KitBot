module.exports = async (client) => {
    await client.user.setActivity('в Уголке Китама');
    console.log(`${client.user.username} запущен!`);
}