const Discord = require("discord.js");
const botconfig = require("../config.json");

module.exports.run = async (bot, message, args) => {

  let prefix = botconfig.prefix;
  if (!message.content.startsWith(prefix)) return;
    
let embed = new Discord.RichEmbed()
.setDescription("Pogledaj **DM** Za Komande !")
.setFooter("Help", message.author.displayAvatarURL);
   let helpembed = new Discord.RichEmbed()
   
   

   .setAuthor("Invisible Network Bot Komande !")
   .setColor("#9933ff")
   .addField(":name_badge: **Staff/Admin Komande**", ".dmall, .say, .clear, .poll, .ban, .kick, .mute, .unmute")
   .addField(":red_circle: **Komande za svakog**", ".help, .serverinfo, .ping, .level")
   .addField(":tada: **Zabava**", ".8ball, .yesno, .meme, .avatar")
   .addField(":pushpin: **Pozovite Prijatelje**", ".invite, .createinv")   
   .addField(":underage: **NSFW**", "-ass, -boobs, -gif, -milf")
   .setDescription("Ako nađete neki bag javite se owneru bota __**ttv.lilcoqqq#6395**__,bot je još uvijek u izradi,nekih komandi sa ove liste još nema ali će doci uskoro!")  
                  
  
message.channel.send(embed)
return  message.member.send(helpembed);
 

};


module.exports.help = {
    name: "help"
}