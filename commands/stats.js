const Discord = require("discord.js");

module.exports.run = async (Pix, message, args) => {
    let Pixicon = Pix.user.displayAvatarURL;
    let Pixembed = new Discord.RichEmbed()
    Pixembed.setDescription("Pixelspix Stats & Information")
    Pixembed.setColor("#15f153")
    Pixembed.setThumbnail(Pixicon)
    Pixembed.addField("Pixelspix's Name", Pix.user.username)
    Pixembed.addField("Pixelspix Was Created On", Pix.user.createdAt);
    Pixembed.addField('Uptime in mili-seconds', `${Pix.uptime}`);
    Pixembed.addField('Users :o', `${Pix.users.size}`)
    Pixembed.addField('Channels:', `${Pix.channels.size}`)
    Pixembed.addField('Servers:', `${Pix.guilds.size}`) 

    message.channel.send(Pixembed);
}

module.exports.help = {
  name:"botinfo"
}
