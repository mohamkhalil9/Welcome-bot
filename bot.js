const Discord = require("discord.js");
const client = new Discord.Client();





client.on('guildMemberAdd', member => {
    var embed = new Discord.RichEmbed()
    .setThumbnail(member.user.avatarURL)
  .addField("***شكرا الانضمامك الينا***" ,member.user.username )
  .addField('➡| انت العضو رقم',`${member.guild.memberCount}`)  
    .setDescription('**__نتمنى لك قضآء أجمل اللحظات والأوقات معنا__**')
    .setColor('RANDOM')
    .setImage('https://cdn.discordapp.com/attachments/590669646806646806/592554419628015616/Untitled-1.png')
var channel =member.guild.channels.find('name', '🙌『الـترحيب』-•')
if (!channel) return;
channel.send({embed : embed});
});
		

	
	
	
client.login(process.env.BOT_TOKEN);// لا تغير فيها شيء
