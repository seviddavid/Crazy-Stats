exports.run = async (client, message, args) => {
    try {
    var util = require("../fivem");
      /* ----------------------------- */ 
      message.delete();
      var ss = args.join(" ");
      if (message.content.includes("<") || message.content.includes(">")) {return util.embed("**__Do Not Add Any Symbols like `<>` Just Do Your IP.__** example: ```\n$set thatziv.ddns.net:30120```")}
      if (!ss || ss === " " || ss == "" || ss === null) {
          return util.embed("Te rog adauga adresa server-ului tau. EXEMPLU: `\n" +config.prefix+"set 123.123.123.123:12345` , asigura-te ca introduci adresa cu portul ei.")
      }
      
      if (!message.content.includes(":")) {return util.embed("Te rog specifica portul: **"+config.prefix+"set 123.123.123.123__:12345__**")}
if (!message.member.hasPermission("ADMINISTRATOR")) return util.embed(`<@${message.author.id}>, Nu ai aceasta permisiune.`);
        servers[message.guild.id] =  {
            guild: message.guild.id,
            ip: ss
        };
    
      fs.writeFile('./auth/servers.json', JSON.stringify(servers), (err) => {
          if(err) {
            
              util.embed("An Error Occured...\n**Console:**\n```js\n"+err+"```");
              return;
          } else {
            log(`Used Command [Set] to ${ss} | ${message.guild.name}`)
            
              util.good(`:white_check_mark:Ai setat cu succes serverul *${ss}* pe **${message.guild.name}**`)
              return;
          }
      })
    } catch (err) {
        log(err)
    }
      
};