/**
 * Created by ballrider Vaggi on 28/07/15.
 */
console.log('node worked correctly');

var botApi = require('node-telegram-bot-api');
var options = {
  polling: true
};

var bot = new botApi(token, options);
bot.getMe().then(function (me) {
  console.log('Hi my name is %s!', me.username);
});

var msc = require('./node_modules/apps/music');
msc.Music(bot);

var cmd = require('./node_modules/apps/movies');
cmd.Movie(bot);

