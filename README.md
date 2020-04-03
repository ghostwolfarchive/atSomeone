
<div align="center">
    <img src="https://i.imgur.com/RFcCwcj.png">

<a href="https://discord.gg/7vhD4KB">![Discord](https://img.shields.io/discord/661993788616474628?label=Join%20us%20on%20Discord&logo=discord&logoColor=ffffff)</a> | 
<a href="https://github.com/TheOnlyGhostwolf/atSomeone/blob/master/LICENSE">![License](https://img.shields.io/badge/License-Unlicense-brightgreen)</a>
</div>

---

<h2 align="center">atSomeone</h2>
atSomeone's purpose is to recreate the Discord's April Fools 2018 joke - @Someone function. 

<div aligh="center">
	<img src="https://i.imgur.com/oOYrgpC.png">
	</div>

<h3>Table of Contents</h3>

- [Contributing](#contributing)
- [Self-hosting](#self-hosting)
- [License](#license)

<h2 align="center">Contributing</h2>
Any code improvements that would make the data gathering and processing even more effective are highly welcomed!

<h2 align="center">Self-hosting</h2>

> WARNING! This part might not be the best tutorial how to launch the bot. I apologise for that.

Requirments:
- Node 10.x or newer
- discord.js 11.5.1
- dotenv 8.2.0
> This is what I used to test the app on. Using newer versions might require code changes.

First of all, [download and install Node.js to your machine if it's not already installed](https://nodejs.org/en/download/). To check the version of Node.js, run:
```
$node -v
```
This should output the version you're currently using, for example:
```
v12.16.1
```

Then install the required dependencies:
```
npm i discord.js@11.5.1
npm i dotenv@8.2.0
```

Lastly, navigate to the bot's folder, modify `.env.example`, replace `YOUR_TOKEN_HERE` with your bot's token which can be found in [Discord Developers page](https://discordapp.com/developers), rename `.env.example` to `.env` and run:
```
node index.js
```

If it outputs this message:
```
Bot has started, with .. users, in .. channels of .. guilds.
```

Congratulations! The bot is working! :sparkles:

<h2 align="center">License</h2>

[This software is Unlicensed](https://github.com/TheOnlyGhostwolf/atSomeone/blob/master/LICENSE)