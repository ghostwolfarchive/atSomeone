<div align="center">
    <img src="https://i.imgur.com/RFcCwcj.png">
</div>

atSomeone's purpose is to recreate the Discord's April Fools 2018 joke - @Someone function. 

<div aligh="center">
	<img src="https://i.imgur.com/oOYrgpC.png">
	</div>
	
---

<h2 align="center">Self-hosting</h2>

When creating a new bot account, make sure to enable "Server members intent" in the bots tab, or else the bot might not function properly!
![](https://i.kawaii.sh/d3BTTwM.png)

Requirments:
- Node 10.x or newer
- discord.js 11.5.1
- dotenv 8.2.0
> This is what I used to test the app on. Using newer versions might require code changes.

First of all, [download and install Node.js to your machine if it's not already installed](https://nodejs.org/en/download/). To check the version of Node.js, run:
```
$ node -v
```
This should output the version you're currently using, for example:
```
v12.16.1
```

Then install the required dependencies:
```
$ npm i discord.js@11.5.1
$ npm i dotenv@8.2.0
```

Lastly, navigate to the bot's folder, modify `.env.example`, replace `YOUR_TOKEN_HERE` with your bot's token which can be found in [Discord Developers page](https://discordapp.com/developers), rename `.env.example` to `.env` and run:
```
$ node index.js
```

If it outputs this message:
```
Bot has started, with .. users, in .. channels of .. guilds.
```

Congratulations! The bot is working! :sparkles:
