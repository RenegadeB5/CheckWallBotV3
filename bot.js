//bot.js
//anything with "//" infront of it is treated as a comment, it doesn't affect the code of the bot
const Discord = require('discord.js');
var client = new Discord.Client();
const prefix = ".";
var lastTime;
var int1;
var NOTIFY_CHANNEL;
const sql = require("sqlite");
sql.open("./score.sqlite");

client.on('ready', () => {
      setInterval(counter, 1000)
      setInterval(timetocheck, 60000)
      setInterval(checkn, 1000)
      setInterval(notify,1000)
      seconds = 0
      minutes = 1
      n = false
      function counter() {
            seconds += 1
      }
      client.user.setGame("Exiled R Shit! " + client.guilds.array().length + " Servers");
      console.log('successfully Logged In As Wall Check Bot!');
      NOTIFY_CHANNEL = client.channels.find("name", "checkwall");
      function checkn() {
          if (seconds > 60) {
                n = true
          }
                else {
                n = false
                }
      }
      function notify() { 
                     if (minutes > 3) {
                           tag = '@everyone'
                     }
                     else {
                           tag = '@here'
                     }
      function timetocheck() { 
            if (n = true) {      
                  console.log('hello');          
                  message = tag + " " + 'The walls have not been checked in' + " " + minutes + " " + 'minutes.'
                  minutes += 1
                  NOTIFY_CHANNEL.sendMessage(message)
          }
           
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
        sql.get(`SELECT * FROM scores WHERE userId ="${message.author.id}"`).then(row => {
    if (!row) {
      sql.run("INSERT INTO scores (userId, points) VALUES (?, ?)", [message.author.id, 1, 0]);
    } else {
      
      sql.run(`UPDATE scores SET points = ${row.points + 1} WHERE userId = ${message.author.id}`);
    }
  }).catch(() => {
    console.error;
    sql.run("CREATE TABLE IF NOT EXISTS scores (userId TEXT, points INTEGER, level INTEGER)").then(() => {
      sql.run("INSERT INTO scores (userId, points) VALUES (?, ?)", [message.author.id, 1, 0]);
    });
  });
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
