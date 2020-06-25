const Discord = require('discord.js');
const bot = new Discord.Client();

const token = 'NzIyMTk5MjYxNDk1OTUxNDIy.XufmiQ.KzI_E187taLlWlz4j_pQPmtNal4';

const PREFIX = '#';

var version = "1.0.1";

bot.on('ready', async () =>{
    console.log('online!');
    bot.user.setActivity('║ Shift ║', {type: 'LISTENING'})
})

bot.on('message', message=>{

    let args = message.content.substring(PREFIX.length).split(" ");

    switch(args[0]){
        case 'ping':
            message.channel.send('pong!')
            break;
       case 'clear':
           if(!args[1]) return message.reply('Error please define second arg')
           message.channel.bulkDelete(args[1]);
           break;
        case 'info':
            if(args[1] === 'version'){
                message.channel.send('Version ' + version);
            }  else{
                message.channel.send('Invalid Args');
            }      
            break;
            case 'embed':
                const embed = new Discord.richEmbed()
                .addField('Name', message.author.username);
                message.channel.send(embed);
            break;


           
    }
   
})

bot.login(token);