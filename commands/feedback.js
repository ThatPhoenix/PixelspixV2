const Discord = require("discord.js");


module.exports.run = async (Pix, message, args) => {
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

    let feedchannel = Pix.channels.get("567064651423023141").send(feedEmbed)
    message.channel.send("Your message has been delivered to the Pixelspix V2 Developer Feedback Channel and will be read by one of our admin/developers");
    feedchannel.send(feedEmbed);

}

module.exports.help = {
  name: "report"
}
