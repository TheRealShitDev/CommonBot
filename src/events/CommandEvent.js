const { prefix } = require("../../resources/config.json")

module.exports = {
    name: "messageCreated",
    async execute(message, client) {

        const rawMessage = message.content;
        const args = rawMessage.split(" ");

        if (!rawMessage.startsWith(prefix)) return;

        const commandName = args[0].replace(prefix,"");

        if (!client.commands.get(commandName.toLowerCase())) {
            await message.reply("Command not found!")
            return;
        }

        client.commands.get(commandName).execute(message, args, client);

    }
}