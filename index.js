const Discord = require("discord.js");
const client = new Discord.Client();
require("dotenv").config();

// const PREFIX = "!";

client.on("ready", () => {
  console.log(`Logged in as ${client.user.tag}`);
});

client.on("message", msg => {
  let members = [];
  // client.users.cache.map(user => {
  //   console.log(user);
  // });

  if (msg.author.username === "darlose04") {
    // console.log(client.users.cache);
    client.users.cache.map(user => {
      console.log(user.username);
    });
  }

  if (msg.author.username === "mwl4h9") {
    msg.channel.send("All hail Commissioner Luhn!!!");
    msg.channel.send("All hail Commissioner Luhn!!!");
    msg.channel.send("All hail Commissioner Luhn!!!");
  }
});

client.on("message", msg => {});

let token = process.env.TOKEN;

client.login(token);
