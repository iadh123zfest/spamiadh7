const Discord = require('discord.js');
const client = new Discord.Client();
console.log("Scrpit By Dream");


client.on("ready", () => {
let channel =     client.channels.get("هنا اي دي الروم")
setInterval(function() {
channel.send(`**Credit By SAAAAAAAAAAAD كريدت باي سااااد**`);
}, 30)
})

client.login(process.env.BOT_TOKEN);
