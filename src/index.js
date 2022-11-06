const config = require("../resources/config.json")

const { Client } = require("guilded.js");
const fs = require("fs");
const client = new Client({ token: config.token });

client.on("ready", () => console.log(`Bot is successfully logged in`));


const handlerFiles = fs.readdirSync("./handlers/").filter(file => file.endsWith(".js"));
const eventFiles = fs.readdirSync("./events").filter(file => file.endsWith(".js"));

const commandFolders = fs.readdirSync("./commands");

client.commandFolders = commandFolders;

(async () => {

    for (const file of handlerFiles) {
        require(`./handlers/${file}`)(client);
    }

    client.commands = new Map();

    client.registerEvents(eventFiles, "./events");
    client.handleCommands(commandFolders)

    await client.login(config.token);
})();
