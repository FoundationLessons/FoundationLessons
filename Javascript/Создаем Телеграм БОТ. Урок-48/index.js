// const TelegramBot = require("node-telegram-bot-api");

// const token = "6649683148:AAGDWf7TRWmHl2OpAS9u-qjm1Uf5jwdU_2o";

// const bot = new TelegramBot(token, { polling: true });

// bot.onText(/\/echo (.+)/, (msg, match) => {
//   const chatId = msg.chat.id;
//   const resp = match[1];
//   bot.sendMessage(chatId, resp);
// });

// bot.on("message", (msg) => {
//   const chatId = msg.chat.id;
//   const message = msg.text;

//     if(message === "/start"){
//         bot.sendMessage(chatId, "👋🏻")
//         bot.sendMessage(chatId, "Hi , welcome to my Telegram bot!")
//     }else if(message === "/stop"){
//         bot.sendMessage(chatId, "Bot will be stopped immediately!")
//     }else if(message === "/topfilms"){
//         bot.sendMessage
//     }
// });

const TelegramBot = require("node-telegram-bot-api");

// Replace 'YOUR_TELEGRAM_BOT_TOKEN' with your actual bot token
const bot = new TelegramBot("6649683148:AAGDWf7TRWmHl2OpAS9u-qjm1Uf5jwdU_2o", {
  polling: true,
});

bot.onText(/\/start/, (msg) => {
  const chatId = msg.chat.id;
  bot.sendMessage(
    chatId,
    "Hello! I am your simple Telegram bot. Type /help to see available commands."
  );
  bot.startPolling();
});

bot.onText(/\/stop/, (msg) => {
  const chatId = msg.chat.id;
  bot.sendMessage(chatId, "Stopping the bot gracefully...");
});

bot.onText(/\/myid/, (msg) => {
  const chatId = msg.chat.id;
  bot.sendMessage(chatId, `Your Telegram ID is: ${chatId}`);
});
bot.onText(/\/mynickname/, (msg) => {
  const chatId = msg.chat.id;
  const nickname = msg.from.username;
  bot.sendMessage(chatId, `Your Telegram nickname is: ${nickname}`);
});

bot.onText(/.*/, (msg) => {
  const chatId = msg.chat.id;
  bot.sendMessage(
    chatId,
    "Sorry, I didn't understand that command. Type /help to see available commands."
  );
});
