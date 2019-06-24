const Discord = require("discord.js");
const client = new Discord.Client();





client.on('guildMemberAdd', member => {
    var embed = new Discord.RichEmbed()
    .setThumbnail(member.user.avatarURL)
  .addField("Name:",`<@` + `${member.id}` + `>`, true) 
  .addField('➡| انت العضو رقم',`${member.guild.memberCount}`)
    .setDescription('**__نتمنى لك قضآء أجمل اللحظات والأوقات معنا__**')
    .setColor('RANDOM')
    .setImage('https://media.giphy.com/media/oe33xf3B50fsc/giphy.gif')
var channel =member.guild.channels.find('name', '🙌『الـترحيب』-•')
if (!channel) return;
channel.send({embed : embed});
});
		

	
	
	
client.login(process.env.BOT_TOKEN);// لا تغير فيها شيء
