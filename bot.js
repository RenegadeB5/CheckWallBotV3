//bot.js
//anything with "//" infront of it is treated as a comment, it doesn't affect the code of the bot
const Discord = require('discord.js');
var client = new Discord.Client();
const prefix = ".";
var lastTime;
var int1;
var NOTIFY_CHANNEL;
var minutes = 1
var n = false
const sql = require("sqlite");
sql.open("./score.sqlite");


client.on('ready', () => {
      setInterval(checkn, 100)
      
      function counter() {
            minutes += 1
      }
      function restart() {
            setInterval(timeto, 60000)
            setInterval(counter, 60000)
            setInterval(notify, 100)
      }
      client.user.setPresence({ game: { name: process.env.playing, type: 0 } });
      console.log('successfully Logged In As Wall Check Bot!');
      NOTIFY_CHANNEL = client.channels.find("name", "checkwall");
      function checkn() {
          if (minutes > 3) {
                n = true
          }
          else {
                n = false
            }
      }
      function timeto() { 
                    
                  console.log('TRUE');          
                  message = tag + " " + 'The walls have not been checked in' + " " + minutes + " " + 'minutes.'
                  NOTIFY_CHANNEL.sendMessage(message)
            }
           
      function notify() { 
                     if (minutes > 5) {
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
    clearInterval(counter)
    minutes = 1
    n = false
    NOTIFY_CHANNEL.sendMessage(lastSender + " " + 'has cleared the walls.')
    setTimeout(restart, 1000);
    
       
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
        console.log(n);
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
client.login('process.env.BOT_TOKEN');
