const patternDict = [{
  pattern: '\\b(Hi|Hello|Hy|Sup|Whatsup|Yo)\\b',  // Create a pattern to enable users with different ways of greeting to make one logical reason to the bot
  intent: 'Hello'
}];

module.exports = patternDict;
