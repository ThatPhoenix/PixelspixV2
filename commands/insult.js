const AnthonyInsults = require('../insults.json');
exports.run = function(Pixel, message, args) {
 let Userss = message.mentions.users.first();
  message.channel.sendMessage(":warning: | This can offend the person your insulting and hurt their feelings.")
      message.channel.send(`${Userss}`+ AnthonyInsults[Math.floor(Math.random() * 4) +1]);
  
};

exports.help = {
  name: 'insult'
};
