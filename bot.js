//bot.js
//anything with "//" infront of it is treated as a comment, it doesn't affect the code of the bot
const Discord = require('discord.js');
const config = require("./config.json");
const sql = require("sqlite");
var client = new Discord.Client();
const prefix = ".";
var lastTime;
var int1;
var NOTIFY_CHANNEL;
sql.open("./score.sqlite");

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
 
    NOTIFY_CHANNEL.sendMessage (lastSender + " " + 'has cleared the walls')
    seconds = 0 }
      
        sql.get(`SELECT * FROM scores WHERE userId ="${message.author.id}"`).then(row => {
    if (!row) {
      sql.run("INSERT INTO scores (userId, points) VALUES (?, ?)", [message.author.id, 1, 0]);
    } else {
      let curLevel = Math.floor(0.1 * Math.sqrt(row.points + 1));
      if (curLevel > row.level) {
        row.level = curLevel;
        sql.run(`UPDATE scores SET points = ${row.points + 1}, level = ${row.level} WHERE userId = ${message.author.id}`);
        message.reply(`You've leveled up to level **${curLevel}**! Ain't that dandy?`);
      }
      sql.run(`UPDATE scores SET points = ${row.points + 1} WHERE userId = ${message.author.id}`);
    }
  }).catch(() => {
    console.error;
    sql.run("CREATE TABLE IF NOT EXISTS scores (userId TEXT, points INTEGER, level INTEGER)").then(() => {
      sql.run("INSERT INTO scores (userId, points) VALUES (?, ?)", [message.author.id, 1, 0]);
    });
  });
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
        time = minutes - 1
        NOTIFY_CHANNEL.sendMessage('Its been' + " " + time + " " + 'minutes since the walls were last checked.', {tts: false});
  }
});
      
client.on ('message', message => {
  if (message.content === ".score") {
        sql.get(`SELECT * FROM scores WHERE userId ="${message.author.id}"`).then(row => {
      if (!row) return message.reply("Your score is 0");
      message.reply(`Your score is ${row.points}`);
      })
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
});

//LOGIN TOKEN-------------------------------------------------------------------
client.login('NDA3NTkzODIzOTIxNzY2NDEw.DVIqzw.tVwiSN30_4x6LexUutYETZlyNAU');
