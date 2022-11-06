module.exports = {
    name: "ping",
    description: "A basic ping command.",
    usage: "{prefix}ping",
    async execute(message, args, client) {
        await message.reply("Pong!");
    }
}