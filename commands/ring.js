const config = require('../config.json');
const Images = require('../modules/images.js');

module.exports = {
    name: 'rimg',
    adminCommand: false,
    usage: `**${config.prefix}rimg**`,
    description: 'Вывести случайное изображение с сервиса https://prnt.sc/.',
    async execute(message) {
        await Images.randomImage(message);
    }
};