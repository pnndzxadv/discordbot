// Packages Needed
const Discord = require('discord.js');
const client = new Discord.Client();
let tokenfile = require('./token.json');

// Variables
const prefix = '=';
const ownerID = '241160382507384832';
const active = new Map();

const serverStats = {
  guildID: '500224890033537024',
  totalUsersID: '503230014834212891',
  memberCountID: '503230056554823684',
  botCountID: '503230079351128064',
};

global.servers = {};

// Listener Events
client.on('message', message => {

  // Variables
  let args = message.content.slice(prefix.length).trim().split(' ');
  let cmd = args.shift().toLowerCase();

  // Return Statements
  if (message.author.bot) return;
  if (!message.content.startsWith(prefix)) return;

  // Comand Handler
  try {
    //delete require.cache[require.resolve(`./commands/${cmd}.js`)];  

    //Options
    let ops = {
        ownerID: ownerID,
        active: active
    } // Acu, 'ops' mereu trece de c

    let commandFile = require(`./commands/${cmd}.js`);
    commandFile.run(client, message, args, ops);

  } catch (e) {
    console.log(e.stack)
  }

});

client.on('ready', () => console.log ('Launched'));


// Login to discord
client.login(tokenfile.TOKEN);

client.on('ready', () => {
  client.user.setGame('Slujindu-l pe Down')
})

