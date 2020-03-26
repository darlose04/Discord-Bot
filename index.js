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

  let args = msg.content.substring(prefix.length).split(" ");

  let year = args.pop();
  let player = args.join(" ");

  const getPlayerInfo = async (name, season) => {
    const url = "https://www.fgbaseballapi.com/api/";

    let battingStats = await axios.get(`${url}playerbatting/players/${name}`);

    if (msg.content[0] === "!" && battingStats.data.length === 0) {
      msg.reply("Unable to retrieve data");
    }
    console.log(season);
    battingStats.data.map(item => {
      if (item.season === season) {
        console.log(item);
      }
    });
  };

  getPlayerInfo(player, year);
});

client.on("message", msg => {});

let token = process.env.TOKEN;

client.login(token);
