exports.run = async (client, message, args) => {
    var util = require("../fivem");
    message.delete();

    var api = require("../modules/api.json")
 
        const m = await message.channel.send("Fetching Stats...");
        var stats = new Discord.RichEmbed()
        .setColor(color)
        .setAuthor("CRAZY-BOT STATS", client.user.avatarURL)
        .setTitle("Server Discord.")
        .setDescription(`Statistici Bot`)
        .addField("Ping", `API: ${Math.round(client.ping)}ms\nMessage: ${Math.round(m.createdTimestamp - message.createdTimestamp)}ms`)
        .addField("Servere", `${client.guilds.size}\n**API Servers**: ${api.servers}`)
        .addField("Jucatori", `${client.users.size}\n**API Users**: ${api.users}`)
        .addBlankField(true)
        .setURL("https://discord.gg/yWddFpQ")
        .addField("Bot Creator", config.cdn)
        .setThumbnail(client.user.avatarURL)

        .setFooter(`Server IP: ${servers[message.guild.id].ip}`, client.user.avatarURL)
        /* .setFooter(`Server IP: ${servers[message.guild.id].ip}`, icon) */
        message.channel.send({embed: stats});
        m.delete();
        log(`Used Command [Stats] in ${message.guild.name}`)
       
      


};