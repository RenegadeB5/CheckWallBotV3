//bot.js
//anything with "//" infront of it is treated as a comment, it doesn't affect the code of the bot
const Discord = require('discord.js');
var client = new Discord.Client();
const prefix = ".";
var lastTime;
var int1;
var NOTIFY_CHANNEL;
var minutes = 0
const sql = require("sqlite");
sql.open("./score.sqlite");


client.on('ready', () => {
      setInterval(counter, 60000)
      setInterval(checkn, 100)
      setInterval(notify, 1000)
      
      
      function counter() {
            minutes += 1
      }
      client.user.setGame("Exiled R Shit! " + client.guilds.array().length + " Servers");
      console.log('successfully Logged In As Wall Check Bot!');
      NOTIFY_CHANNEL = client.channels.find("name", "checkwall");
      function checkn() {
          if (minutes > 1) {
                setInterval(timeto, 60000)
          }
          else {
                return;
            }
      }
      function timeto() { 
                    
                  console.log('TRUE');          
                  message = tag + " " + 'The walls have not been checked in' + " " + minutes + " " + 'minutes.'
                  minutes += 1
                  NOTIFY_CHANNEL.sendMessage(message)
            }
           
      function notify() { 
                     if (minutes > 3) {
                           tag = '@everyone'
                     }
                     else {
                           tag = '@here'
                     }
      
       }

//CHECKED-----------------------------------------------------------------------
client.on('message', message => {
  if (message.content == prefix + 'clear') {
    lastSender = message.guild.lastSender = message.author
    clearInterval(timeto)
    minutes = 0
    NOTIFY_CHANNEL.sendMessage (lastSender + " " + 'has cleared the walls.')
       
  }   
});
      
//RAID ------------------------------------------------------------------
client.on ('message', message => {
  if (message.content === prefix + "weewoo") {
    NOTIFY_CHANNEL.sendMessage('@everyone WE ARE BEING RAIDED!', {tts: false});
    NOTIFY_CHANNEL.sendMessage('@everyone WE ARE BEING RAIDED!', {tts: false});
    NOTIFY_CHANNEL.sendMessage('@everyone WE ARE BEING RAIDED!', {tts: false});
    NOTIFY_CHANNEL.sendMessage('@everyone WE ARE BEING RAIDED!', {tts: false});
    NOTIFY_CHANNEL.sendMessage('@everyone WE ARE BEING RAIDED!', {tts: false});
  }
});
//RAID EAST-------------------------------------------------------------------

//kys bot-------------------------------------------------------------------
client.on ('message', message => {
  if (message.content === ".time") {
        message.channel.send('Its been' + " ```" + minutes + " " + 'minutes ``` since the walls were last checked.', {tts: false});
        }
});

client.on ('message', message => {
  if (message.content === ".feedback") {
        console.log(minutes);
        }
});      

client.on ('message', message => {
  if (message.content === prefix + "help") {
    const embed = new Discord.RichEmbed()
    .setColor(0xFF0000)
    .setTitle('CLICK FOR HELP')
    .addField('help')
    .setURL("https://raw.githubusercontent.com/RenegadeB5/ExiledMasterRace/master/help.md")
      NOTIFY_CHANNEL.sendEmbed(embed)
  }})
});

//LOGIN TOKEN-------------------------------------------------------------------
client.login('NDA3NTkzODIzOTIxNzY2NDEw.DVIqzw.tVwiSN30_4x6LexUutYETZlyNAU');
