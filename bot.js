const { Telegraf } = require('telegraf');

// Вставьте здесь ваш токен
const bot = new Telegraf('6653478865:AAGjiyqb_g_Vpewnje3QJkDuH2oblLGzo6c');

bot.start((ctx) => ctx.reply('Welcome! Send /game to play the game.'));

bot.command('game', (ctx) => {
    ctx.reply('Click the link to play the game: https://Narek-03.github.io/firstGameBot1/');
});

bot.launch();

process.once('SIGINT', () => bot.stop('SIGINT'));
process.once('SIGTERM', () => bot.stop('SIGTERM'));
