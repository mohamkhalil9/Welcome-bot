const Discord = require("discord.js");
const client = new Discord.Client();





client.on('guildMemberAdd', member => {
    var embed = new Discord.RichEmbed()
    .setThumbnail(member.user.avatarURL)
  .addField("***شكرا الانضمامك الينا***" ,member.user.username )
    .setDescription('**بكل حب واحترام وشوق نستقبلك ونتمنى لك قضآء أجمل اللحظات ولآوقات معنا**')
    .setColor('RANDOM')
    .setImage('https://cdn.discordapp.com/attachments/592539684664770561/592542955554865164/welcome_4.png')
var channel =member.guild.channels.find('name', '🙌『الـترحيب』-•')
if (!channel) return;
channel.send({embed : embed});
});
	
	
	
	
	
	
	
client.login(process.env.BOT_TOKEN);// لا تغير فيها شيء
