const Images = require('../modules/images')

module.exports = async (client) => {
    await Images.randomMeme(client);
}