const axios = require('axios')

const Scene = require('telegraf/scenes/base')
const processorScene = new Scene('processorScene');


    processorScene.enter(ctx =>{


        axios.get('https://free.currencyconverterapi.com/api/v6/', ctx.chat.id)
        .then(response => {
    
            console.log(response.data);
        })
    
    
    })

   

module.exports = processorScene;

