const discord = require("discord.js");
const fs = require("fs");
const config = require("./config.json");
const bot = new discord.Client({disableEveryone: true});

//////////////// - Bot Rready - ////////////////

bot.on("ready", async () => {
  console.log(`${bot.user.username} is ready for action!`);
  bot.user.setActivity("InvisibleBOT $help");
});

//////////////// - Commands Load- ////////////////

bot.commands = new discord.Collection();
fs.readdir("./commands/", (err, files) => {
  if (err) console.error(err);
  let jsfiles = files.filter(f => f.split(".").pop() === "js");

  if (jsfiles.length <= 0) return console.log("There are no commands to load...");

  console.log(`Loading ${jsfiles.length} commands...`);
  jsfiles.forEach((f, i) => {
    let props = require(`./commands/${f}`);
    console.log(`${i + 1}: ${f} loaded!`);
    bot.commands.set(props.help.name, props);
  });
});

//////////////// - Events - ////////////////
bot.on("guildMemberAdd", member => {
        let channel = member.guild.channels.find('name', '????welcome');
        let embed = new Discord.RichEmbed()
        .setColor('#BF00FF')
        .setDescription("```?? LGC Squad```")
        .addField("__**Welcome**__", `${member} has join to server ?? , your are __**${member.guild.memberCount}**__ member ??`)
        .setThumbnail(member.user.avatarURL)
        .setFooter(`${member.guild.name}`)
        .setTimestamp()

        channel.sendEmbed(embed)

    })

    bot.on("guildMemberRemove", member => {
        let channel = member.guild.channels.find('name', '????welcome');
        let embed = new Discord.RichEmbed()
        .setColor('#BF00FF')
        .setDescription("```?? LGC Squad```")
        .addField("__**Left**__", `${member} just left the server ??`)
        .setThumbnail(member.user.avatarURL)
        .setFooter(`${member.guild.name}`)
        .setTimestamp()

        channel.sendEmbed(embed)

    })





bot.login(config.token);
