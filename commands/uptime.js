const botconfig = require("../botconfig.json");
const prefix = botconfig.prefix
const discord = module.require('discord.js');

module.exports.run = async (bot, message, args) => {
if(!message.content.startsWith(prefix))return;
  
  var hrs = Math.round(bot.uptime / (1000 * 60 * 60)) + " hour(s),"
  var mins = " " + Math.round(bot.uptime / (1000 * 60)) % 60 + " minute(s), "
  var sec = Math.round(bot.uptime / 1000) % 60 + " second(s)"
  if (hrs == "0 hour(s),") hrs = ""
  if (mins == " 0 minute(s), ") mins = ""
  let uptime = hrs+mins+sec
  
  let em = new discord.RichEmbed()
  .setTitle(`**${bot.user.username} Uptime**\n`)
  .setDescription(`**Serving ${bot.guilds.size} servers for ${uptime}!**`)
  .setColor("RANDOM")
  .setTimestamp()
  .setFooter(`Requested by ${message.author.username}.`)
  message.channel.send({embed: em})
}

module.exports.help = {
  name: "uptime"
}
