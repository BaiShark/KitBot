module.exports = async (client) => {
    await client.user.setActivity('в Уголке Китама');
    console.log(`init.js: ${client.user.username} started!`);
}