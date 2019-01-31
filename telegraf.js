const Telegraf = require("telegraf");
const Markup = require("telegraf/markup");
//const axios = require('axios');
const Stage = require('telegraf/stage')
const processorScene = require('./scenes/processorScene');
const bot = new Telegraf("714929860:AAFTB-4Y5Gp5R7IvNYntjc9AOrtODKEhLk0");
const stage = new Stage()
//const scene = require("processorScene")
//stage.command('cancel', leave())
stage.register(processorScene);


//bot.use(session())
bot.use(stage.middleware());

//Start/ initiating a Bot
bot.start(ctx => {
    ctx.reply("Hi " + ctx.from.first_name + "  welcome i'm the curency ChatBot\n Say 'hello' or 'Hi' to get started ")

    console.log(ctx.from.first_name)
})

//BOT REPLY 
bot.hears([/hello( there)?/i, /hey( there)?/i, /hi( there)?/i], ctx => {
    ctx.reply('How can i help you today? ' + ctx.from.first_name,
        Markup.keyboard([
            ["Convert Currency"],
            ["View Rates"]
        ]).oneTime()
            .resize()
            .extra()
    );

    console.log("Login as " + ctx.update.message.chat.first_name)
    
     

})
bot.hears('Convert Currency', ctx => ctx.replyWithPhoto('https://picsum.photos/200/300/'));







bot.startPolling();