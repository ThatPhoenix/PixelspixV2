const Discord = require('discord.js');

exports.run = function(Pix, message, args) {
  var PixelspixEmbed = new Discord.RichEmbed();
    PixelspixEmbed.setTitle('Pixelspix Credits')
  PixelspixEmbed.setDescription(`**Pixelspix's Founder:** *Phoenix#8419* \n**Pixelspix's Co-Owner:** *Brands ツ* \n**Pixelspix Head Administrator:** *Elcobrox#3243* /n**Pixelspix Administrator:** *NUT NUT*
  `);
  PixelspixEmbed.setColor('#FF000');
  PixelspixEmbed.setImage(`${Pix.user.displayAvatarURL}`)
  PixelspixEmbed.setThumbnail(`${Pix.user.displayAvatarURL}`)

  message.channel.send(AnthonyEmbed);
};

exports.help = {
name: 'credits'
};
