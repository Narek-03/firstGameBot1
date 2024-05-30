//const { Telegraf } = require('telegraf');
//const path = require('path');
//const fs = require('fs');

//// Вставьте здесь ваш токен
//const bot = new Telegraf('6653478865:AAGjiyqb_g_Vpewnje3QJkDuH2oblLGzo6c');

//bot.start((ctx) => ctx.reply('Welcome! Send /game to play the game.'));

//bot.command('game', (ctx) => {
//    ctx.replyWithDocument({ source: path.join(__dirname, 'dist', 'index.html') });
//});

//bot.launch();

//process.once('SIGINT', () => bot.stop('SIGINT'));
//process.once('SIGTERM', () => bot.stop('SIGTERM'));

const { Telegraf } = require('telegraf');

// Вставьте здесь ваш токен
const bot = new Telegraf('6653478865:AAGjiyqb_g_Vpewnje3QJkDuH2oblLGzo6c');

bot.start((ctx) => ctx.reply('Welcome! Send /game to play the game.'));

bot.command('game', (ctx) => {
    ctx.reply('Click the link to play the game: https://narek-03.github.io.firstGameBot/');
});

bot.launch();

process.once('SIGINT', () => bot.stop('SIGINT'));
process.once('SIGTERM', () => bot.stop('SIGTERM'));
