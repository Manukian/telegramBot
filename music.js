var request = require('request');
function Music(bot) {
    bot.on('message', function (msg) {
        var url = 'https://upload.wikimedia.org/wikipedia/commons/c/c8/Example.ogg';
        var audio = request(url);
        bot.sendAudio(msg.chat.id, audio);
    });
}
exports.Music = Music;