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
		
client.on('guildMemberRemove', member => {
        var embed = new Discord.RichEmbed()
        .setAuthor(member.user.username, member.user.avatarURL)
        .setThumbnail(member.user.avatarURL)
        .setTitle(`لقد خرج صديق :( :raised_hand::skin-tone-1: :pensive:`)
        .setDescription(`مع السلامة يحبي :raised_hand::skin-tone-1: :pensive: `)
        .addField(':bust_in_silhouette:   تبقي',`**[ ${member.guild.memberCount} ]**`,true)
        .setColor('RED')
        .setFooter(`====شكرا للاستمتاع====`, ' https://cdn.discordapp.com/attachments/397818254439219217/399292026782351381/shy.png')
    
    var channel =member.guild.channels.find('name', '🙌『الـترحيب』-•')
    if (!channel) return;
    channel.send({embed : embed});
    })
	
	
	
	
	
	
	
	


client.on('ready', () => {
   console.log(`----------------`);
      console.log(`Desert Bot- Script By : EX Clan`);
        console.log(`----------------`);
      console.log(`ON ${client.guilds.size} Servers '     Script By : EX Clan ' `);
    console.log(`----------------`);
  console.log(`Logged in as ${client.user.tag}!`);
client.user.setGame(`Welcome To ExPlosive Server | [ Ex Clan ] .`,"http://twitch.tv/Death Shop")
client.user.setStatus("idle")
});

	
	
	
client.login(process.env.BOT_TOKEN);// لا تغير فيها شيء
