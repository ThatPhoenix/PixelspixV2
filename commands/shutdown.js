
const Discord = require('discord.js');

exports.run = function(Pix, message, args) {
if (message.author.id === "498186211249225728") {

  var PixelspixEmbed = new Discord.RichEmbed();
    PixelspixEmbed.setTitle('Pixelspix Shutdown')
  PixelspixEmbed.setDescription(`Under developement`)
  PixelspixEmbed.setColor('#FF000');
  PixelspixEmbed.setImage(`${Pix.user.displayAvatarURL}`)
  PixelspixEmbed.setThumbnail(`${Pix.user.displayAvatarURL}`)

  message.channel.send(PixelspixEmbed);
  }
};

exports.help = {
name: 'credits'
}
