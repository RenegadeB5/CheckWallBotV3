//bot.js
//anything with "//" infront of it is treated as a comment, it doesn't affect the code of the bot
const Discord = require('discord.js');
const config = require("./config.json");
var client = new Discord.Client();
const prefix = ".";
var test = 0;
var lastTime;
var key = 1;
var int1;
var NOTIFY_CHANNEL;

client.on('ready', () => {
  setInterval(counter, 1000)
  seconds = 0
  function counter() {
        seconds += 1
}

client.on('ready', () => {
      if (seconds > 60) {
            setInterval(notify, 60000)
            minutes = 1
            function notify() {
                  if (minutes > 3) {
                        tag = '@everyone'
                  }
                  else {
                        tag = '@here'
                  }
                        
                      message = tag + 'the walls have not been checked in' + minutes + 'minutes.'
                      minutes += 1
                      NOTIFY_CHANNEL.sendMessage (message)
            }
}});

//ON LOGIN----------------------------------------------------------------------
client.on('ready', () => {
    client.user.setGame("Exiled R Shit! " + client.guilds.array().length + " Servers");
    console.log('successfully Logged In As Wall Check Bot!');
    NOTIFY_CHANNEL = client.channels.find("name", "checkwall"); // Channel to send notification
      
//SET INTERVAL------------------------------------------------------------------
    
//1200000 = 20 mins 900000 = 15 mins  1500000 = 25 mins 1800000 = 30 mins https://www.timecalculator.net/seconds-to-milliseconds
} //1 second = 1000 ms
);
//CHECKED-----------------------------------------------------------------------
client.on('message', message => {
  if (message.content == prefix + 'clear') {
    lastSender = message.guild.lastSender = message.author
    lastTime = new Date()
 
    NOTIFY_CHANNEL.sendMessage (lastsender + 'has cleared the walls')
    seconds = 0 }
});
//RAID ------------------------------------------------------------------
client.on ('message', message => {
  if (message.content === prefix + "raid") {
    NOTIFY_CHANNEL.sendMessage('@everyone SOME PAKI RAT IS RAIDING US!', {tts: false});
    NOTIFY_CHANNEL.sendMessage('@everyone SOME PAKI RAT IS RAIDING US!', {tts: false});
    NOTIFY_CHANNEL.sendMessage('@everyone SOME PAKI RAT IS RAIDING US!', {tts: false});
    NOTIFY_CHANNEL.sendMessage('@everyone SOME PAKI RAT IS RAIDING US!', {tts: false});
    NOTIFY_CHANNEL.sendMessage('@everyone SOME PAKI RAT IS RAIDING US!', {tts: false});
  }
});
//RAID EAST-------------------------------------------------------------------

//kys bot-------------------------------------------------------------------
client.on ('message', message => {
  if (message.content === "kys bot") {
    NOTIFY_CHANNEL.sendMessage('Neck yourself', {tts: false});
  }
});


 
client.on ('message', message => {
  if (message.content === prefix + "help") {
    const embed = new Discord.RichEmbed()
    .setColor(0xFF0000)
    .setTitle('CLICK FOR HELP')
    .addField('help')
    .setURL("https://raw.githubusercontent.com/RenegadeB5/ExiledMasterRace/master/help.md")
      NOTIFY_CHANNEL2.sendEmbed(embed)
  }})
})
//LOGIN TOKEN-------------------------------------------------------------------
client.login('NDA3NTkzODIzOTIxNzY2NDEw.DVIqzw.tVwiSN30_4x6LexUutYETZlyNAU');
