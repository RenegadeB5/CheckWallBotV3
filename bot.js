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
      
      
      
      console.log('successfully Logged In As Wall Check Bot!');
      NOTIFY_CHANNEL = client.channels.find("name", "checkwall");
      
      function late() {
              inter1 = setInterval(timeto, 60000);
      }
      
      function start() {
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
              NOTIFY_CHANNEL.sendMessage('You are already registered.')
        }
          else { 
                let addRole = '0 points' + ' ' + message.author.id
                message.guild.createRole({
                   name: addRole,
                   color: 'BLUE',
              });
              function addRoles() {
                    let input = '0 points' + ' ' + message.author.id
                    let role1 = message.guild.roles.find("name", input);
                    let role2 = message.guild.roles.find("name", "Registered");
                    const guildMember = message.member;
                    guildMember.addRole(role1);
                    guildMember.addRole(role2);
              }
              function moveRole() {
                    let move = '0 points' + ' ' + message.author.id
                    let role = message.guild.roles.find("name", move);
                    role.setPosition(3)
              }
              
              setTimeout(addRoles, 1000);
              setTimeout(moveRole, 2000);
              NOTIFY_CHANNEL.sendMessage('You were successfully registered, now your points will be stored.')
          }
}}); 

client.on('message', message => {
  if (message.content == prefix + 'clear') {
        let checkIf = message.guild.roles.find("name", "Registered");
        if (message.member.roles.has(checkIf.id)) {
            lastSender = message.guild.lastSender = message.author    
            NOTIFY_CHANNEL.sendMessage(lastSender + " " + 'has cleared the walls and has gained 1 point.')
            var findID = message.member.roles.map(r => r.name);
            const found1 = findID.filter(word => word.length > 26);
            found1.toString();
            var found2 = found1[0]
            var found3 = found2.split(' ').join(',');
            var found4 = found3[0]
            var chars = Number(found4);
            var points = chars + 1
            let newName = points + ' ' + 'points' + ' ' + message.author.id
            let input = chars + ' ' + 'points' + ' ' + message.author.id
            let role = message.guild.roles.find("name", input);
            role.setName(newName);
            
        }
        else {
              lastSender = message.guild.lastSender = message.author    
              NOTIFY_CHANNEL.sendMessage(lastSender + " " + 'has cleared the walls, but isnt registered.')
        }
               
               function stop() {
                       console.log('cleared');
                       clearInterval(inter1);
                       clearInterval(inter2);
               }
                client.user.setStatus('online')
                client.user.setPresence({ game: { name: 'The walls are safe', type: 0 } });
                stop();
                setTimeout(start, 100);                 
             }           
});
      
//RAID ------------------------------------------------------------------
client.on ('message', message => {
  if (message.content === prefix + "weewoo") {
    client.user.setStatus('dnd')
    client.user.setPresence({ game: { name: 'We are being raided!', type: 0 } });
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
