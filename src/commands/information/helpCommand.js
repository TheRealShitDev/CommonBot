const {Embed} = require("guilded.js");

const {prefix} = require("../../../resources/config.json")
const fs = require("fs");

module.exports = {
    name: "help",
    description: "Shows all the commands common can do.",
    usage: "{prefix}help [page/command]",
    async execute(message, args, client) {

        const lookup = args[1].toLowerCase();

        if (!lookup) {
            const page = new Embed()
                .setTitle("Common's Help Page")
                .setDescription("```Usage: \n" +
                    "<> - You must give an input\n" +
                    "[] - These input are optional```"
                )
                .setColor(0x0092cc)
                .setFooter("Diseye Development", "https://cdn.discordapp.com/attachments/1033460434507931648/1038659213708242984/seven-kingdoms-9.png")
                .addField("Information", `\`\`\`${prefix}help information\`\`\``, true)
                .addField("Moderation", `\`\`\`${prefix}help moderation\`\`\``, true)
                .addField("Fun", `\`\`\`${prefix}help fun\`\`\``, true)
                .addField("Economy", `\`\`\`${prefix}help economy\`\`\``, true)
                .setTimestamp()

            await message.reply(page);
            return;
        }

        if (client.commands.get(lookup)) {

            const command = client.commands.get(lookup);

            const page_command = new Embed()
                .setTitle("Common's Help Page")
                .setDescription("```Usage: \n" +
                    "<> - You must give an input\n" +
                    "[] - These input are optional```"
                )
                .setColor(0x0092cc)
                .setFooter("Diseye Development", "https://cdn.discordapp.com/attachments/1033460434507931648/1038659213708242984/seven-kingdoms-9.png")
                .addField(`${command.name}`, `\`\`\`${command.description}\`\`\``, false)
                .addField(`Usage`, `\`\`\`${command.usage.replace("{prefix}", prefix)}\`\`\``, false)
                .setTimestamp()

            await message.reply(page_command);
        } else {

            switch (lookup) {
                case "info":
                case "information": {

                    const embed = new Embed()
                        .setTitle("Common's information commands")
                        .setDescription("```Usage: \n" +
                            "<> - You must give an input\n" +
                            "[] - These input are optional```"
                        )
                        .setFooter("Diseye Development", "https://cdn.discordapp.com/attachments/1033460434507931648/1038659213708242984/seven-kingdoms-9.png")
                        .setColor(0x0092cc)

                    console.log(Array.from(client.commands.values()))

                    // for (const file of commandFiles) {
                    //     const command = require(`./commands/information/${file}`);
                    //     embed.addField(`${command.name}`, `\`\`\`Description: ${command.description}\`\`\``, false)
                    // }
                    //
                    // await message.reply(embed);

                    break;
                }

                case "mod":
                case "moderation": {

                    break
                }

                case "fun": {

                    break;
                }

                case "eco":
                case "economy": {

                    break;
                }

                default: {
                    const page = new Embed()
                        .setTitle("Common's Help Page")
                        .setDescription("```Usage: \n" +
                            "<> - You must give an input\n" +
                            "[] - These input are optional```"
                        )
                        .setColor(0x0092cc)
                        .setFooter("Diseye Development", "https://cdn.discordapp.com/attachments/1033460434507931648/1038659213708242984/seven-kingdoms-9.png")
                        .addField("Information", `\`\`\`${prefix}help information\`\`\``, true)
                        .addField("Moderation", `\`\`\`${prefix}help moderation\`\`\``, true)
                        .addField("Fun", `\`\`\`${prefix}help fun\`\`\``, true)
                        .addField("Economy", `\`\`\`${prefix}help economy\`\`\``, true)
                        .setTimestamp()

                    await message.reply(page);
                }
            }

        }


    }
}