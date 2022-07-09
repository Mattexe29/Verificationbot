const Discord = require("discord.js")
const client = new Discord.Client({ intents: ["GUILDS", "GUILD_MESSAGES", "GUILD_MEMBERS"]}) 
client.on("ready", () => {
  console.log(`Logged in as ${client.user.username}`)
})

client.on("messageCreate", msg =>{
	if (msg.author.bot) return


	if (msg.content === "v!ping") { 
		msg.channel.send("pong");
		}
	if (msg.content === "Gay" || msg.content === "Your gay" || msg.content === "You're gay") { 
		msg.channel.send("Yeah you are gay, we know! :sparkles:");
		}
	if (msg.content === "Lmao" || msg.content === "lmao" || msg.content === "LOL" || msg.content === "lol" || msg.content === "Lol"){
		msg.reply(":rofl:");
		}
	if (msg.content === "omg"){
		msg.reply(":exploding_head:")
		}
	if (msg.content === "v!verify"){
		const member = guild.members.cache.get(targetUser.id)
		member.roles.add(verified);
		}
		
})

client.login("OTk0NjI2OTI5MDUzNDA1MjY0.GVLo3n.udeBUpfEw8dQl94ZihgjhZfJSNfQHJt3oB5Auc")


