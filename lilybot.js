var Discord = require("discord.js");
var fs = require ("fs")
var bot = new Discord.Client();
servernumbers = [[0,"NootKnights",0],[0,"Chill Zone",0]];
serverboards = [[[0,0,0],[0,0,0],[0,0,0]],[[0,0,0],[0,0,0],[0,0,0]]];
//servercheckers = [[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0]]
server_last = [0,0];
d = new Date();
done420 = false;
win = false;
winner = 0;
chambers = 6;
loader = "lilybot";
msg = "";

//@lilybot#1942

bot.on("message",function(message){
	//declare shortcut functions
	function loop(m,n){
		for(i=0;i<n;i++){ 
			bot.sendMessage(message, m);
		}
	}
	function send(m){
		// where "m" is the message to send
		bot.sendMessage(message,m);
	}
	function tts(m){
		// where "m" is the message to send
		bot.sendTTSMessage(message,m);
	}
	/*function cmd(m){
		// where "m" is the message to send - this deletes the sent message so only a command meant for another bot is executed
		var temp = bot.sendMessage(message,m);
		//bot.deleteMessage(temp);
	}*/
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
			bot.sendMessage(message, "it be 4:20");
			bot.sendFile(message, "http://comps.canstockphoto.com/can-stock-photo_csp13177268.jpg");
			done420 = true;	
		}
	}
	if ((d = new Date()).getHours() == 5 || (d = new Date()).getHours() == 17){
		done420 = false;
	}
	//!4:20
	if (message.content.toLowerCase()===("ready?")){
		//var contains = false;
		bot.reply(message, "Ready!");
		bot.setStatus("online", "type \\cmdspls", function(){});
		bot.setAvatar("C:\Users\lilia\Desktop\lilbot.png", function(){});
	}
	if (message.content.toLowerCase()===("\\r'amen")&&message.author.id==="176021596325150720"){
		bot.sendFile(message, "https://static3.fjcdn.com/comments/R+amen+my+brother+_dc14bd6d200fb416c558123f7d1e7d2d.jpg");
	}
	if ((message.content.toLowerCase()===("\\prayer")||message.content.toLowerCase()===("\\ourpasta")||message.content.toLowerCase()===("\\ourpastawhoartinacolander"))&&message.author.id==="176021596325150720"){
		bot.sendMessage(message, "Our pasta, who art in a colander,\nDraining be your noodles.\nThy noodle come,\nThy sauce be yum,\nOn top some grated parmesan.\nGive us this day our garlic bread,\nAnd forgive us our trespasses,\nAs we forgive those who trample on our lawns.\nAnd lead us not into vegetarianism, but deliver us some pizza,\nFor thine is the meatball, the noodle, and the sauce, forever and ever.\n-R’Amen.");
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
	else if (message.content.toLowerCase().includes("confirm/deny"))
		bot.sendMessage(message, (Math.floor(Math.random()*2)===1)? "confirm":"deny");
	else if (message.content.toLowerCase()===("ggg"))
		bot.sendTTSMessage(message, (message, "get good giles"));
	else if (message.content.toLowerCase()===("ggl"))
		bot.sendTTSMessage(message, (message, "get good lily"));
	else if (message.content.toLowerCase()===("\\jadensmith")){
		var jaden = ["I Watch Twilight Every Night",
		"I Will Always Give You The Truth I Will Never Lie To You In My music If You Cant Handle My Feelings And Emotions Please Unfollow Me",
		"Once You Go In You Always Come Out Alive",
		"I Only Apply To The Sixth Amendment",
		"Dying Is MainStream #MONEY",
		"Ill Never Forget The Blogs That Believed In Me Since The Begging.",
		"People Tell Me To Smile I Tell Them The Lack Of Emotion In My Face Doesn't Mean I'm Unhappy",
		"Luke. Who Has The Trident",
		"Umm Who Has The Floss",
		"Most Trees Are Blue",
		"You Must Not Know Fashion",
		"I Hope It Doesn't Take For Me To Die For You To See What I Do For You",
		"How Can Mirrors Be Real If Our Eyes Aren't Real",
		"Lately People Call Me Scoop Life",
		"If A Book Store Never Runs Out Of A Certain Book, Dose That Mean That Nobody Reads It, Or Everybody Reads It",
		"People Use To Ask Me What Do You Wanna Be When You Get Older And I Would Say What A Stupid Question The Real Question Is What Am I Right Now",
		"All The Rules In This World Were Made By Someone No Smarter Than You. So Make Your Own",
		"If Newborn Babies Could Speak They Would Be The Most Intelligent Beings On Planet Earth",
		"If Everybody In The World Dropped Out Of School We Would Have A Much More Intelligent Society",
		"Trees Are Never Sad Look At Them Every Once In Awhile They're Quite Beautiful",
		"Why Is It Always 3 WHY IS IT ALWAYS 3!!!!!",
		"We Need To Stop Teaching The Youth About The Past And Encourage Them To Change The Future",
		"People Think A RelationShip Makes You Whole, That It's Two 50%'s Coming Together To Make 100% When It Should Be Two 100%'s Making 200%•••",
		"If I Die In My Flannel Will You Write My Poems On Tyler's 5 Panels And Jesusus Sandals This Plane Is Just To Much To Handle."
		];
		bot.sendMessage(message, "\""+jaden[Math.floor(Math.random()*jaden.length)]+"\" - Jaden Smith");
	}
	else if (message.content.toLowerCase()===("\\gj"))
		bot.sendFile(message, (message, "http://i.imgur.com/YHw1yW5.gif"));
	else if (message.content.toLowerCase()===("\\ogj"))
		bot.sendMessage(message, (message, ".music play https://www.youtube.com/watch?v=U0kaAl5v0AA"));
	else if (message.content.toLowerCase().substring(0,3)===("\\em")){
		var ms = (message, "```"+message.author.name.toUpperCase().substring(0,1)+message.author.name.substring(1)+message.content.substring(3)+
	((message.content.substring(message.content.length-1)==="."||message.content.substring(message.content.length-1)==="?"||message.content.substring(message.content.length-1)==="!")? "":".")+"```");
		//ms = ms.replace("");
		bot.sendMessage(message, ms);
		bot.deleteMessage(message);
	}
	else if (message.content.toLowerCase()===("\\milkshake")){
		if (message.author.id==="194691144981020673"){
			if (Math.floor(Math.random()*100)===7){
				bot.reply(message, "u got the rare milkshake it is big look");
				bot.sendFile(message, "http://www.chick-fil-a.com/Media/Img/catalog/Food/XLarge/Chocolate-Milkshake.png");
			}
			bot.reply(message, "here's ur milkshake gdi");
			bot.sendFile(message, "http://urbantastebuds.wpengine.netdna-cdn.com/wp-content/uploads/2014/05/mcdonalds-Vanilla-McCafe-Shake-12-fl-oz-cup-1.png");
		}
		else bot.reply(message, "am sorry but who died an made u the milkshake queen");
	}
	else if ((message.content.toLowerCase()===("\\airhorn")||message.content.toLowerCase()===("\\airhorn 1"))){
		if (message.author.hasRole(message.channel.server.roles.get("name","lilybot Admin"))){
			bot.sendMessage(message, ".music play https://www.youtube.com/watch?v=QVw5mnRI8Zw");
		}
		else bot.reply(message, "git gud. Your don't have the permissions to execute this command.");
	}
	else if (message.content.toLowerCase()===("\\airhorn 2")){
		if (message.author.hasRole(message.channel.server.roles.get("name","lilybot Admin"))){
			bot.sendMessage(message, ".music play https://www.youtube.com/watch?v=a_6CZ2JaEuc");
		}
		else bot.reply(message, "git gud. Your don't have the permissions to execute this command.");
	}
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
		bot.sendMessage(message, "noot!");
	else if (message.content.toLowerCase()===("\\timestamp")){
		var d = new Date();
		bot.reply(message, d.getMinutes());
	}
	else if (message.content.toLowerCase()===("???"))
		bot.sendMessage(message, "\t¿¿¿");
	else if (message.content.toLowerCase().includes("my mind's tellin")&&message.content.toLowerCase().includes("me no"))
		bot.sendMessage(message, "BUT MY BODY");
	else if (message.content.toLowerCase().includes("my bo")&&message.content.toLowerCase().includes("dy's tellin")&&message.content.toLowerCase().includes("me y"))
		bot.sendMessage(message, ".music play https://www.youtube.com/watch?v=gTXGL0xPyLA");
	else if (message.content.toLowerCase().includes("here come dat"))
		bot.sendMessage(message, "oh shit waddup!");
	else if (message.content.toLowerCase().includes("\\datboi")||message.content.toLowerCase().includes("\\herecomedatboi"))
		bot.sendFile(message, "https://media.giphy.com/media/UHKL9BtyM4WrK/giphy.gif");
	else if (message.content.toLowerCase()==="\\d4")
		bot.sendMessage(message, "MISTER YOUUUNNNG");
	else if (message.content.toLowerCase()===("kms"))
		bot.reply(message, "ys kys");
	else if (message.content.toLowerCase()===("\\kms"))
		bot.sendMessage(message, message.author+" has blown their brains out.");
	else if (message.content.toLowerCase()===("kys"))
		bot.sendMessage(message, "ys kys");
	else if (message.content.toLowerCase().includes("\\lenny"))
		bot.sendMessage(message, "( ͡° ͜ʖ ͡°)");
	else if (message.content.toLowerCase().substring(0,4)===("\\rek")){
		var mess = message.content.toLowerCase().split(" ");
		//mess[1] = mess.join(" ").substring(4);
		for (i=2;i<mess.length;i++){
			mess[1]=mess[1]+" "+mess[i];
		}
		//bot.reply(message, mess);
		
		var beat = ["",""];
		var weap = "";
		if (message.author.name==="lily"&&(message.content.toLowerCase().includes("space")||message.content.toLowerCase().includes("171423773499588608"))){
			bot.sendMessage(message,message.author+" beat "+bot.users.get("id","171423773499588608").mention()+" to death with his own selfie stick.");
		}
		else{
			switch(Math.floor(Math.random()*10)){
			case 0:
				weap = "an airhorn";
			break;
			case 1:
				weap = "a tennis racket";
			break;
			case 2:
				weap = "a baseball bat";
			break;
			case 3:
				weap = "their own mum";
			break;
			case 4:
				weap = "a frog";
			break;
			case 5:
				weap = "their own fists";
			break;
			case 6:
				weap = "a dull knife";
			break;
			case 7:
				weap = "a butterknife";
			break;
			case 8:
				weap = "an axe";
			break;
			case 9:
				weap = "one of their fingers";
			break;
		}
		switch(Math.floor(Math.random()*7)){
			case 0:
				beat[0] = " beat ";
				beat[1] = " with "+weap+".";
			break;
			case 1:
				beat[0] = " smashed ";
				beat[1] = "'s skull in with "+weap+".";
			break;
			case 2:
				beat[0] = " rekt ";
				beat[1] = " with "+weap+".";
			break;
			case 3:
				beat[0] = " crushed ";
				beat[1] = " by dropping a piano on them.";
			break;
			case 4:
				beat[0] = " smekt ";
				beat[1] = " with "+weap+".";
			break;
			case 5:
				beat[0] = " owned ";
				beat[1] = " with "+weap+".";
			break;
			case 6:
				beat[0] = " ripped ";
				beat[1] = "'s heart out using words.";
			break;
			
		}
		bot.sendMessage(message,message.author+beat[0]+mess[1]+beat[1]);
		}
		
		
	}
	else if (message.content.toLowerCase()===("ping"))
		bot.sendMessage(message, "pong");
	else if (message.content.toLowerCase()===("\\???")){
		///bot.deleteMessage(message);
		bot.sendFile(message, "http://i2.kym-cdn.com/entries/icons/original/000/018/489/nick-young-confused-face-300x256_nqlyaa.png");
	}
	else if (message.content.toLowerCase().includes("\\nani"))
		bot.sendFile(message, "http://i.imgur.com/ZNkdYOJ.png");
	else if (message.content.toLowerCase().includes(("oh hot reservoir"))||message.content.toLowerCase().includes(("o hot reservoir")))
		bot.sendMessage(message, "this is my jelly");
	else if (message.content.toLowerCase().includes("\\doot"))
		bot.sendMessage(message, ":trumpet: doot :trumpet: doot :trumpet: doot :trumpet: ");
	else if (message.content.toLowerCase().includes(("oh hot damn"))||message.content.toLowerCase().includes(("o hot damn"))){
		bot.reply(message, "STRAAAWBERRRY JAAAAAAAAAAM");
		bot.sendMessage(message, ".music play https://www.youtube.com/watch?v=6pQdBaFfHjs");
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
	else if (message.content.substring(0,3)=="\\js"){
		bot.deleteMessage(message);
		eval(message.content.substring(3));
	}
	else if (message.content.toLowerCase()===("\\cmdpls")||message.content.toLowerCase()===("\\cmdspls")){
		//bot.reply(message, "have sum cmds");
		bot.sendMessage(message.author, "**ready?,are you ready, kids?,i can't hear you!** -\n\t\t invites a corresponding response from lilybot\n"
		+ "**good morning, good evening** -\n\t\t invites a corresponding response from lilybot, in Japanese\n"
		+ "**ty** -\n\t\t be welcomed\n"
		+ "**noot noot** -\n\t\t be nooted in return\n"
		+ "**\\nani,\\\\???** -\n\t\t recieve a corresponding meme containing an inquisitive fellow\n"
		+ "**here come dat <insert word>** -\n\t\t oh shit waddup!\n"
		+ "**\\d4** -\n\t\t ??\n"
		+ "**kms, kys** -\n\t\t invites lilybot to agree heartily\n"
		+ "**\\lenny** -\n\t\t ( ͡° ͜ʖ ͡°)\n"
		+ "**ping** -\n\t\t .pong!\n"
		+ "**???** -\n\t\t ???\n"
		+ "**oh hot reservoir, o hot reservoir** -\n\t\t invites lilybot to finish the meme\n"
		+ "**oh hot damn, o hot damn** -\n\t\t STRAAAWBERRRY JAAAAAAAAAAM (make sure you join the audio channel using \joinvoice first!)\n"
		+ "**\\jump** -\n\t\t what? jumping isn't allowed gtfo\n"
		+ "**\\squeesh** -\n\t\t generates a random squeesh face. kyuuuuuun! (> v <\n"
		+ "**\\js <code>** -\n\t\t execute as much javascript as can fit in one line. ganbatte!\n"
		+ "**\\cmdpls,\\cmdspls** -\n\t\t get commands for lilybot\n"
		+ "**\\joinvoice** -\n\t\t tells lilybot to join the first voice channel in the server\n"
		+ "**\\jam** -\n\t\t queue up some strawberry jam (use \\joinvoice first!)\n"
		+ "**\\loop <times> <url/keywords>** -\n\t\t loops the given url the given number of times. (requires \"lilybot Admin\") (use \\joinvoice first!)\n"
		+ "**\\kaomoji** -\n\t\t generates a random kaomoji/lenny\n"
		+ "**\\pickanumber,\\pickanumber <number>** -\n\t\t starts a new number game, picking a number between 1 and <number>. If no <number> is specified then lilybot will default to 100.\n"
		+ "**\\guess <number>** -\n\t\t places a guess of <number> towards the number game."
		+ "**marco** -\n\t\t polo!\n"
		+ "**\\clearboard** -\n\t\t clears the tic-tac-toe board\n"
		+ "**\\place** <1-9> <x/o> -\n\t\t places a tic-tac-toe piece. The spots on the board are numbered as follows:\n"
		+ "\t\t:one::two::three:\n\t\t:four::five::six:\n\t\t:seven::eight::nine:\n"
		);
		bot.sendMessage(message.author, "**\\floob** -\n\t\t floob at the rest of the server in one of many different ways\n"
		+ "**\\reload** -\n\t\t reload the gun used for Russian Roulette\n"
		+ "**\\rr** -\n\t\t Russian Roulette! Spin the 6-chamber revolver and take a shot. If you die, you reload the gun automatically.\n"
		+ "**\\datboi, \\herecomedatboi** -\n\t\t tells lilybot to deliver a fresh gif of DAT BOI\n"
		+ "**\\em** -\n\t\t emote in a nicely formatted manner\n"
		+ "**\\airhorn <1/2>** -\n\t\t plays one of two airhorn sounds (use \\joinvoice first!)\n"
		+ "**\\kms** -\n\t\t kill yourself.\n"
		+ "**\\rek <user>** -\n\t\t reks the given user in one of many ways\n"
		+ "**\\doot** -\n\t\t invites lilybot to respond with a colorful and relative message\n"
		+ "**\\gj** -\n\t\t inserts a certain gif from NGL\n"
		+ "**\\ogj** -\n\t\t OMEGAGOODJOB\n"
		+ "**confirm/deny** -\n\t\t include this to get an answer from lilybot\n"
		+ "**my mind's tellin me no** -\n\t\t \"BUT MY BODY\"\n"
		+ "**my body's telin me yes** -\n\t\t triggers the 'bump and grind' video (use \joinvoice first!)\n"
		);
		//+ "*\\share* -\n\t\t generates a link with which to authenticate lilybot on another server"
		//bot.reply(message, msg);
	}
	else if (message.content.toLowerCase()==="\\joinvoice"){
		for (var channel of message.channel.server.channels) {
			// If the channel is a voice channel, ...
			if (channel instanceof Discord.VoiceChannel && channel===message.author.voiceChannel) {
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
		bot.sendMessage(message, ".music play https://www.youtube.com/watch?v=6pQdBaFfHjs");
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
		if (message.author.hasRole(message.channel.server.roles.get("name","lilybot Admin"))&&!isNaN(splitted[1])){
			var count = 0;
			var times = splitted[1];
			splitted.shift();
			splitted.shift();
			setInterval(function () {
				bot.sendMessage(message,".music play "+splitted.join(" ")); 
				count++;
				if (count>=times){
					bot.reply(message, "Your loop has completed.");
					clearInterval(this);
				} 
			}, 5000);
		}
		else if (isNaN(splitted[1])) bot.reply(message,"incorrect format. use '\\loop <times> <url/name>' instead."); 
		else bot.reply(message,"git gud. Your don't have the permissions to execute this command."); 
	}
	else if (message.content.toLowerCase()===("\\kaomoji")){
		var lennies = ["( ͡° ͜ʖ ͡°)","└[⩿ ͟ل͜⪀]┘","(づ⟃益⟄)づ","ヽ(ʘ ͟ʖʘ)ﾉ","(✿ ͜つ✿)","ლ(◍⍊◎ლ)","(∩`Ꮂ´)⊃━☆ﾟ.*","乁(ಠ‸ಠ)ㄏ","୨☯ᴥ☯୧","\( º  ͜ʖ º )/","ᕳ´• Ꮂ •`ᕲ","(づ⪦﹏⪧)づ","(ง■ヮ■)ง","乁(・ロ・)ㄏ","ᕕ( ͠°﹏ °)ᕗ","(∩^Д^)⊃━☆ﾟ.*","ᕕ(⫑෴⫒)ᕗ","\(⪧!⪦)/","(づꗞᨎꗞ)づ","(ง º ᴥ º )ง","ᘳ■‸■ᘰ","(∩❍ω❍)⊃━☆ﾟ.*"]
		bot.sendMessage(message,lennies[Math.floor(Math.random()*lennies.length)]);
	}
	else if (message.content.toLowerCase()===("\\share")){
		bot.sendMessage(message,"Use this link to authenticate lilybot on another server: https://discordapp.com/oauth2/authorize?client_id=213414055497433088&scope=bot");
	}
	else if (message.content.toLowerCase().includes("\\floob")){
		var floob = Math.floor(Math.random()*13);
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
			case 10:
				floob = "religiously";
			break;
			case 11:
				floob = "like you got the holy ghost";
			break;
			case 12:
				floob = "like you just don't care";
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
	else if (isNaN(message.content.toLowerCase().substring(6))&&message.content.toLowerCase().substring(0,6)===("\\guess")){
		bot.reply(message, "stop ur cheatin");
	}
	else if ((!isNaN(message.content.toLowerCase().substring(6)))&&message.content.toLowerCase().substring(0,6)===("\\guess")&&message.content.toLowerCase()!=("\\guess \\guess")&&(message.content.toLowerCase()!=("\\guess nan"))){
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
	//END TIC TAC TOE
	//CHECKERS!
	/*else if (message.content.toLowerCase()===("\\clearcheckers")){
		bot.reply(message, "The board has been cleared.");
		bot.sendMessage(message, ":white_large_square::white_large_square::white_large_square::white_large_square::white_large_square::white_large_square::white_large_square::white_large_square:\n"+
		":white_large_square::white_large_square::white_large_square::white_large_square::white_large_square::white_large_square::white_large_square::white_large_square:\n"+
		":white_large_square::white_large_square::white_large_square::white_large_square::white_large_square::white_large_square::white_large_square::white_large_square:\n"+
		":white_large_square::white_large_square::white_large_square::white_large_square::white_large_square::white_large_square::white_large_square::white_large_square:\n"+
		":white_large_square::white_large_square::white_large_square::white_large_square::white_large_square::white_large_square::white_large_square::white_large_square:\n"+
		":white_large_square::white_large_square::white_large_square::white_large_square::white_large_square::white_large_square::white_large_square::white_large_square:\n"+
		":white_large_square::white_large_square::white_large_square::white_large_square::white_large_square::white_large_square::white_large_square::white_large_square:\n"+
		":white_large_square::white_large_square::white_large_square::white_large_square::white_large_square::white_large_square::white_large_square::white_large_square:\n"
		);
	}*/
	
});

bot.loginWithToken("Bot MjEzNDE0MDU1NDk3NDMzMDg4.Co6E1w.jI4-3ES-9m1ZcC2vyOE0mpSd51U");

function error(e) {
	console.log(e.stack);
	process.exit(0);
}
