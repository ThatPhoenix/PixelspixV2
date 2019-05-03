const Discord = require('discord.js');

exports.run = function(Pix, message, args) {
  var PixelspixEmbed = new Discord.RichEmbed();
    PixelspixEmbed.setTitle('Pixelspix Help')
  PixelspixEmbed.setDescription(":rofl: | **Fun Commands **: `say` ` \n:information_source: | **Info commands:** `credits`  `ping` `invite`  :floppy_disk: | **Utility commands** `feedback`")
  PixelspixEmbed.setColor('#FF000');
  PixelspixEmbed.setThumbnail(`${Pix.user.displayAvatarURL}`)

  message.channel.send(PixelspixEmbed);
};

exports.help = {
name: 'credits'
};
