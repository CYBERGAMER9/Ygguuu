const Discord = require('discord.js-selfbot-v13');
const client = new Discord.Client({
  readyStatus: false,
  checkUpdate: false
});

const keepAlive = require('./server.js');
keepAlive();

client.on('ready', async () => {
    console.clear();
    console.log(`${client.user.tag} - rich presence started!`);

    const r = new Discord.RichPresence()
        .setApplicationId('1099642415754776628')
        .setType('STREAMING')
        .setURL('https://twitch.tv/cyber_winner')
        .setState('Idle')
        .setName('Chill with cyber')
        .setDetails('CHILL WITH PRANJAL')
      
        .setAssetsLargeText('WATCHING YOUTUBE')
        .setAssetsSmallText('Verified');

    client.user.setActivity(r);
    client.user.setPresence({ status: 'dnd' });
});

client.login(process.env.TOKEN);












