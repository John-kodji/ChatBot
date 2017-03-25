const patternDict = [{
  pattern: `\\b(?<greeting>Hi|Hello|Hy|Sup|Whatsup|Yo)\\b`,  // Create a pattern to enable users with different ways of greeting to make one logical reason to the bot
  intent: 'Hello'
}, {
  pattern: '\\b(bye|goodbye|see ya|later)\\b',
  intent: 'Exit'
},{
  pattern: 'like\\sin\\s(?<city>.+)',  // what is the weather condition at a place.
  intent: 'CurrentWeather'
}];

module.exports = patternDict;
