var Discord = require("discord.js");
var fs = require ("fs")
var bot = new Discord.Client();
servernumbers = [[0,"Ye Olde Nyerd Basket",0],[0,"Chill Zone",0]];
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
bot.login("Bot MjEzNDE0MDU1NDk3NDMzMDg4.Co6E1w.jI4-3ES-9m1ZcC2vyOE0mpSd51U");
try{
bot.on("message",function(message){
	//declare shortcut functions
	function loop(m,n){
		for(i=0;i<n;i++){ 
			message.channel.sendMessage(m);
		}
	}
	function send(m){
		// where "m" is the message to send
		message.channel.sendMessage(m);
	}
	function tts(m){
		// where "m" is the message to send
		message.channel.sendTTSMessage(m);
	}
	function regex(m,p){
		// where "m" is the subject, "p" is the pattern
		message.channel.sendMessage(m.match(eval(p)));
	}
	/*function cmd(m){
		// where "m" is the message to send - this deletes the sent message so only a command meant for another bot is executed
		var temp = message.channel.sendMessage(m);
	}*/
	//gambling funcs
	gamble = function(user,num){
	if(!isNaN(num)&&num>0){
			if (users.includes(user)){
				if (num<=monies[users.indexOf(user)]){
					if (Math.random() > 0.6){
						monies[users.indexOf(user)] -= num;
						send("You lost your gambled monies.\nYour monies is now: "+monies[users.indexOf(user)]);
					}
					else{
						var added = Math.floor(((Math.random()*.6)+.5)*num);
						monies[users.indexOf(user)] -= 0-added;
						send("You gain "+added+" monies and keep what you had.\nYour monies is now: "+monies[users.indexOf(user)]);
					}
				}
				else{
					send("You don't have enough monies to complete this operation.");
				}
			}
			else{
				send("error; run setup with \\setupgamble before running commands.");
			}
		}
		else{
			send("Operation failed. Enter a valid number.");
		}
	};
	loot = function(user){
		if (users.includes(user)){
			if ((new Date()).getMinutes()>pastaccess[users.indexOf(user)].getMinutes()||((new Date()).getMinutes()==1&&(new Date()).getMinutes()!=pastaccess[users.indexOf(user)].getMinutes())||(new Date()).getHours()!=pastaccess[users.indexOf(user)].getHours()){
				var money = Math.floor(100+(Math.random()*150));
				monies[users.indexOf(user)]+=money;
				send("You gain "+money+" monies.\nYou now have "+monies[users.indexOf(user)]+" total monies.")
				pastaccess[users.indexOf(user)] = (new Date());
			}
			else{
				send("You can only loot once per minute.");
			}
		}
		else{
			send("error; run setup with \\setupgamble before running commands.");
		}
	};
	profile = function(user){
		if (users.includes(user)){
			var temp = monies[users.indexOf(user)];
			send("Profile for "+user+":\nMonies: "+temp+"\nSavingu: "+saves[users.indexOf(user)]);
		}
		else{
			send("error; run setup with \\setupgamble before running commands.");
		}
	};
	clear = function(){
		users = ["lily"];
		monies = [0]
		pastaccess = [(new Date())];
		saves = [0];
		send("All tables have been cleared.");
	};
	setupgamble = function(user){
		if (users.includes(user)){
			send("Your user is already set.");
		}
		else{
			users.push(user);
			monies.push(0);
			pastaccess.push((new Date()));
			saves.push(0);
			send("Your user has been successfully set.");
		}
	};
	transferin = function(user,num){
		if(!isNaN(String(num))&&num>0){
			if (users.includes(user)){
				if (parseInt(num)<=monies[users.indexOf(user)]){
					monies[users.indexOf(user)]-=parseInt(num);
					saves[users.indexOf(user)]+=parseInt(num);
					send("Your monies is now: "+monies[users.indexOf(user)]+"\nYour savingu is now: "+saves[users.indexOf(user)]);
				}
				else{
					send("You don't have enough monies to complete this operation.");
				}
			}
			else{
				send("error; run setup with \\setupgamble before running commands.");
			}
		}
		else{
			send("Operation failed. Enter a valid number.");
		}
	};
	transferout = function(user,num){
		if(!isNaN(String(num))&&num>0){
			if (users.includes(user)){
				if (parseInt(num)<=saves[users.indexOf(user)]){
					monies[users.indexOf(user)]+=parseInt(num);
					saves[users.indexOf(user)]-=parseInt(num);
					send("Your monies is now: "+monies[users.indexOf(user)]+"\nYour savingu is now: "+saves[users.indexOf(user)]);
				}
				else{
					send("You don't have enough monies in your savingu to complete this operation.");
				}
			}
			else{
				send("error; run setup with \\setupgamble before running commands.");
			}
		}
		else{
			send("Operation failed. Enter a valid number.");
		}
	};
	transferto = function(user,touser,num){
		if(!isNaN(String(num))&&num>0){
			if (users.includes(user)&&users.includes(touser)){
				if (parseInt(num)<=monies[users.indexOf(user)]){
					monies[users.indexOf(user)]-=parseInt(num);
					monies[users.indexOf(touser)]+=parseInt(num);
					send("Your monies is now: "+monies[users.indexOf(user)]+"\n"+touser+"\'s monies is now: "+monies[users.indexOf(touser)]);
				}
				else{
					send("You don't have enough monies to complete this operation.");
				}
			}
			else{
				send("error; both users must run setup with \\setupgamble before running commands.");
			}
		}
		else{
			send("Operation failed. Enter a valid number.");
		}
	};
	duel = function(user,touser){
			if (users.includes(user)&&users.includes(touser)){
				if (monies[users.indexOf(user)]>=1000&&monies[users.indexOf(touser)]>=1000){
					if(Math.floor(Math.random()*2)==0){
						var prize = Math.floor((Math.random()*((monies[users.indexOf(user)]/monies[users.indexOf(touser)]>1)?1:monies[users.indexOf(user)]/monies[users.indexOf(touser)]))*monies[users.indexOf(touser)]);
						monies[users.indexOf(user)]+=prize;
						monies[users.indexOf(touser)]-=prize;
						send("You have Succeeded!\n\nYou have gained "+prize+" of "+touser+"\'s monies.\n\nYour monies is now: "+monies[users.indexOf(user)]+"\n"+touser+"\'s monies is now: "+monies[users.indexOf(touser)]);
					}
					else{
						monies[users.indexOf(touser)]+=monies[users.indexOf(user)];
						monies[users.indexOf(user)]=0;
						send("You have been utterly defeated!\n\nYou have lost all of your monies. All of them.\n\nYour monies is now: "+monies[users.indexOf(user)]+"\n"+touser+"\'s monies is now: "+monies[users.indexOf(touser)]);
					}
				}
				else{
					send("Someone doesn\'t have enough monies to complete this operation. Dueling requires a minimum of 1000 monies.");
				}
			}
			else{
				send("error; both users must run setup with \\setupgamble before running commands.");
			}
	};
	
	
	
	//define winner
	winner = function(which){
		var id = 0;
		if (message.guild.name==="Ye Olde Nyerd Basket") id = 0;
		else id = 1;
		
		for (i=0;i<3;i++){
			for (a=0;a<3;a++){
			serverboards[id][i][a] = 0;
			}
		}
		
		server_last[id] = 0;
		message.reply(":"+which.toLowerCase()+": has won! the board has been reset.");
	}
	//4:20
	if (((d = new Date()).getHours() == 4 && (d = new Date()).getMinutes() == 20) || ((d = new Date()).getHours() == 16 && (d = new Date()).getMinutes() == 20)){
		if (!done420){
			message.channel.sendMessage("it be 4:20");
			message.channel.sendFile( "http://comps.canstockphoto.com/can-stock-photo_csp13177268.jpg");
			done420 = true;	
		}
	}
	if ((d = new Date()).getHours() == 5 || (d = new Date()).getHours() == 17){
		done420 = false;
	}
	//!4:20
	if (message.content.toLowerCase()===("ready?")){
		//var contains = false;
		message.reply("Ready!");
		bot.user.setStatus("online");
		bot.user.setGame("type \\cmdspls");
		//bot.user.setAvatar("C:\Users\lilia\Desktop\lilbot.user.png", function(){});
	}
	else if (message.content.toLowerCase()===("\\hue")){
		message.channel.sendMessage( ".music play https://www.youtube.com/watch?v=SHo9IJYaylQ");
	}
	else if (message.content.toLowerCase()===("\\r'amen")&&message.author.id==="176021596325150720"){
		message.channel.sendFile( "https://static3.fjcdn.com/comments/R+amen+my+brother+_dc14bd6d200fb416c558123f7d1e7d2d.jpg");
	}
	else if ((message.content.toLowerCase()===("\\prayer")||message.content.toLowerCase()===("\\ourpasta")||message.content.toLowerCase()===("\\ourpastawhoartinacolander"))&&message.author.id==="176021596325150720"){
		message.channel.sendMessage( "Our pasta, who art in a colander,\nDraining be your noodles.\nThy noodle come,\nThy sauce be yum,\nOn top some grated parmesan.\nGive us this day our garlic bread,\nAnd forgive us our trespasses,\nAs we forgive those who trample on our lawns.\nAnd lead us not into vegetarianism, but deliver us some pizza,\nFor thine is the meatball, the noodle, and the sauce, forever and ever.\n-R’Amen.");
	}
	
	//gambling
	else if(message.content.substring(0,7)===("\\gamble")){
		gamble(message.author.username,message.content.substring(8));
	}
	else if(message.content.substring(0,8)===("\\profile")){
		if (message.content==="\\profile"){
			profile(message.author.username);
		}
		else{
			profile(message.content.split(" ")[1]);
		}
	}
	else if(message.content===("\\setupgamble")){
		setupgamble(message.author.username);
	}
	else if(message.content===("\\loot")){
		loot(message.author.username);
	}
	else if(message.content.substring(0,11)===("\\transferin")){
		transferin(message.author.username, message.content.substring(12));
	}
	else if(message.content.substring(0,12)===("\\transferout")){
		transferout(message.author.username, message.content.substring(13));
	}
	else if(message.content.substring(0,11)===("\\transferto")){
		transferto(message.author.username, message.content.split(" ")[1], message.content.split(" ")[2]);
	}
	else if(message.content===("\\help monies")){
		send("```behold, th monie cmds:\n\n\\gamble <num>\n\\profile <user>\n\\setupgamble\n\\loot\n\\transferin <num>\n\\transferout <num>\n\\transferto <user> <num>\n\\duel <user>\n\\help monies```");
	}
	else if(message.content.split(" ")[0]===("\\duel")){
		duel(message.author.username,message.content.split(" ")[1]);
	}
	
	
	
	else if (message.content.toLowerCase().includes("are you ready"))
		message.reply( "Aye aye, Captain!");
	else if (message.content.toLowerCase().includes("i can't hear you"))
		message.reply( "AYE AYE CAPTAIN");
	else if (message.content.toLowerCase().includes("good morning"))
		message.channel.sendMessage( "ohayou gozaimasu");
	else if (message.content===("MARCO"))
		message.channel.sendMessage( "POLO, MOTHERFUCKER");
	else if (message.content.toLowerCase()===("marco"))
		message.channel.sendMessage( "polo");
	else if (message.content.toLowerCase().includes("confirm/deny"))
		message.channel.sendMessage( (Math.floor(Math.random()*2)===1)? "confirm":"deny");
	else if (message.content.toLowerCase()===("ggg"))
		message.channel.sendTTSMessage("get good giles");
	else if (message.content.toLowerCase()===("ggl"))
		message.channel.sendTTSMessage("get good lily");
	else if (message.content.toLowerCase().substring(0,6)===("\\regex"))
		regex(message.content.split(" ")[1],message.content.split(" ")[2]);
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
		message.channel.sendMessage( "\""+jaden[Math.floor(Math.random()*jaden.length)]+"\" - Jaden Smith");
	}
	else if (message.content.toLowerCase()===("\\gj"))
		message.channel.sendFile( (message, "http://i.imgur.com/YHw1yW5.gif"));
	else if (message.content.toLowerCase()===("\\ogj"))
		message.channel.sendMessage( (message, ".music play https://www.youtube.com/watch?v=U0kaAl5v0AA"));
	else if (message.content.toLowerCase().substring(0,3)===("\\em")){
		var ms = (message, "```"+message.author.name.toUpperCase().substring(0,1)+message.author.name.substring(1)+message.content.substring(3)+
	((message.content.substring(message.content.length-1)==="."||message.content.substring(message.content.length-1)==="?"||message.content.substring(message.content.length-1)==="!")? "":".")+"```");
		//ms = ms.replace("");
		message.channel.sendMessage( ms);
		message.delete();
	}
	else if (message.content.toLowerCase()===("\\milkshake")){
		if (message.author.id==="194691144981020673"){
			if (Math.floor(Math.random()*100)===7){
				message.reply( "u got the rare milkshake it is big look");
				message.channel.sendFile( "http://www.chick-fil-a.com/Media/Img/catalog/Food/XLarge/Chocolate-Milkshake.png");
			}
			message.reply( "here's ur milkshake gdi");
			message.channel.sendFile( "http://urbantastebuds.wpengine.netdna-cdn.com/wp-content/uploads/2014/05/mcdonalds-Vanilla-McCafe-Shake-12-fl-oz-cup-1.png");
		}
		else message.reply( "am sorry but who died an made u the milkshake queen");
	}
	else if ((message.content.toLowerCase()===("\\airhorn")||message.content.toLowerCase()===("\\airhorn 1"))){
		if (message.author.hasRole(message.channel.guild.roles.get("name","lilybot Admin"))){
			message.channel.sendMessage( ".music play https://www.youtube.com/watch?v=QVw5mnRI8Zw");
		}
		else message.reply( "git gud. Your don't have the permissions to execute this command.");
	}
	else if (message.content.toLowerCase()===("\\airhorn 2")){
		if (message.author.hasRole(message.guild.roles.get("name","lilybot Admin"))){
			message.channel.sendMessage( ".music play https://www.youtube.com/watch?v=a_6CZ2JaEuc");
		}
		else message.reply( "git gud. Your don't have the permissions to execute this command.");
	}
	else if (message.content.toLowerCase().substring(0,8)==="\\nowplay"){
		message.author.game = bot.user.user.game;
		//message.author.game.name = message.content.substring(9);
		message.reply("k");
	}
	else if (message.content.toLowerCase().includes("good evening")){
		switch (Math.floor(Math.random()*2)){
			case 0: message.channel.sendTTSMessage( "(cone ban wa)");
			break;
			case 1: message.channel.sendMessage( "konbanwa");
			break;
		}
	}
	else if (message.content.toLowerCase()==="ty"||message.content.toLowerCase().includes(" ty "))
		message.channel.sendMessage( "yw");
	else if (message.content.toLowerCase().includes("noot noot"))
		message.channel.sendMessage( "noot!");
	else if (message.content.toLowerCase()===("\\timestamp")){
		var d = new Date();
		message.reply( d.getMinutes());
	}
	else if (message.content.toLowerCase()===("???"))
		message.channel.sendMessage( "\t¿¿¿");
	else if (message.content.toLowerCase().includes("my mind's tellin")&&message.content.toLowerCase().includes("me no"))
		message.channel.sendMessage( "BUT MY BODY");
	else if (message.content.toLowerCase().includes("my bo")&&message.content.toLowerCase().includes("dy's tellin")&&message.content.toLowerCase().includes("me y"))
		message.channel.sendMessage( ".music play https://www.youtube.com/watch?v=gTXGL0xPyLA");
	else if (message.content.toLowerCase().includes("here come dat"))
		message.channel.sendMessage( "oh shit waddup!");
	else if (message.content.toLowerCase().includes("\\datboi")||message.content.toLowerCase().includes("\\herecomedatboi"))
		message.channel.sendFile( "https://media.giphy.com/media/UHKL9BtyM4WrK/giphy.gif");
	else if (message.content.toLowerCase()==="\\d4")
		message.channel.sendMessage( "MISTER YOUUUNNNG");
	else if (message.content.toLowerCase()===("kms"))
		message.reply( "ys kys");
	else if (message.content.toLowerCase()===("\\kms"))
		message.channel.sendMessage( message.author+" has blown their brains out.");
	else if (message.content.toLowerCase()===("kys"))
		message.channel.sendMessage( "ys kys");
	else if (message.content.toLowerCase().includes("\\lenny"))
		message.channel.sendMessage( "( ͡° ͜ʖ ͡°)");
	else if (message.content.toLowerCase().substring(0,4)===("\\rek")){
		var mess = message.content.toLowerCase().split(" ");
		//mess[1] = mess.join(" ").substring(4);
		for (i=2;i<mess.length;i++){
			mess[1]=mess[1]+" "+mess[i];
		}
		//message.reply( mess);
		
		var beat = ["",""];
		var weap = "";
		if (message.author.username=="lily"&&(message.content.toLowerCase().includes("space")||message.content.toLowerCase().includes("giles")||message.content.toLowerCase().includes("171423773499588608"))){
			message.channel.sendMessage(message.author+" beat @"+bot.users.find("id","171423773499588608").username+" to death with his own selfie stick.");
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
		message.channel.sendMessage(message.author+beat[0]+mess[1]+beat[1]);
		}
		
		
	}
	else if (message.content.toLowerCase()===("ping"))
		message.channel.sendMessage( "pong");
	else if (message.content.toLowerCase()===("\\???")){
		///message.delete();
		message.channel.sendFile( "http://i2.kym-cdn.com/entries/icons/original/000/018/489/nick-young-confused-face-300x256_nqlyaa.png");
	}
	else if (message.content.toLowerCase().includes("\\nani"))
		message.channel.sendFile( "http://i.imgur.com/ZNkdYOJ.png");
	else if (message.content.toLowerCase().includes(("oh hot reservoir"))||message.content.toLowerCase().includes(("o hot reservoir")))
		message.channel.sendMessage( "this is my jelly");
	else if (message.content.toLowerCase().includes("\\doot"))
		message.channel.sendMessage( ":trumpet: doot :trumpet: doot :trumpet: doot :trumpet: ");
	else if (message.content.toLowerCase().includes(("oh hot damn"))||message.content.toLowerCase().includes(("o hot damn"))){
		message.reply( "STRAAAWBERRRY JAAAAAAAAAAM");
		message.channel.sendMessage( ".music play https://www.youtube.com/watch?v=6pQdBaFfHjs");
	}
	else if (message.content.toLowerCase()==="\\jump"){
		var jump = Math.floor(Math.random()*4);
		switch (jump){
			case 0:
			message.channel.sendMessage( "NO JUMPING!");
			break;
			case 1:
			message.channel.sendMessage( "NO!");
			break;
			case 2:
			message.channel.sendMessage( "STAY ON THE GROUND, YOUNG MAN.");
			break;
			case 3:
			message.channel.sendMessage( "JUMPING IS FOR JOKERS");
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
			message.channel.sendMessage( "(* "+mouth+" *");
			break;
			case 1:
			message.channel.sendMessage( "(o "+mouth+" o 7");
			break;
			case 2:
			message.channel.sendMessage( "(- "+mouth+" -");
			break;
			case 3:
			message.channel.sendMessage( "(^ "+mouth+" ^");
			break;
			case 4:
			message.channel.sendMessage( "(O "+mouth+" O");
			break;
			case 5:
			message.channel.sendMessage( "(Q "+mouth+" Q");
			break;
		}
	}
	else if (message.content.substring(0,3)=="\\js"){
		if ((message.author.username=="lily"||message.author.username=="lilybot"||message.author.username=="Pie"||message.author.username=="Derrick")&&!message.content.includes("while(")&&!message.content.includes("while (")&&!message.content.includes("for (")&&!message.content.includes("for(")){
			try{
				message.channel.sendMessage(eval(message.content.substring(3)));
			}
			catch(err){
				message.channel.sendMessage("```Error: "+err.message+"```");
			}
		}
		else send("stop trynna break my shit");
		
		//message.delete();
	}
	else if (message.content.toLowerCase()===("\\cmdpls")||message.content.toLowerCase()===("\\cmdspls")){
		//message.reply( "have sum cmds");
		message.author.sendMessage("**ready?,are you ready, kids?,i can't hear you!** -\n\t\t invites a corresponding response from lilybot\n"
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
		message.author.sendMessage("**\\floob** -\n\t\t floob at the rest of the server in one of many different ways\n"
		+ "**\\reload** -\n\t\t reload the gun used for Russian Roulette\n"
		+ "**\\rr** -\n\t\t Russian Roulette! Spin the 6-chamber revolver and take a shot. If you die, you reload the gun automatically.\n"
		+ "**\\datboi, \\herecomedatboi** -\n\t\t tells lilybot to deliver a fresh gif of DAT BOI\n"
		+ "**\\em** -\n\t\t emote in a nicely formatted manner\n"
		+ "**\\airhorn <1/2>** -\n\t\t plays one of two airhorn sounds (use \\joinvoice first!)\n"
		+ "**\\kms** -\n\t\t kill yourself.\n"
		+ "**\\rek <user>** -\n\t\t reks the given user in one of many ways\n"
		+ "**\\doot** -\n\t\t invites lilybot to respond with a colorful and relevant message\n"
		+ "**\\gj** -\n\t\t inserts a certain gif from NGL\n"
		+ "**\\ogj** -\n\t\t OMEGAGOODJOB\n"
		+ "**confirm/deny** -\n\t\t include this to get an answer from lilybot\n"
		+ "**my mind's tellin me no** -\n\t\t \"BUT MY BODY\"\n"
		+ "**my body's telin me yes** -\n\t\t triggers the 'bump and grind' video (use \joinvoice first!)\n"
		+ "**\\regex <subject> <pattern>** -\n\t\t test a regex, return an array of matches\n"
		);
		//+ "*\\share* -\n\t\t generates a link with which to authenticate lilybot on another server"
		//message.reply( msg);
	}
	else if (message.content.toLowerCase()==="\\joinvoice"){
		message.member.voiceChannel.join()
	}
	else if (message.content.toLowerCase()===("\\jam")){
		message.reply( "STRAAAWBERRRY JAAAAAAAAAAM");
		message.channel.sendMessage( ".music play https://www.youtube.com/watch?v=6pQdBaFfHjs");
	}
	else if (message.content.toLowerCase()===("\\reload")){
		message.channel.sendMessage( message.author.name+" has loaded the gun!");
		loader = message.author.name;
	}
	else if (message.content.toLowerCase()===("\\rr")){
		var shot = (Math.floor(Math.random()*6)==1)
		if (shot){
			message.reply("you spin the revolver...\n\n "+message.author.name+" has died by "+loader+"'s bullet. Reloading.");
			loader = message.author.name;
		}
		else message.reply("you spin the revolver...\n\nyou survived.");
	}
	else if (message.content.toLowerCase().substring(0,5)===("\\loop")){
		var splitted = message.content.toLowerCase().split(" ");
		if (message.author.hasRole(message.guild.roles.get("name","lilybot Admin"))&&!isNaN(splitted[1])){
			var count = 0;
			var times = splitted[1];
			splitted.shift();
			splitted.shift();
			setInterval(function () {
				message.channel.sendMessage(".music play "+splitted.join(" ")); 
				count++;
				if (count>=times){
					message.reply( "Your loop has completed.");
					clearInterval(this);
				} 
			}, 5000);
		}
		else if (isNaN(splitted[1])) message.reply("incorrect format. use '\\loop <times> <url/name>' instead."); 
		else message.reply("git gud. Your don't have the permissions to execute this command."); 
	}
	else if (message.content.toLowerCase()===("\\kaomoji")){
		var lennies = ["( ͡° ͜ʖ ͡°)","└[⩿ ͟ل͜⪀]┘","(づ⟃益⟄)づ","ヽ(ʘ ͟ʖʘ)ﾉ","(✿ ͜つ✿)","ლ(◍⍊◎ლ)","(∩`Ꮂ´)⊃━☆ﾟ.*","乁(ಠ‸ಠ)ㄏ","୨☯ᴥ☯୧","\( º  ͜ʖ º )/","ᕳ´• Ꮂ •`ᕲ","(づ⪦﹏⪧)づ","(ง■ヮ■)ง","乁(・ロ・)ㄏ","ᕕ( ͠°﹏ °)ᕗ","(∩^Д^)⊃━☆ﾟ.*","ᕕ(⫑෴⫒)ᕗ","\(⪧!⪦)/","(づꗞᨎꗞ)づ","(ง º ᴥ º )ง","ᘳ■‸■ᘰ","(∩❍ω❍)⊃━☆ﾟ.*"]
		message.channel.sendMessage(lennies[Math.floor(Math.random()*lennies.length)]);
	}
	else if (message.content.toLowerCase()===("\\share")){
		message.channel.sendMessage("Use this link to authenticate lilybot on another server: https://discordapp.com/oauth2/authorize?client_id=213414055497433088&scope=bot");
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
		message.reply( "You floob "+floob+".");
	}
		
	//NUMBER GAME!
	else if (message.content.toLowerCase().substring(0,12)===("\\pickanumber")){
		if (message.guild.name==="Ye Olde Nyerd Basket") {
			if (message.content.length===12) servernumbers[0][0] = Math.floor(Math.random()*100)+1;
			else servernumbers[0][0] = Math.floor(Math.random()*parseInt(message.content.toLowerCase().substring(12)))+1;
			servernumbers[0][2] = 0;
			
		}
		else{
			if (message.content.length===12) servernumbers[1][0] = Math.floor(Math.random()*100)+1;
			else servernumbers[1][0] = Math.floor(Math.random()*parseInt(message.content.toLowerCase().substring(12)))+1;
			servernumbers[1][2] = 0;
		}
		
		message.channel.sendMessage( "A number has been generated.");
		
	}
	else if (isNaN(message.content.toLowerCase().substring(6))&&message.content.toLowerCase().substring(0,6)===("\\guess")){
		message.reply( "stop ur cheatin");
	}
	else if ((!isNaN(message.content.toLowerCase().substring(6)))&&message.content.toLowerCase().substring(0,6)===("\\guess")&&message.content.toLowerCase()!=("\\guess \\guess")&&(message.content.toLowerCase()!=("\\guess nan"))){
		if (message.guild.name==="Ye Olde Nyerd Basket") {
			if (servernumbers[0][0]!=0){
				var guess = parseInt(message.content.toLowerCase().substring(7));
				servernumbers[0][2]++;
				
				if (guess>servernumbers[0][0]){
					message.reply( "too high.");
				}
				else if (guess<servernumbers[0][0]){
					message.reply( "too low.");
				}
				else {
					message.reply( "you got it! "+servernumbers[0][2]+" guesses were made. The number is reset to 0.");
					servernumbers[0][2] = 0;
					servernumbers[0][0] = 0;
				}
				
				//message.channel.sendMessage( number);
			}
			else message.channel.sendMessage( "A number has not been picked. Use \\pickanumber <number>");
		}
		else{
			if (servernumbers[1][0]!=0){
				var guess = parseInt(message.content.toLowerCase().substring(7));
				servernumbers[1][2]++;
				
				if (guess>servernumbers[1][0]){
					message.reply( "too high.");
				}
				else if (guess<servernumbers[1][0]){
					message.reply( "too low.");
				}
				else {
					message.reply( "you got it! "+servernumbers[1][2]+" guesses were made. The number is reset to 0.");
					servernumbers[1][2] = 0;
					servernumbers[1][0] = 0;
				}
				
				//message.channel.sendMessage( number);
			}
			else message.channel.sendMessage( "A number has not been picked. Use \\pickanumber <number>");
		}
	}
	//END NUMBER GAME!
	//TIC TAC TOE!
	else if (message.content.toLowerCase()===("\\clearboard")){
		win = false;
		var id = 0;
		if (message.guild.name==="Ye Olde Nyerd Basket") id = 0;
		else id = 1;
		
		for (i=0;i<3;i++){
			for (a=0;a<3;a++){
			serverboards[id][i][a] = 0;
			}
		}
		
		server_last[id] = 0;
		message.reply( "The board has been cleared.");
		message.channel.sendMessage(":black_large_square::black_large_square::black_large_square:\n:black_large_square::black_large_square::black_large_square:\n:black_large_square::black_large_square::black_large_square:");
	}
	else if (message.content.toLowerCase().substring(0,6)===("\\place")){
		win = false;
		var i=0;
		var id = 0;
		if (message.guild.name==="Ye Olde Nyerd Basket") id = 0;
		else id = 1;
		
		var mess = message.content.split(" ");
		if (mess.length<3){
			message.reply("Incorrect format. Use a number from 1-9 and either ':damnDavid:' or 'O'.");
		}
		else if (mess[1]<1 || mess[1]>9 || (mess[2].toLowerCase()!=":damnDavid:"&&mess[2].toLowerCase()!="o")){
			message.reply("Incorrect format. Use a number from 1-9 and either ':damnDavid:' or 'O'.");
		}
		else{
		//catch err
			if (server_last[id]===mess[2]) message.reply("You can't place an "+((server_last[id]==="o")? ":o:":":damnDavid:")+" twice in a row! Try again.");
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
					else if (serverboards[id][i][a]===":damnDavid:") board[i][a] = ":damnDavid:";
					str+=board[i][a];
				}
				str+="\n";
			}
			if (server_last[id]!=mess[2]) message.channel.sendMessage(str);
			server_last[id] = mess[2];
			//check for a win
			//rows
			for (i = 0;i<3;i++){
				if (win) break;
				if (serverboards[id][i].toString()==[":damnDavid:",":damnDavid:",":damnDavid:"].toString()||serverboards[id][i].toString()==["o","o","o"].toString()){
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
			if (!win && ((serverboards[id][0][0]===":damnDavid:"&&serverboards[id][1][1]===":damnDavid:"&&serverboards[id][2][2]===":damnDavid:")||
			(serverboards[id][0][0]==="o"&&serverboards[id][1][1]==="o"&&serverboards[id][2][2]==="o"))){
				winner(mess[2]);
				win = true;
			}
			else if (!win && ((serverboards[id][0][2]===":damnDavid:"&&serverboards[id][1][1]===":damnDavid:"&&serverboards[id][2][0]===":damnDavid:")||
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
					if (message.guild.name==="Ye Olde Nyerd Basket") id = 0;
					else id = 1;
					
					for (i=0;i<3;i++){
						for (a=0;a<3;a++){
							serverboards[id][i][a] = 0;
						}
					}
					message.channel.sendMessage( "The result is a draw! The board has been reset.");
				}
			}
		}
	}
	//END TIC TAC TOE
	//CHECKERS!
	/*else if (message.content.toLowerCase()===("\\clearcheckers")){
		message.reply( "The board has been cleared.");
		message.channel.sendMessage( ":white_large_square::white_large_square::white_large_square::white_large_square::white_large_square::white_large_square::white_large_square::white_large_square:\n"+
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
}
catch(err){
	bot.users.find("id", "175812328783216649").sendMessage("error: "+err.message);
}


function error(e) {
	console.log(e.stack);
	bot.users.find("id", "175812328783216649").sendMessage("error: "+e.stack);
	//process.exit(0);
}
