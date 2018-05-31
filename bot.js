//bot.js
//anything with "//" infront of it is treated as a comment, it doesn't affect the code of the bot
const Discord = require('discord.js');
const config = require("./config.json");
var client = new Discord.Client();
const prefix = ".";
var lastTime;
var int1;
var NOTIFY_CHANNEL;
var mysql = require('mysql');
var con = mysql.createConnection({
  
  host: "sql9.freemysqlhosting.net",
  user: "sql9240654",
  password: "tAGDVrzlRs"
 
});
con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
});


client.on('ready', () => {
      setInterval(counter, 1000)
      seconds = 0
      function counter() {
            seconds += 1
      }
      client.user.setGame("Exiled R Shit! " + client.guilds.array().length + " Servers");
      console.log('successfully Logged In As Wall Check Bot!');
      NOTIFY_CHANNEL = client.channels.find("name", "checkwall");
      if (seconds > 60) {
            n = true
      }
      if (n = true) {
            console.log('hello');
            setInterval(notify, 60000)
            minutes = 1
            
            function notify() { 
                 if (minutes > 3) {
                       tag = '@everyone'
                 }
                 else {
                       tag = '@here'
                 }
                      message = tag + " " + 'The walls have not been checked in' + " " + minutes + " " + 'minutes.'
                      minutes += 1
                      NOTIFY_CHANNEL.sendMessage (message)
            }
}

//CHECKED-----------------------------------------------------------------------
client.on('message', message => {
  if (message.content == prefix + 'clear') {
    lastSender = message.guild.lastSender = message.author
    lastTime = new Date()
    minutes = 1
    seconds = 0
    NOTIFY_CHANNEL.sendMessage (lastSender + " " + 'has cleared the walls.')
    }
      
});
      
//RAID ------------------------------------------------------------------
client.on ('message', message => {
  if (message.content === prefix + "raid") {
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
        min = Math.floor(seconds / 60)
        sec = Math.floor(((seconds / 60) - (Math.floor(seconds / 60))) * 60)
        message.channel.send('Its been' + " ```" + min + " " + 'minutes and' + " " + sec + " " + 'seconds ``` since the walls were last checked.', {tts: false});
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
