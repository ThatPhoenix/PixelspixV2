const Discord = require("discord.js");

module.exports.run = async (Pix, message, args) => {
    let Pixicon = Pix.user.displayAvatarURL;
    let Pixembed = new Discord.RichEmbed()
    .setDescription("Pixelspix Stats & Information")
    .setColor("#15f153")
    .setThumbnail(Pixicon)
    .addField("Pixelspix's Name", Pix.user.username)
    .addField("Pixelspix Was Created On", Pix.user.createdAt);
    .addField('Uptime in mili-seconds', `${Pix.uptime}`);
    .addField('Users :o', `${Pix.users.size}`)
    .addField('Channels:', `${Pix.channels.size}`)

    message.channel.send(botembed);
}

module.exports.help = {
  name:"botinfo"
}
