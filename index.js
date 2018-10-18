const commando = require('discord.js-commando');

const bot = new commando.Client();

bot.on("guildMemberAdd", member => {
    let guild = member.guild;
    guild.defaultChannel.sendMessage(`Welcome ${member.user} to the Wonky Server!The wonkiest place on Earth!`).catch(console.error);


  });


bot.registry.registerGroup('random', 'Random');

bot.registry.registerGroup('quotes', 'Quotes');

bot.registry.registerGroup('basic', 'Basic');

bot.registry.registerDefaults();

bot.registry.registerCommandsIn(__dirname + "/commands");

bot.on("ready", async () => {
  console.log(`${bot.user.username} is online!`);

  bot.user.setActivity("Loot hoovering around in Thedas!");



});


client.login(process.env.BOT_TOKEN);
