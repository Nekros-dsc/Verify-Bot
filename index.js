const express = require('express')
const app = express();
const port = 3000
const Discord = require('discord.js');
const config = require('./config.json')
const client = new Discord.Client();


app.listen(port, () =>
console.log(`Creator: !"Nekros#9999`)
);
const { MessageButton, MessageActionRow } = require('discord-buttons'); 
require('discord-buttons')(client);

client.on("message", (message) => {
if (message.content !== `${config.command}`) return;
  const embed = new Discord.MessageEmbed()
  .setTitle("Verify")
  .setDescription("Pour vérifier sur ce serveur, veuillez cliquer sur le bouton ci-dessous.")
  .setColor('#2f3136')
  .setFooter('Verification System | !"Nekros#9999')
  
  let verify = new MessageButton()
   .setLabel("Verify")
   .setStyle("blurple")
   .setEmoji("✅")
   .setID("Verify")


  message.channel.send({
    button: verify,
    embed: embed 
  });
})

client.on("ready", () => {
    client.user.setActivity("Verification Manager | Nekros")
})

client.on('clickButton', async (button) => {
    if (button.id !== "Verify") return;
    button.reply.send('Vous êtes maintenant vérifié avec succès.', true)
    const role = button.guild.roles.cache.get(`${config.roleID}`)
    const member = button.clicker.member
    await member.roles.add(role)
})

client.login("Put-Token-Here")