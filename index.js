const Discord = require("discord.js");
const dotenv = require("dotenv").config();
const token = process.env.TOKEN;

const client = new Discord.Client();

const faces = [
  "（<｀▽´）―━━☆⌒*.",
  "( ͡⊙ ͜ʖ ͡⊙)⊃══⛧⌒｡:",
  "(^³^ )⊃━✿✿✿✿✿✿",
  "∩(･ u ･)つ―*’⛧`:",
  "（<｀▽´）―━━☆⌒*.",
  "( ͡° ͜ʖ ͡°)⊃―━━☆",
  "（｡･ω･｡)つ━☆・*。"
];

function getRandomItem(guild) {
  let items = Array.from(guild.members);
  return items[Math.floor(Math.random() * items.length)];
}

const talkedRecently = new Set();

client.on("ready", () => {
  console.log(
    `Bot has started, with ${client.users.size} users, in ${client.channels.size} channels of ${client.guilds.size} guilds.`
  );
});

client.on("guildCreate", guild => {
  console.log(
    `New guild joined: ${guild.name} (id: ${guild.id}). This guild has ${guild.memberCount} members!`
  );
});

client.on("guildDelete", guild => {
  console.log(`I have been removed from: ${guild.name} (id: ${guild.id})`);
});

process.on("unhandledRejection", error => {
  console.error("Unhandled promise rejection:", error);
});

client.on("message", async message => {
  if (message.author.bot) return;

  if (
    message.content == "<@" + client.user.id + ">" ||
    message.content == "<@!" + client.user.id + ">"
  ) {
    if (talkedRecently.has(message.author.id)) {
      message.channel.send(
        "Wait 3 seconds before using me again - " + message.author
      );
    } else {
      client.guilds
        .get(message.guild.id)
        .fetchMembers()
        .then(guild => {
          let member = Array.from(getRandomItem(guild));
          var memberid = member.values().next().value;
          var selectedusername = client.users.get(memberid).username;

          message.channel.send(
            "**" +
              faces[Math.floor(Math.random() * faces.length)] +
              "  " +
              selectedusername +
              "**"
          );
        });
      talkedRecently.add(message.author.id);
      setTimeout(() => {
        talkedRecently.delete(message.author.id);
      }, 3000);
    }
  }
});

client.login(token);
