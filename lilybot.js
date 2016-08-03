var Discord = require("discord.js");
var fs = require ("fs")
var bot = new Discord.Client();
servernumbers = [[0,"NootKnights",0],[0,"Chill Zone",0]];
serverboards = [[[0,0,0],[0,0,0],[0,0,0]],[[0,0,0],[0,0,0],[0,0,0]]];
server_last = [0,0];
d = new Date();
done420 = false;
win = false;
winner = 0;
chambers = 6;
loader = "lilybot";

//@lilybot#1942

bot.on("message",function(message){
	//define winner
	winner = function(which){
		var id = 0;
		if (message.server.name==="NootKnights") id = 0;
		else id = 1;
		
		for (i=0;i<3;i++){
			for (a=0;a<3;a++){
			serverboards[id][i][a] = 0;
			}
		}
		
		server_last[id] = 0;
		bot.reply(message, which.toUpperCase() + " has won! the board has been reset.");
	}
	//4:20
	if (((d = new Date()).getHours() == 4 && (d = new Date()).getMinutes() == 20) || ((d = new Date()).getHours() == 16 && (d = new Date()).getMinutes() == 20)){
		if (!done420){
			bot.sendMessage(message, "It 4:20, peasants!");
			bot.sendFile(message, "http://comps.canstockphoto.com/can-stock-photo_csp13177268.jpg");
			done420 = true;	
		}
	}
	if ((d = new Date()).getHours() == 5 || (d = new Date()).getHours() == 17){
		done420 = false;
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
	else if (message.content===("MARCO"))
		bot.sendMessage(message, "POLO, MOTHERFUCKER");
	else if (message.content.toLowerCase()===("marco"))
		bot.sendMessage(message, "polo");
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
	else if (message.content.toLowerCase().includes("\\datboi")||message.content.toLowerCase().includes("\\herecomedatboi"))
		bot.sendFile(message, "https://media.giphy.com/media/UHKL9BtyM4WrK/giphy.gif");
	else if (message.content.toLowerCase()==="\\d4")
		bot.sendMessage(message, "MISTER YOUUUNNNG");
	else if (message.content.toLowerCase()===("kms"))
		bot.reply(message, "ys kys");
	else if (message.content.toLowerCase()===("kys"))
		bot.sendMessage(message, "ys kys");
	else if (message.content.toLowerCase().includes("\\lenny"))
		bot.sendMessage(message, "( ͡° ͜ʖ ͡°)");
	else if (message.content.toLowerCase()===("ping"))
		bot.sendMessage(message, "pong");
	else if (message.content.toLowerCase()===("\\???")){
		bot.sendFile(message, "http://i2.kym-cdn.com/entries/icons/original/000/018/489/nick-young-confused-face-300x256_nqlyaa.png");
		bot.deleteMessage(message);
	}
	else if (message.content.toLowerCase().includes("\\nani"))
		bot.sendFile(message, "http://i.imgur.com/ZNkdYOJ.png");
	else if (message.content.toLowerCase().includes(("oh hot reservoir"))||message.content.toLowerCase().includes(("o hot reservoir")))
		bot.sendMessage(message, "this is my jelly");
	else if (message.content.toLowerCase().includes("\\doot"))
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
		+ "*marco* -\n\t\t polo!\n"
		+ "*\\clearboard* -\n\t\t clears the tic-tac-toe board\n"
		+ "*\\place* <1-9> <x/o> -\n\t\t places a tic-tac-toe piece. The spots on the board are numbered as follows:\n"
		+ "\t\t:one::two::three:\n\t\t:four::five::six:\n\t\t:seven::eight::nine:\n"
		+ "*\\floob* -\n\t\t floob at the server in different ways\n"
		+ "*\\reload* -\n\t\t reload the gun used for Russian Roulette\n"
		+ "*\\rr* -\n\t\t Russian Roulette! Spin the 6-chamber revolver and take a shot. If you die, you reload the gun automatically.\n"
		+ "*\\datboi, \\herecomedatboi* -\n\t\t tells lilybot to deliver a fresh gif of DAT BOI\n"
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
	else if (message.content.toLowerCase()===("\\reload")){
		bot.sendMessage(message, message.author.name+" has loaded the gun!");
		loader = message.author.name;
	}
	else if (message.content.toLowerCase()===("\\rr")){
		var shot = (Math.floor(Math.random()*6)==1)
		if (shot){
			bot.reply(message, "you spin the revolver...\n\n "+message.author.name+" has died by "+loader+"'s bullet. Reloading.");
			loader = message.author.name;
		}
		else bot.reply(message, "you spin the revolver...\n\nyou survived.");
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
	else if (message.content.toLowerCase().includes("\\floob")){
		var floob = Math.floor(Math.random()*10);
		switch (floob){
			case 0:
				floob = "violently";
			break;
			case 1:
				floob = "happily";
			break;
			case 2:
				floob = "meaningfully";
			break;
			case 3:
				floob = "peacefully";
			break;
			case 4:
				floob = "on an object as if a tumor of some sort";
			break;
			case 5:
				floob = "defensively";
			break;
			case 6:
				floob = "intentfully";
			break;
			case 7:
				floob = "show-off-ingly";
			break;
			case 8:
				floob = "magnificently";
			break;
			case 9:
				floob = "majestically";
			break;
		}
		bot.reply(message, "You floob "+floob+".");
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
	else if (message.content.toLowerCase()===("\\guess \\guess")){
		bot.reply(message, "stop ur cheatin");
		
	}
	else if (message.content.toLowerCase()===("\\guess nan")){
		bot.reply(message, "stop ur cheatin");
	}
	else if (message.content.toLowerCase().substring(0,6)===("\\guess")&&message.content.toLowerCase()!=("\\guess \\guess")&&(message.content.toLowerCase()!=("\\guess nan"))){
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
	//TIC TAC TOE!
	else if (message.content.toLowerCase()===("\\clearboard")){
		win = false;
		var id = 0;
		if (message.server.name==="NootKnights") id = 0;
		else id = 1;
		
		for (i=0;i<3;i++){
			for (a=0;a<3;a++){
			serverboards[id][i][a] = 0;
			}
		}
		
		server_last[id] = 0;
		bot.reply(message, "The board has been cleared.");
	}
	else if (message.content.toLowerCase().substring(0,6)===("\\place")){
		win = false;
		var i=0;
		var id = 0;
		if (message.server.name==="NootKnights") id = 0;
		else id = 1;
		
		var mess = message.content.split(" ");
		if (mess.length<3){
			bot.reply(message,"Incorrect format. Use a number from 1-9 and either 'X' or 'O'.");
		}
		else if (mess[1]<1 || mess[1]>9 || (mess[2].toLowerCase()!="x"&&mess[2].toLowerCase()!="o")){
			bot.reply(message,"Incorrect format. Use a number from 1-9 and either 'X' or 'O'.");
		}
		else{
		//catch err
			if (server_last[id]===mess[2]) bot.reply(message,"You can't place an "+((server_last[id]==="o")? ":o:":":x:")+" twice in a row! Try again.");
		//place it
			switch(parseInt(mess[1])){
				case 1:
					if (serverboards[id][0][0]==0&&server_last[id]!=mess[2]){
						serverboards[id][0][0]=mess[2];
					} 
				break;
				case 2:
					if (serverboards[id][0][1]==0&&server_last[id]!=mess[2]){
						serverboards[id][0][1]=mess[2];
					} 
				break;
				case 3:
					if (serverboards[id][0][2]==0&&server_last[id]!=mess[2]){
						serverboards[id][0][2]=mess[2];
					} 
				break;
				case 4:
					if (serverboards[id][1][0]==0&&server_last[id]!=mess[2]){
						serverboards[id][1][0]=mess[2];
					} 
				break;
				case 5:
					if (serverboards[id][1][1]==0&&server_last[id]!=mess[2]){
						serverboards[id][1][1]=mess[2];
					} 
				break;
				case 6:
					if (serverboards[id][1][2]==0&&server_last[id]!=mess[2]){
						serverboards[id][1][2]=mess[2];
					} 
				break;
				case 7:
					if (serverboards[id][2][0]==0&&server_last[id]!=mess[2]){
						serverboards[id][2][0]=mess[2];
					} 
				break;
				case 8:
					if (serverboards[id][2][1]==0&&server_last[id]!=mess[2]){
						serverboards[id][2][1]=mess[2];
					} 
				break;
				case 9:
					if (serverboards[id][2][2]==0&&server_last[id]!=mess[2]){
						serverboards[id][2][2]=mess[2];
					} 
				break;
			}
			//display the board
			var board = [[":black_large_square:",":black_large_square:",":black_large_square:"],[":black_large_square:",":black_large_square:",":black_large_square:"],[":black_large_square:",":black_large_square:",":black_large_square:"]]
			var str = "";
			for (i=0;i<3;i++){
				for (a=0;a<3;a++){
					if (serverboards[id][i][a]==="o") board[i][a] = ":o:";
					else if (serverboards[id][i][a]==="x") board[i][a] = ":x:";
					str+=board[i][a];
				}
				str+="\n";
			}
			if (server_last[id]!=mess[2]) bot.sendMessage(message,str);
			server_last[id] = mess[2];
			//check for a win
			//rows
			for (i = 0;i<3;i++){
				if (win) break;
				if (serverboards[id][i].toString()==["x","x","x"].toString()||serverboards[id][i].toString()==["o","o","o"].toString()){
					winner(mess[2]);
					win = true;
					break;
				}
			}
			//columns
			var gotten = 0;
			for (i = 0;i<3;i++){
				if (win) break;
				gotten = 0;
				for (a = 0;a<3;a++){
					if (serverboards[id][a][i]==mess[2]){
						gotten++;
					}
				}
				if (gotten===3){
					winner(mess[2]);
					win = true;
					break;
				}
			}
			
			//diagonal
			if (!win && ((serverboards[id][0][0]==="x"&&serverboards[id][1][1]==="x"&&serverboards[id][2][2]==="x")||
			(serverboards[id][0][0]==="o"&&serverboards[id][1][1]==="o"&&serverboards[id][2][2]==="o"))){
				winner(mess[2]);
				win = true;
			}
			else if (!win && ((serverboards[id][0][2]==="x"&&serverboards[id][1][1]==="x"&&serverboards[id][2][0]==="x")||
			(serverboards[id][0][2]==="o"&&serverboards[id][1][1]==="o"&&serverboards[id][2][0]==="o"))){
				winner(mess[2]);
				win = true;
			}
			else if (!win){
				var gotten = 0;
				for (i = 0;i<3;i++){
					for (a = 0;a<3;a++){
						if (serverboards[id][i][a]!=0) gotten++;
					}
				}
				if (gotten==9){
					var id = 0;
					if (message.server.name==="NootKnights") id = 0;
					else id = 1;
					
					for (i=0;i<3;i++){
						for (a=0;a<3;a++){
							serverboards[id][i][a] = 0;
						}
					}
					bot.sendMessage(message, "The result is a draw! The board has been reset.");
				}
			}
		}
	}
	
	
});

bot.loginWithToken("MjA5NTA3NjY0MTgxMzI5OTIy.CoBOtw.O6EPWi7IiWiA2gZyNH4eCWbs93M");

function error(e) {
	console.log(e.stack);
	process.exit(0);
}
