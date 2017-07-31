/**
 * Created by Anniktar on 30.07.2017.
 */
const   fs = require('fs'),
        bot = require('node-telegram-bot-api');

function getPhotos (files) {
    let photos = files.filter(function(el, i) {
        return el.substring(el.length - 3) == 'jpg' || el.substring(el.length - 3) == 'JPG';
    });
    return photos;
}

function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

exports.getRandomPhoto = function (match, chatId) {
    let folder = match[1],
        method = match[2],
        files = fs.readdirSync('./photo/'+folder),
        photos = getPhotos(files);
    return photos[randomNumber(0, photos.length)];;
};

exports.setPhoto = function (idPhoto, token) {
    bot.downloadFile(idPhoto, './all');
    return "yes";
};