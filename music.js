function Music(bot) {
    bot.on('message', function (msg) {
        if (msg.text == 'do the dishes') {
            bot.sendMessage(msg.chat.id, 'fuck you');
        }
    });
}
exports.Music = Music;