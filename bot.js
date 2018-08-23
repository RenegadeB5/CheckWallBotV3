//bot.js
//anything with "//" infront of it is treated as a comment, it doesn't affect the code of the bot
const Discord = require('discord.js');
var client = new Discord.Client();
const prefix = ".";
var lastTime;
var NOTIFY_CHANNEL;
var minutes = 0
var inter1;
var inter2;
const sql = require("sqlite");
sql.open("./score.sqlite");


client.on('ready', () => {
      
      
      
      client.user.setPresence({ game: { name: process.env.playing, type: 0 } });
      console.log('successfully Logged In As Wall Check Bot!');
      NOTIFY_CHANNEL = client.channels.find("name", "checkwall");
      
      function late() {
              inter1 = setInterval(timeto, 60000);
      }
      
      function start() {
            console.log('restarted');
            minutes = 0
            inter2 = setInterval(counter, 60000);
            setTimeout(late, 1000);
      }
      start();
      function counter() {
            minutes += 1
      }
      
             
      function timeto() { 
            if (minutes >= 3) {
                  if (minutes >= 10) {
                           tag = '@everyone'
                     }
                     else {
                           tag = '@here'
                     }
                  console.log(tag); 
                  message = tag + " " + 'The walls have not been checked in' + " " + minutes + " " + 'minutes.'
                  NOTIFY_CHANNEL.sendMessage(message)
            }
            else {
                  return;
            }
         
      }
       

//CHECKED-----------------------------------------------------------------------

client.on ('message', message => {  
  if (message.content === ".register") { 
        let checkIf = message.guild.roles.find("name", "Registered");
        if (message.member.roles.has(checkIf.id)) {
              NOTIFY_CHANNEL.sendMessage('You are already registered')
        }
          else { 
                let addRole = '0 points' + ' ' + message.author.id
                message.guild.createRole({
                   name: addRole,
                   color: 'BLUE',
                   position: '3',
              });
              function addRoles() {
                    let input = '0 points' + ' ' + message.author.id
                    let role1 = message.guild.roles.find("name", input);
                    let role2 = message.guild.roles.find("name", "Registered");
                    const guildMember = message.member;
                    guildMember.addRole(role1);
                    guildMember.addRole(role2);
              }
              setTimeout(addRoles, 1000);
              NOTIFY_CHANNEL.sendMessage('You were successfully registered, now your points will be stored.')
          }
}}); 

client.on('message', message => {
  if (message.content == prefix + 'clear') {
    lastSender = message.guild.lastSender = message.author    
    NOTIFY_CHANNEL.sendMessage(lastSender + " " + 'has cleared the walls.')
      
      console.log(inter1);
      function stop() {
            console.log('cleared');
            clearInterval(inter1);
            clearInterval(inter2);
      }
      
      stop();
      setTimeout(start, 100);                 
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
client.login(process.env.BOT_TOKEN);
