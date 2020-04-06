exports.run = async (client, message, args) => {
    var util = require("../fivem");
    message.delete();
	    let embed = new Discord.RichEmbed()
    .setAuthor(state, icon)
    .setColor(color)
    .setDescription(`**COMENZI :**`)
    .addField(`${config.prefix}set <serverIP:port>`, "Seteaza adresa corecta a server-ului")
    .addField(`${config.prefix}server`, "Toate informatiile ACTUALE server-ului se vor afisa prin aceasta comanda")
	    .addField(`${config.prefix}players`, "Afisaza numarul jucatorilor de pe server")
    .addField(`${config.prefix}find <username>`, "Verifica daca un jucator este online prin username-ul sau ACTUAL")
    .addField(`${config.prefix}status`, "Verifica daca server-ul este online")
    .addField(`${config.prefix}stats`, "Verifica statisticile bot-ului.")
    .addBlankField(true)
    .setThumbnail(icon)
    .addBlankField(true)
    .setFooter("davidsevid#9996", icon)
    log(`Fivem help cmd was used.. in ${message.guild.name}`)
  
    message.channel.send({embed: embed})
};
