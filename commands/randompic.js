module.exports = {
    name: 'randompic',
    adminCommand: false,
    usage: '**!randompic**',
    description: 'Вывести случайное изображение с сервиса https://prnt.sc/.',
    async execute(message) {
        await require('../modules/generatePicture.js')(message);
    }
};