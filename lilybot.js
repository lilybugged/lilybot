var Discord = require("discord.js");
var fs = require ("fs")
var bot = new Discord.Client();
servernumbers = [[0,"NootKnights",0],[0,"Chill Zone",0]];
d = new Date();
//@lilybot#1942

bot.on("message",function(message){
	//4:20
	if (((d = new Date()).getHours() == 4 && (d = new Date()).getMinutes() == 20) || ((d = new Date()).getHours() == 16 && (d = new Date()).getMinutes() == 20)){
		bot.sendMessage(message, "It 4:20, peasants!");
		bot.sendFile(message, "http://comps.canstockphoto.com/can-stock-photo_csp17718411.jpg")
	}
	//!4:20
	if (message.content.toLowerCase().includes("ready?")){
		//var contains = false;
		bot.reply(message, "Ready!");
		bot.setStatus("online", "type \\cmdspls", function(){});
	}
	else if (message.content.toLowerCase().includes("are you ready"))
		bot.reply(message, "Aye aye, Captain!");
	else if (message.content.toLowerCase().includes("i can't hear you"))
		bot.reply(message, "AYE AYE CAPTAIN");
	else if (message.content.toLowerCase().includes("good morning"))
		bot.sendMessage(message, "ohayou gozaimasu");
	else if (message.content.toLowerCase().includes("good evening")){
		switch (Math.floor(Math.random()*2)){
			case 0: bot.sendTTSMessage(message, "(cone ban wa)");
			break;
			case 1: bot.sendMessage(message, "konbanwa");
			break;
		}
	}
	else if (message.content.toLowerCase()==="ty"||message.content.toLowerCase().includes(" ty "))
		bot.sendMessage(message, "yw");
	else if (message.content.toLowerCase().includes("noot noot"))
		bot.reply(message, "noot!");
	else if (message.content.toLowerCase()===("\\timestamp")){
		var d = new Date();
		bot.reply(message, d.getMinutes());
	}
	else if (message.content.toLowerCase()===("???"))
		bot.sendMessage(message, "\t???");
	else if (message.content.toLowerCase().includes("here come dat"))
		bot.sendMessage(message, "oh shit waddup!");
	else if (message.content.toLowerCase()==="\\d4")
		bot.sendMessage(message, "MISTER YOUUUNNNG");
	else if (message.content.toLowerCase()===("kms"))
		bot.reply(message, "ys kys");
	else if (message.content.toLowerCase()===("kys"))
		bot.sendMessage(message, "ys kys");
	else if (message.content.toLowerCase()===("\\lenny"))
		bot.sendMessage(message, "( ͡° ͜ʖ ͡°)");
	else if (message.content.toLowerCase()===("ping"))
		bot.sendMessage(message, "pong");
	else if (message.content.toLowerCase()===("\\???")){
		bot.sendFile(message, "http://i2.kym-cdn.com/entries/icons/original/000/018/489/nick-young-confused-face-300x256_nqlyaa.png");
		bot.deleteMessage(message);
	}
	else if (message.content.toLowerCase()===("\\nani"))
		bot.sendFile(message, "http://i.imgur.com/ZNkdYOJ.png");
	else if (message.content.toLowerCase().includes(("oh hot reservoir"))||message.content.toLowerCase().includes(("o hot reservoir")))
		bot.sendMessage(message, "this is my jelly");
	else if (message.content.toLowerCase()===("\\doot"))
		bot.sendMessage(message, ":trumpet: doot :trumpet: doot :trumpet: doot :trumpet: ");
	else if (message.content.toLowerCase().includes(("oh hot damn"))||message.content.toLowerCase().includes(("o hot damn"))){
		bot.reply(message, "STRAAAWBERRRY JAAAAAAAAAAM");
		bot.sendMessage(message, "\\play https://www.youtube.com/watch?v=6pQdBaFfHjs");
	}
	else if (message.content.toLowerCase()==="\\jump"){
		var jump = Math.floor(Math.random()*4);
		switch (jump){
			case 0:
			bot.sendMessage(message, "NO JUMPING!");
			break;
			case 1:
			bot.sendMessage(message, "NO!");
			break;
			case 2:
			bot.sendMessage(message, "STAY ON THE GROUND, YOUNG MAN.");
			break;
			case 3:
			bot.sendMessage(message, "JUMPING IS FOR JOKERS");
			break;
		}
	}
	else if (message.content.toLowerCase().substring(0,8)==="\\squeesh"){
		var squeesh = Math.floor(Math.random()*6);
		var mouth = Math.floor(Math.random()*6);
		switch (mouth){
			case 0:
			mouth = "v";
			break;
			case 1:
			mouth = "/\\";
			break;
			case 2:
			mouth = "u";
			break;
			case 3:
			mouth = "w";
			break;
			case 4:
			mouth = "A";
			break;
			case 5:
			mouth = "_";
			break;
		}
		switch (squeesh){
			case 0:
			bot.sendMessage(message, "(* "+mouth+" *");
			break;
			case 1:
			bot.sendMessage(message, "(o "+mouth+" o 7");
			break;
			case 2:
			bot.sendMessage(message, "(- "+mouth+" -");
			break;
			case 3:
			bot.sendMessage(message, "(^ "+mouth+" ^");
			break;
			case 4:
			bot.sendMessage(message, "(O "+mouth+" O");
			break;
			case 5:
			bot.sendMessage(message, "(Q "+mouth+" Q");
			break;
		}
	}
	else if (message.content.substring(0,3)=="\\js")
		bot.sendMessage(message, eval(message.content.substring(3)));
	else if (message.content.toLowerCase()===("\\cmdpls")||message.content.toLowerCase()===("\\cmdspls")){
		bot.reply(message, "have sum cmds");
		bot.sendMessage(message,"*ready?,are you ready, kids?,i can't hear you!* -\n\t\t invites a corresponding response from lilybot\n"
		+ "*good morning, good evening* -\n\t\t invites a corresponding response from lilybot, in Japanese\n"
		+ "*ty* -\n\t\t be welcomed\n"
		+ "*noot noot* -\n\t\t be nooted in return\n"
		+ "*\\nani,\\\\???* -\n\t\t recieve a corresponding meme containing an inquisitive fellow\n"
		+ "*here come dat <insert word>* -\n\t\t oh shit waddup!\n"
		+ "*\\d4* -\n\t\t ??\n"
		+ "*kms, kys* -\n\t\t invites lilybot to agree heartily\n"
		+ "*\\lenny* -\n\t\t ( ͡° ͜ʖ ͡°)\n"
		+ "*ping* -\n\t\t pong!\n"
		+ "*???* -\n\t\t ???\n"
		+ "*oh hot reservoir, o hot reservoir* -\n\t\t invites lilybot to finish the meme\n"
		+ "*oh hot damn, o hot damn* -\n\t\t STRAAAWBERRRY JAAAAAAAAAAM (make sure you join the audio channel using \joinvoice first!)\n"
		+ "*\\jump* -\n\t\t what? jumping isn't allowed gtfo\n"
		+ "*\\squeesh* -\n\t\t generates a random squeesh face. kyuuuuuun! (> v <\n"
		+ "*\\js <code>* -\n\t\t execute as much javascript as can fit in one line. ganbatte!\n"
		+ "*\\cmdpls,\\cmdspls* -\n\t\t get commands for lilybot\n"
		+ "*\\joinvoice* -\n\t\t tells lilybot to join the first voice channel in the server\n"
		+ "*\\jam* -\n\t\t queue up some strawberry jam (use \\joinvoice first!)\n"
		+ "*\\loop <times> <url/keywords>* -\n\t\t loops the given url the given number of times. (requires \"lilybot Admin\") (use \\joinvoice first!)\n"
		+ "*\\kaomoji* -\n\t\t generates a random kaomoji/lenny\n"
		+ "*\\pickanumber,\\pickanumber <number>* -\n\t\t starts a new number game, picking a number between 1 and <number>. If no <number> is specified then lilybot will default to 100.\n"
		+ "*\\guess <number>* -\n\t\t places a guess of <number> towards the number game."
		);
		//+ "*\\share* -\n\t\t generates a link with which to authenticate lilybot on another server"
	}
	else if (message.timestamp === 420){
		bot.reply(message, "IT 420 EVERYONE");
	}
	else if (message.content.toLowerCase()==="\\joinvoice"){
		//bot.joinVoiceChannel("Musics (Don't troll)");
		for (var channel of message.channel.server.channels) {
			// If the channel is a voice channel, ...
			if (channel instanceof Discord.VoiceChannel) {
				// ... reply with the channel name and the ID ...
				bot.sendMessage(message, "Sit tight, kids. Joining \""+channel.name+"\"");
				// ... and join the channel
				bot.joinVoiceChannel(channel).catch(error);
				// Afterwards, break the loop so the bot doesn't join any other voice
				// channels
				break;
			}
		}
		
	}
	else if (message.content.toLowerCase()===("\\jam")){
		bot.reply(message, "STRAAAWBERRRY JAAAAAAAAAAM");
		bot.sendMessage(message, "\\play https://www.youtube.com/watch?v=6pQdBaFfHjs");
	}
	else if (message.content.toLowerCase().substring(0,5)===("\\loop")){
		var splitted = message.content.toLowerCase().split(" ");
		if (message.author.hasRole(message.channel.server.roles.get("name","lilybot Admin"))){
			var count = 0;
			var times = splitted[1];
			splitted.shift();
			splitted.shift();
			setInterval(function () {
				bot.sendMessage(message,"\\play "+splitted.join(" ")); 
				count++;
				if (count>=times){
					bot.sendMessage(message, "Your loop has completed.");
					clearInterval(this);
				} 
			}, 5000);
		}
		else bot.reply(message,"git gud. Your don't have the permissions to execute this command."); 
	}
	else if (message.content.toLowerCase()===("\\kaomoji")){
		var lennies = ["( ͡° ͜ʖ ͡°)","└[⩿ ͟ل͜⪀]┘","(づ⟃益⟄)づ","ヽ(ʘ ͟ʖʘ)ﾉ","(✿ ͜つ✿)","ლ(◍⍊◎ლ)","(∩`Ꮂ´)⊃━☆ﾟ.*","乁(ಠ‸ಠ)ㄏ","୨☯ᴥ☯୧","\( º  ͜ʖ º )/","ᕳ´• Ꮂ •`ᕲ","(づ⪦﹏⪧)づ","(ง■ヮ■)ง","乁(・ロ・)ㄏ","ᕕ( ͠°﹏ °)ᕗ","(∩^Д^)⊃━☆ﾟ.*","ᕕ(⫑෴⫒)ᕗ","\(⪧!⪦)/","(づꗞᨎꗞ)づ","(ง º ᴥ º )ง","ᘳ■‸■ᘰ","(∩❍ω❍)⊃━☆ﾟ.*"]
		bot.sendMessage(message,lennies[Math.floor(Math.random()*lennies.length)]);
	}
	else if (message.content.toLowerCase()===("\\share")){
		bot.sendMessage(message,"Use this link to authenticate lilybot on another server:\nhttps://discordapp.com/oauth2/authorize?client_id=209507647039340544&scope=bot");
	}
	//NUMBER GAME!
	else if (message.content.toLowerCase().substring(0,12)===("\\pickanumber")){
		if (message.server.name==="NootKnights") {
			if (message.content.length===12) servernumbers[0][0] = Math.floor(Math.random()*100)+1;
			else servernumbers[0][0] = Math.floor(Math.random()*parseInt(message.content.toLowerCase().substring(12)))+1;
			servernumbers[0][2] = 0;
			
		}
		else{
			if (message.content.length===12) servernumbers[1][0] = Math.floor(Math.random()*100)+1;
			else servernumbers[1][0] = Math.floor(Math.random()*parseInt(message.content.toLowerCase().substring(12)))+1;
			servernumbers[1][2] = 0;
		}
		
		bot.sendMessage(message, "A number has been generated.");
		
	}
	else if (message.content.toLowerCase().substring(0,6)===("\\guess")){
		if (message.server.name==="NootKnights") {
			if (servernumbers[0][0]!=0){
				var guess = parseInt(message.content.toLowerCase().substring(7));
				servernumbers[0][2]++;
				
				if (guess>servernumbers[0][0]){
					bot.reply(message, "too high.");
				}
				else if (guess<servernumbers[0][0]){
					bot.reply(message, "too low.");
				}
				else {
					bot.reply(message, "you got it! "+servernumbers[0][2]+" guesses were made. The number is reset to 0.");
					servernumbers[0][2] = 0;
					servernumbers[0][0] = 0;
				}
				
				//bot.sendMessage(message, number);
			}
			else bot.sendMessage(message, "A number has not been picked. Use \\pickanumber <number>");
		}
		else{
			if (servernumbers[1][0]!=0){
				var guess = parseInt(message.content.toLowerCase().substring(7));
				servernumbers[1][2]++;
				
				if (guess>servernumbers[1][0]){
					bot.reply(message, "too high.");
				}
				else if (guess<servernumbers[1][0]){
					bot.reply(message, "too low.");
				}
				else {
					bot.reply(message, "you got it! "+servernumbers[1][2]+" guesses were made. The number is reset to 0.");
					servernumbers[1][2] = 0;
					servernumbers[1][0] = 0;
				}
				
				//bot.sendMessage(message, number);
			}
			else bot.sendMessage(message, "A number has not been picked. Use \\pickanumber <number>");
		}
	}
	//END NUMBER GAME!
	
});

bot.loginWithToken("MjA5NTA3NjY0MTgxMzI5OTIy.CoBOtw.O6EPWi7IiWiA2gZyNH4eCWbs93M");

function error(e) {
	console.log(e.stack);
	process.exit(0);
}