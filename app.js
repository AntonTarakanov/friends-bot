"use strict";
const   TelegramBot = require('node-telegram-bot-api'),
        moduleQ = require('./inputData.js'),
        photo = require('./photo.js'),
        token = moduleQ.getToken(),
        bot = new TelegramBot(token, {polling: true});

bot.onText(/\/photo (.+) (.+)/, function (msg, match) {
    let chatId = msg.chat.id,
    linkPhoto = "./photo/"+match[1]+"/"+photo.getRandomPhoto(match, chatId);
    //bot.sendMessage(chatId, "Length = "+linkPhoto, {caption: "I'm a bot!"});
    bot.sendPhoto(chatId, linkPhoto, {caption: "Good "+match[1]});
});

bot.onText(/\/hello/, function (msg, match) {
    let chatId = msg.chat.id;
    bot.sendMessage(chatId, "Hello "+msg.from.first_name, {caption: "I'm a bot!"});
});

/*
bot.on('message', function (msg) {
    if (msg.photo) {
        console.log(photo.setPhoto(msg.photo[3].file_id, token));
    }
    console.log(msg.photo[3].file_id);
});*/
