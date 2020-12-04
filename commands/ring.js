const config = require('../config.json');

module.exports = {
    name: 'rimg',
    adminCommand: false,
    usage: `**${config.prefix}rimg**`,
    description: 'Вывести случайное изображение с сервиса https://prnt.sc/.',
    async execute(message) {
        await require('../modules/generatePicture.js')(message);
    }
};