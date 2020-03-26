const { Client, MessageReaction } = require("discord.js");
const client = new Client();
const axios = require("axios");
require("dotenv").config();

const prefix = "!";

client.on("ready", () => {
  console.log(`Logged in as ${client.user.tag}`);
});

client.on("message", msg => {
  // let members = [];
  // client.users.cache.map(user => {
  //   members.push(user.username);
  // });

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
      // console.log(statsArr);

      msg.channel.send(statsArr);
    } catch (error) {
      console.log("This is the error: ");
      console.log(error);
    }
  };

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

  if (msg.content[0] === "!") {
    let args = msg.content.substring(prefix.length).split(" ");

    let year = parseInt(args.pop());
    let type = args.shift();
    let player = args.join(" ");

    if (type === "Batting") {
      getBatterInfo(player, year);
    } else if (type === "Starting") {
      getStarterInfo(player, year);
    } else if (type === "Relieving") {
      getRelieverInfo(player, year);
    } else {
      msg.reply(
        "Invalid information. Please enter in this format: !Type Name Year. Ex: !Batting Mike Trout 2019. Types are Batting, Starting, Relieving."
      );
    }
  }
});

let token = process.env.TOKEN;

client.login(token);
