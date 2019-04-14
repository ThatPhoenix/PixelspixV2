const Discord = require("discord.js");


module.exports.run = async (pix, message, args) => {
    message.delete();
    if(args[0] == "help"){
      message.reply("Usage: !feedback <Your feedback here>");
      return;
    }
    let fedback = message.content 


    let feedEmbed = new Discord.RichEmbed()
    .setDescription("Reports")
   
    .addField("Feedback message", `${fedback}`)
    .addField("Feedback By", `${message.author} with ID: ${message.author.id}`)

    .addField("Time", message.createdAt)

    let reportschannel = Pix.channels.get("567064651423023141").send(feedEmbed)
    message.channel.send("Your message has been delivered to the Pixelspix V2 Developer Feedback Channel and will be read by one of our admin/developers");
    reportschannel.send(reportEmbed);

}

module.exports.help = {
  name: "report"
}
