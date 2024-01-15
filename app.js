const { Client, GatewayIntentBits } = require("discord.js");
const Tesseract = require("tesseract.js");
// const { Player } = require('discord.js-music-v11');
const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent,
  ],
});

//give him a power to my bot
/*
    It acts as a bridge between your bot and my Discord servers,
    allowing your bot to send and receive messages,
    respond to events, and perform various actions within a Discord server.
    intents - > ki ki permission dichi
*/

client.on("messageCreate", async (msg) => {
  let getMsgFromClient = msg.content;

  // console.log(msg);

  
  if (!msg.author.bot) {
    let filter = getMsgFromClient.toLowerCase().replace(" ", "").trim();
    0;

       //pokup the bot
      if (filter == "#heydp") {
        msg.reply({
          content: "Hey @" + msg.author.username + " I think you call me!",
        });
      }

      //about the bot
      if (filter == "#aboutyou") {
        msg.reply({
          content: `Hey <@${msg.author.id}> I am  your helping bot. Recently under development!.I think Avishek knows you!`,
        });
      }

      //if new client joined
      if (getMsgFromClient == "" && msg.attachments == undefined) {
        msg.reply(`Welcome Bro <@${msg.author.id}>! Nice to meet you :)`);
      }



      //condition for image to text
      if (filter == "#texttoimage" && msg.attachments.first().contentType.indexOf("image") >= 0) {
        //msg.reply(`<@${msg.author.id}>! Please Attach a image`);
        try {
          if (msg.attachments.first().contentType.indexOf("image") >= 0) {
            let imageUrl = msg.attachments.first().url;
            const { data } = await Tesseract.recognize(
              imageUrl,
              'eng',
              {  }
          );
            msg.reply(` <@${msg.author.id}> Here is your output:\n ${data.text}`);
          }
        } catch (e) {
          //console.log(e);
        }
      }
  }
});

client.login(
  "MTE5NTY5MDIyMTcyODE5MDU4NA.GO5YLb.dZcPhpdixtM8eBuYkxdXm2esUjsDKijoKzAtWw"
);
