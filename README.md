# lilybot

![alt tag](http://i.imgur.com/1bP8leP.png)

A discord bot written from scratch, utilizing Discord.js and Node.js

TYPE "\cmdspls" FOR A LIST OF COMMANDS

*some commands require that the server also uses the separate "discoid" bot*

I ain't hostin' this, therefore there is no auth link.

Set up locally as follows:

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

