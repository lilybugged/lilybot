# lilybot

![alt tag](http://i.imgur.com/1bP8leP.png)


A discord bot written from scratch, utilizing Discord.js and Node.js

*some commands require that the server also uses the separate "discoid" bot*

There is no auth link for this; you need to individually set it up for it to work:

1. go to "my applications" on discord's site and create an application (you can use the icon above as the avatar)
2. save changes and then click "add bot user"
3. save changes again and then copy the client id and use it in this link: (replace [id] with your new client id number) https://discordapp.com/oauth2/authorize?client_id=[id]&scope=bot
4. enter the link in your browser to add it to your server
5. download the bot's source (the Javascript file) from this repository
6. edit the file, then press ctrl+f and search "token"
7. replace everything within the quotes on that line with the token shown in the settings of your app
8. install Node.js
9. open the node command prompt, type in the following: <code> npm install discord.js </code>
10. open the regular windows command prompt (type "cmd" in the windows search bar and press enter)
11. type <code> node </code> and then drag and drop the source file (lilybot.js) into the cmd window
12. press enter
13. open up your discord server and type in "\ready" - the bot will respond if you set it up properly

---- cmdspls ----

**ready?, are you ready, kids?,**	invites a corresponding response from lilybot
**i can't hear you!**			

**good morning, good evening**		invites a corresponding response from lilybot, in Japanese

**ty**					be welcomed

**noot noot**				be nooted in return

**\\nani,\\\\???**			recieve a corresponding meme of one inquisitive fellow

**here come dat <insert word>**	"oh shit waddup!"

**\\d4**				??

**kms, kys**				invites lilybot to agree heartily

**\\lenny**				( ͡° ͜ʖ ͡°)

**ping**				pong!

**???**				???

**oh hot reservoir, o hot reservoir**	invites lilybot to finish the meme

**oh hot damn, o hot damn**		STRAAAWBERRRY JAAAAAAAAAAM (make sure you join the audio channel using \joinvoice first!)

**\\jump**				what? jumping isn't allowed gtfo

**\\squeesh**				generates a random squeesh face. kyuuuuuun! (> v <

**\\js < code >**			execute as much javascript as can fit in one line. ganbatte!

**\\cmdpls,\\cmdspls**			get commands for lilybot

**\\joinvoice**			tells lilybot to join the first voice channel in the server

**\\jam**				queue up some strawberry jam (use \\joinvoice first!)

**\\loop <times> <url/keywords>**	loops the given url the given number of times. (requires \"lilybot Admin\") (use \\joinvoice 						first!)

**\\kaomoji**				generates a random kaomoji/lenny

**\\pickanumber,\\pickanumber <number>** starts a new number game, picking a number between 1 and <number>. If no <number> is 							specified then lilybot will default to 100.

**\\guess <number>**			places a guess of <number> towards the number game

**marco**				polo!\n"

**\\clearboard**			clears the tic-tac-toe board

**\\place** <1-9> <x/o>		places a tic-tac-toe piece. The spots on the board are numbered as follows:

:one::two::three:

:four::five::six:

:seven::eight::nine:

**\\floob**				floob at the rest of the server in one of many different ways

**\\reload**				reload the gun used for Russian Roulette

**\\rr**				Russian Roulette! Spin the 6-chamber revolver and take a shot. If you die, you reload the gun 					automatically.

**\\datboi, \\herecomedatboi**		tells lilybot to deliver a fresh gif of DAT BOI

**\\em**				emote in a nicely formatted manner

**\\airhorn <1/2>**			plays one of two different airhorn sounds (use \\joinvoice first!)

**\\kms**				kill yourself.

**\\rek <user>**			reks the given user in one of many ways

**\\doot**				invites lilybot to respond with a colorful and relative message

**\\gj**				inserts a certain gif from NGL

**\\ogj**				OMEGAGOODJOB

**confirm/deny**			include this to get an answer from lilybot

**my mind's tellin me no**		BUT MY BODY

**my body's telin me yes**		triggers the 'bump and grind' video (use \joinvoice first!)
