 'use strict';

 const Readline = require('readline');
 const rl = Readline.createInterface({    // Terminal interface for the bot
   input: process.stdin,
   output: process.stdout,
   terminal: false
});
const matcher = require('./matcher');   // Call the matcher created. Note the one dot since this is in app.js we call with one dot

rl.setPrompt('Default>')
rl.prompt();
rl.on('line', reply => {
  matcher(reply, data => {
    switch(data.intent) {
      case 'Hello':
      console.log(`${data.entities.greeting} what can i do for you?`);   // Bots reply with exact input user gave and adds for request.
      rl.prompt
      break;
case 'Exit':              // When user says anything with intent of ending conversation
      console.log("Goodbye Friend");    // Bot reply
      process.exit(0);        //Bot should exit from chat.
      break;
case 'CurrentWeather':
    console.log(`Checking weather for ${data.entities.city} ...`);
    rl.prompt()
    break;

    default: {
      console.log("Sorry I don't understand:(")   // In case where input isnt in bots data. How it should reply
    }
    }
});
});
