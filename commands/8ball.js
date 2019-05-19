const PixelP8 = require('../ball.json');
exports.run = function(Pixel, message, args) {
      message.channel.send(PixelP8[Math.floor(Math.random() * 20) +1]);
  
};

exports.help = {
  name: '8ball'
};
