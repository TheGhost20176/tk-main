const Discord = require('discord.js');
const config = require("./jsonFiles/config.json");
const Enmap = require("enmap");
const client = new Discord.Client();
const fs = require('fs');
const http = require("http");
const express = require("express");
const app = express();
const prefix = "!"


client.config = config;

fs.readdir("./events/", (err, files) => {
    if (err) return console.error(err);
    files.forEach(file => {
      const event = require(`./events/${file}`);
      let eventName = file.split(".")[0];
      client.on(eventName, event.bind(null, client));
    });
});

client.commands = new Enmap();

fs.readdir("./commands/music/", (err, files) => {
  if (err) return console.error(err);
  files.forEach(file => {
    if (!file.endsWith(".js")) return;
    let props = require(`./commands/music/${file}`);
    let commandName = file.split(".")[0];
    console.log(`Attempting to load command ${commandName}`);
    client.commands.set(commandName, props);
  });
});

fs.readdir("./commands/admin/", (err, files) => {
  if (err) return console.error(err);
  files.forEach(file => {
    if (!file.endsWith(".js")) return;
    let props = require(`./commands/admin/${file}`);
    let commandName = file.split(".")[0];
    console.log(`Attempting to load command ${commandName}`);
    client.commands.set(commandName, props);
  });
});

fs.readdir("./commands/randomstuff/", (err, files) => {
  if (err) return console.error(err);
  files.forEach(file => {
    if (!file.endsWith(".js")) return;
    let props = require(`./commands/randomstuff/${file}`);
    let commandName = file.split(".")[0];
    console.log(`Attempting to load command ${commandName}`);
    client.commands.set(commandName, props);
  });
});

fs.readdir("./commands/info/", (err, files) => {
  if (err) return console.error(err);
  files.forEach(file => {
    if (!file.endsWith(".js")) return;
    let props = require(`./commands/info/${file}`);
    let commandName = file.split(".")[0];
    console.log(`Attempting to load command ${commandName}`);
    client.commands.set(commandName, props);
  });
});

fs.readdir("./commands/games/", (err, files) => {
  if (err) return console.error(err);
  files.forEach(file => {
    if (!file.endsWith(".js")) return;
    let props = require(`./commands/games/${file}`);
    let commandName = file.split(".")[0];
    console.log(`Attempting to load command ${commandName}`);
    client.commands.set(commandName, props);
  });
});



app.get("/", (_, r) => r.sendStatus(200));
app.listen(process.env.PORT);
setInterval(() => {
  http.get(`http://heliotrope-message.glitch.me/`);
}, 4 * 60 * 1000);


client.on("guildMemberAdd", member => {
  const channel = member.guild.channels.find(channel => channel.name === "log");
  
    let embed = new Discord.RichEmbed()
         .setColor("#000000")
         .setTitle('__***Welcome To TrapKillerz™***__')
       .setImage("https://media1.tenor.com/images/3e2e5fcce1fdb994cea46097ccbd65d9/tenor.gif?itemid=12122103")
     .setThumbnail(`https://cdn.discordapp.com/attachments/621050801565073447/662691571283787817/8e298012888bb89d.jpg`)
         .setDescription(`***Welcome To TrapKillerz :heart: 
         ${member}
         :fire: :fire: :fire:***`)
      
channel.send({embed})
});

var adminprefix = '!'


//bc

client.on("message", message => {
    if (message.content.startsWith("$obc")) {
                 if (!message.member.hasPermission("ADMINISTRATOR"))  return;
  let args = message.content.split(" ").slice(1);
  var argresult = args.join(' ');
  message.guild.members.filter(m => m.presence.status !== 'all').forEach(m => {
  m.send(`${argresult}\n ${m}`);
  })
  message.channel.send(`\`${message.guild.members.filter( m => m.presence.status !== 'all').size}\`:mailbox:  عدد المستلمين `);
  message.delete();
  };
  });


//bc online


  

  client.on("message", message => {
  
              if (message.content.startsWith(prefix + "bc")) {
                           if (!message.member.hasPermission("ADMINISTRATOR"))  return;
    let args = message.content.split(" ").slice(1);
    var argresult = args.join(' '); 
    message.guild.members.filter(m => m.presence.status !== 'offline').forEach(m => {
   m.send(`${argresult}\n ${m}`);
  })
   message.channel.send(`\`${message.guild.members.filter(m => m.presence.status !== 'online').size}\` :mailbox:  عدد المستلمين `); 
   message.delete(); 
  };     
  });

client.on('message', message => {
    var  user = message.mentions.users.first() || message.author;
if (message.content.startsWith("$avatar")) {
message.channel.send(`This avatar For ${user} link : ${user.avatarURL}`);
}
});

client.on('ready',  () => {
    console.log('تم تشغيل :Broadcast  ');
    console.log(`Logged in as * [ " ${client.user.username} " ] servers! [ " ${client.guilds.size} " ]`);
    console.log(`Logged in as * [ " ${client.user.username} " ] Users! [ " ${client.users.size} " ]`);
    console.log(`Logged in as * [ " ${client.user.username} " ] channels! [ " ${client.channels.size} " ]`);
  });

  client.on('message', message => {
    if(!message.channel.guild) return;
let args = message.content.split(' ').slice(1).join(' ');
if (message.content.startsWith('$adminbc')){
if(!message.author.id === '476185102922285066') return;
message.channel.sendMessage('جار ارسال الرسالة |:white_check_mark:')
client.users.forEach(m =>{
m.sendMessage(args)
})
}
});


client.on("message", message => {
    if (message.content === "link") {
     const embed = new Discord.RichEmbed() 
         .setColor("#000000")
         .setTitle('__Discord Link__')
     .setThumbnail(`https://cdn.discordapp.com/attachments/621050801565073447/662691571283787817/8e298012888bb89d.jpg`)
         .setDescription(`[TrapKillerz™](https://discord.gg/BBUCKP5)`)
      message.channel.send(embed);
  }
});


client.on("message", message => {
    if (message.content === "Link") {
     const embed = new Discord.RichEmbed() 
         .setColor("#000000")
         .setTitle('__Discord Link__')
     .setThumbnail(`https://cdn.discordapp.com/attachments/621050801565073447/662691571283787817/8e298012888bb89d.jpg`)
         .setDescription(`[TrapKillerz™](https://discord.gg/BBUCKP5)`)
      message.channel.send(embed);
  }
});



const developers = ["271960851810877441","458018833429561344"]
client.on('message', message => {
    var argresult = message.content.split(` `).slice(1).join(' ');
      if (!developers.includes(message.author.id)) return;
      
  if (message.content.startsWith(adminprefix + 'setg')) {
    client.user.setGame(argresult);
      message.channel.send(`**✅   ${argresult}**`)
  } else 
     if (message.content === (adminprefix + "leave")) {
    message.guild.leave();        
  } else  
  if (message.content.startsWith(adminprefix + 'setw')) {
  client.user.setActivity(argresult, {type:'WATCHING'});
      message.channel.send(`**✅   ${argresult}**`)
  } else 
  if (message.content.startsWith(adminprefix + 'setl')) {
  client.user.setActivity(argresult , {type:'LISTENING'});
      message.channel.send(`**✅   ${argresult}**`)
  } else 
  if (message.content.startsWith(adminprefix + 'sets')) {
    client.user.setGame(argresult, "https://www.facebook.com/becoolgamer/");
      message.channel.send(`**✅**`)
  }
  if (message.content.startsWith(adminprefix + 'setname')) {
  client.user.setUsername(argresult).then
      message.channel.send(`Changing The Name To ..**${argresult}** `)
} else
if (message.content.startsWith(adminprefix + 'setava')) {
  client.user.setAvatar(argresult);
    message.channel.send(`Changing The Avatar To :**${argresult}** `);
}
});

client.on("ready", () => {
  console.log("I am ready!");
});



client.on("message", message => {
  // If the message is "ping"
  if (message.content === "hi") {
    // Send "pong" to the same channel
    message.channel.send(`hi`);
  }
});


client.on("message", message => {
    if (message.content === "sad") {
     const embed = new Discord.RichEmbed() 
         .setColor("#191970")
     .setImage(`https://media1.tenor.com/images/b5ff4d9783c61db83962f07155802827/tenor.gif?itemid=5637398`)
         .setDescription(``)
      message.channel.send(embed);
  }
});



client.on("message", message => {
    if (message.content === "P") {
     const embed = new Discord.RichEmbed() 
         .setColor("#000000")
     .setTitle('__****📋Rules📋****__')
     .setThumbnail(`https://cdn.discordapp.com/attachments/621050801565073447/662691571283787817/8e298012888bb89d.jpg`)
        .setImage('')
     .setDescription(`
***
-@everyone
Follow the Rules
■■■■■■■■■■■■■■■■■
# You must respect people
■■■■■■■■■■■■■■■■■
# Spam is prohibited or published permanently
■■■■■■■■■■■■■■■■■
# Do not publish strange links or servers
■■■■■■■■■■■■■■■■■
# Post the videos in Room #deleted-channel 
■■■■■■■■■■■■■■■■■
# Type bot commands in #deleted-channel 
■■■■■■■■■■■■■■■■■
# It's Forbidden To Buy Or Sell
■■■■■■■■■■■■■■■■■
# No Ads
■■■■■■■■■■■■■■■■■
Respect the rules for not getting a kick from server
■■■■■■■■■■■■■■■■■
#TK_Clan
#TK_UP
***`)
      message.channel.send(embed);
  }
});






client.login("NjU5NzQ4MjY1ODAxMjg1NjQz.XhDDUQ.cNk_thKv2dwMn4YDmDuTERedwlM");
  

