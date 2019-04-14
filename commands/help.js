const Discord = require('discord.js');

exports.run = function(Pix, message, args) {
  var PixelspixEmbed = new Discord.RichEmbed();
    PixelspixEmbed.setTitle('Pixelspix Help')
  PixelspixEmbed.setDescription(`Under developement`)
  PixelspixEmbed.setColor('#FF000');
  PixelspixEmbed.setImage(`${Pix.user.displayAvatarURL}`)
  PixelspixEmbed.setThumbnail(`${Pix.user.displayAvatarURL}`)

  message.channel.send(PixelspixEmbed);
};

exports.help = {
name: 'credits'
};
