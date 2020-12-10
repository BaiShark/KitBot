const config = require('../../config.json');

module.exports = async (client) => {
    await client.user.setActivity(`${config.prefix}help`);
    console.log(`init.js: ${client.user.username} started!`);
}