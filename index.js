const { Client, MessageEmbed } = require("discord.js");
const client = new Client();
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

  // get relief pitching information
  const getRelieverInfo = async (name, season) => {
    try {
      const url = "https://www.fgbaseballapi.com/api/";

      let relievingStats = await axios.get(
        `${url}playerrelieving/players/${name}`
      );

      if (msg.content[0] === "!" && relievingStats.data.length === 0) {
        msg.reply("Unable to retrieve relief data");
      }

      let stats = relievingStats.data.filter(item => item.season === season)[0];

      let statsArr = [];

      // console.log(stats);

      Object.keys(stats).forEach(function(key) {
        statsArr.push(`${key}: ${stats[key]}`);
      });
      console.log(statsArr);

      msg.reply(statsArr);
    } catch (error) {
      console.log("This is the error: ");
      console.log(error);
    }
  };

  // get starting pitching information
  const getStarterInfo = async (name, season) => {
    try {
      const url = "https://www.fgbaseballapi.com/api/";

      let startingStats = await axios.get(
        `${url}playerstarting/players/${name}`
      );

      if (msg.content[0] === "!" && startingStats.data.length === 0) {
        msg.reply("Unable to retrieve starting data");
      }

      let stats = startingStats.data.filter(item => item.season === season)[0];

      let statsArr = [];

      // console.log(stats);

      Object.keys(stats).forEach(function(key) {
        statsArr.push(`${key}: ${stats[key]}`);
      });
      console.log(statsArr);

      msg.reply(statsArr);
    } catch (error) {
      console.log("This is the error: ");
      console.log(error);
    }
  };

  // get batting information
  const getBatterInfo = async (name, season) => {
    try {
      const url = "https://www.fgbaseballapi.com/api/";

      let battingStats = await axios.get(`${url}playerbatting/players/${name}`);

      if (msg.content[0] === "!" && battingStats.data.length === 0) {
        msg.reply("Unable to retrieve batting data");
      }

      let stats = battingStats.data.filter(item => item.season === season)[0];

      let statsArr = [];

      // console.log(stats);

      Object.keys(stats).forEach(function(key) {
        statsArr.push(`${key}: ${stats[key]}`);
      });
      console.log(statsArr);

      msg.reply(statsArr);
    } catch (error) {
      console.log("This is the error: ");
      console.log(error);
    }
  };

  if (msg.content[0] === "!") {
    let args = msg.content.substring(prefix.length).split(" ");

    let year = parseInt(args.pop());
    let player = args.join(" ");

    msg.reply(
      "Please respond with the type of information you want: Batting, Starting, or Relieving."
    );

    if (msg.content === "Batting") {
      const embed = new MessageEmbed()
        .setTitle("Batting Data")
        .setColor(0xff0000)
        .setDescription("This is the batting info");

      msg.channel.send(embed);
    }

    // getBatterInfo(player, year);
    // getStarterInfo(player, year);
    // getRelieverInfo(player, year);
  }
});

let token = process.env.TOKEN;

client.login(token);
