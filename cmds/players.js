exports.run = async (client, message, args) => {
  var util = require("../fivem");
    message.delete();
    if (servers[message.guild.id].guild === message.guild.id) { 
    try {
    var arg = `${servers[message.guild.id].ip}`    
    let api = `http://${arg}/players.json`
    let api2 = `http://${arg}/info.json`
    req(api2, function (errr, response, main) {
    req(api, function (err, response, body) {
      if (err) {
        util.embed("Acest server este offline sau nu exista. \n**Console:**\n```js\n"+err+"```")
      }
      else {
        try {
        var start = JSON.parse(body)
        var start2 = JSON.parse(main)
        } catch (err) {
          util.embed("Acest server este offline sau nu exista \n**Console:**\n```js\n"+err+"```")
        }
         // deprecated due to instablility
       // try {
       // fs.writeFile(`cache/${num}.png`, new Buffer(start2.icon, "base64"), function(err) { if (err) {util.embed("An error occured... \n**Console:**\n```js\n"+err+"```")}});
       // } catch (err) {util.embed("An error occured... \n**Console:**\n```js\n"+err+"```")}
        if (start === null || start === []) {
            var e = 0
        } else {
            var e = start.length
        }
        if (!start2.vars.tags) {var tags = 'None'} else {var tags = start2.vars.tags}
        var resourcee = JSON.stringify(start2.resources)
        if (resourcee.length > 850) {
            var resourc = `There are too many...\n(Passed Discord Char Limit)`
        } else {
            var resourc = resourcee;
        }
        if (err || errr) { 
            util.embed("A aparut o erroare \n**Console:**\n```js\n"+err+"```")
            return;
         } else {
        var embed = new Discord.RichEmbed()
        .setColor(color)
        .setAuthor(state, icon)
        .setDescription(`***JUCATORI ONLINE:***`)
     
        .addField("Jucatori", `${e}/${start2.vars.sv_maxClients}`, true)
	
		.setFooter(`Server IP: ${servers[message.guild.id].ip}`, icon)
		        message.channel.send({embed: embed});
				
        log(`Used Command [PLAYERS] in ${message.guild.name}`)
      
        }
    }
// Since the addField limit is 25, is there a way to use `forEach` function for an array and make it go into a 
}) 
})
  } catch (err) {
      util.embed("Acest server nu exista. \n**CONSOLA:**\n```js\n"+err+"```");
  }
} else {
    return util.embed("Te rog **seteaza** o adresa directa catre server. - ex: `"+config.prefix+"set 123.123.123.123:12345`\n***__Asigura-te ca introduci adresa ip si cu port-ul ei.__***")
  } 
};
		