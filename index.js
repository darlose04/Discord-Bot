const Discord = require("discord.js");
const client = new Discord.Client();
const axios = require("axios");
require("dotenv").config();

// const PREFIX = "!";

client.on("ready", () => {
  console.log(`Logged in as ${client.user.tag}`);
});

client.on("message", msg => {
  let members = [];
  client.users.cache.map(user => {
    members.push(user.username);
  });

  // for (let i = 0; i < members.length; i++) {
  //   if (
  //     msg.author.username !== "BaseballBot" &&
  //     msg.author.username !== "mwl4h9" &&
  //     msg.author.username === members[i]
  //   ) {
  //     msg.reply(`Hello ${members[i]}`);
  //   }
  // }

  // if (msg.author.username === "darlose04") {
  //   msg.channel.send("I am merely here to serve our fearless leader, Commissioner Luhn.");
  //   setTimeout(() => {
  //     msg.channel.send("All hail Commissioner Luhn!");
  //   }, 5000)

  // }

  // if (msg.author.username === "mwl4h9") {
  //   msg.channel.send("All hail Commissioner Luhn!!!");
  //   msg.channel.send("All hail Commissioner Luhn!!!");
  //   msg.channel.send("All hail Commissioner Luhn!!!");
  // }
});

client.on("message", msg => {});

let token = process.env.TOKEN;

client.login(token);
