/**
 * Created by ballrider Vaggi on 28/07/15.
 */
console.log('node worked correctly');

var botApi = require('node-telegram-bot-api');
var options = {
  polling: true
};

var token = '123731375:AAHeCtHyhTE7W79hw1beOVDt1MSy2PnIqaI';

var bot = new botApi(token, options);
bot.getMe().then(function (me) {
  console.log('Hi my name is %s!', me.username);
});

var msc = require('./music');
msc.Music(bot);