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
      console.log("Hey Great... Hope you good?");   // Bots reply
      rl.prompt
      break;
    default: {
      console.log("Sorry I don't understand:(")   // In case where input isnt in bots data. How it should reply
    }
    }
});
});
