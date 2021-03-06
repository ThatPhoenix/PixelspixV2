const Discord = require('discord.js');
const Pix = new Discord.Client();
const settings = require("./settings.json")

Pix.on("ready", async () => {
Pix.user.setActivity(`!Help | Pixelspix V2`)
});

Pix.on("message", message => {
    if (message.author.bot) return;
    if(message.content.indexOf(settings.prefix) !== 0) return;
  //Command Loader
    const args = message.content.slice(settings.prefix.length).trim().split(/ +/g);
    const command = args.shift().toLowerCase();
    try {
      let commandFile = require(`./commands/${command}.js`);
      commandFile.run(Pix, message, args);
    } catch (err) {
           message.reply(`:x: | Pixelspix Error! **${err}**`)
        
    }
})





Pix.login(process.env.NopeNot4you)
