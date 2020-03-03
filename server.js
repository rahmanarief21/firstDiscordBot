const Discord = require("discord.js");
const client = new Discord.Client();


client.once('ready', ()=> {
  console.log("Bot Running!");
});

client.on("message", message => {
  if (message.content === "!serverinfo")
    {
      message.channel.send(`Server Name : ${message.guild.id}`);
    }
  else if (message.content === "!member")
    {
      console.log(message.guild.fetch().maximumMembers);
    }
});
client.login("NjgzOTg0MjQwNzY5MTA1OTQx.XlzgJQ.iZgyMariHcxzOSblOqFYz1huJq8");