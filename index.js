const Discord = require("discord.js");
const client = new Discord.Client();
const axios = require("axios");
require("dotenv").config();

const prefix = "!";

client.on("ready", () => {
  console.log(`Logged in as ${client.user.tag}`);
});

client.on("message", msg => {
  let members = [];
  client.users.cache.map(user => {
    members.push(user.username);
  });

  let args = msg.content.substring(prefix.length).split("!");

  if (msg.content[0] === "!") {
    msg.reply("Is this ");
  }

  console.log(args[0]);

  const getPlayerInfo = async name => {
    let info = await axios.get();
  };

  // if (msg.author.username === "mwl4h9") {
  //   msg.channel.send("All hail Commissioner Luhn!!!");
  //   msg.channel.send("All hail Commissioner Luhn!!!");
  //   msg.channel.send("All hail Commissioner Luhn!!!");
  // }
});

client.on("message", msg => {});

let token = process.env.TOKEN;

client.login(token);
