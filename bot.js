const Discord = require("discord.js");
const client = new Discord.Client();





client.on('guildMemberAdd', member => {
    var embed = new Discord.RichEmbed()
    .setThumbnail(member.user.avatarURL)
  .addField("***شكرا الانضمامك الينا***" ,member.user.username )
    .setDescription('**__نتمنى لك قضآء أجمل اللحظات والأوقات معنا__**')
    .setColor('RANDOM')
    .setImage('https://cdn.discordapp.com/attachments/590669646806646806/592554419628015616/Untitled-1.png')
var channel =member.guild.channels.find('name', '🙌『الـترحيب』-•')
if (!channel) return;
channel.send({embed : embed});
});
	
client.on('guildMemberAdd', member => {
  member.guild.fetchInvites().then(guildInvites => {
    const ei = invites[member.guild.id];
    const invite = guildInvites.find(i => ei.get(i.code).uses < i.uses);
    const inviter = client.users.get(invite.inviter.id);
    const xkiller = member.guild.channels.find("name", "welcome");
     xkiller.send(`<@${member.user.id}> Invited By <@${inviter.id}>`);
  });
});	
	
	
	
	
	
client.login(process.env.BOT_TOKEN);// لا تغير فيها شيء
