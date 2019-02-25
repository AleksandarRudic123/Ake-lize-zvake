const Discord = require("discord.js");
const botconfig = require("../config.json")
module.exports.run = async (bot, message, args) => {

  let prefix = botconfig.prefix;
    if (!message.content.startsWith(prefix)) return;

if (!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send("Ne možeš koristiti ovo!");

let dmGuild = message.guild;
let msg = args.join(' ');

if(!msg || msg.length <= 0) return message.channel.send("Moraš napisati poruku koju hoćeš!");

message.guild.members.forEach(member => {
   setTimeout(function(){
      if(member.id == bot.user.id) return;
        member.send(`${msg}

From  **-** **${message.guild.name}** `)
    
}, 3000);
 
});
  message.channel.send(`Dmall izvržen! *-* Poruka je poslana u DM kod **${message.guild.memberCount}** membera!`)
};

module.exports.help = {
  name:"dmall"
}