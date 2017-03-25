'use strict';
const patterns = require('../patterns');  // Is going to process patterns that are in patterns folderbefore passing it to off to bot. Call with two dots
const XRegExp =  require('xregexp');    // It should require for the xregexp to be used inside patterns.

let createEntities = (str, pattern) => {
  return XRegExp.exec(str, XRegExp(pattern, "i"));    //
}

let matchPattern = (str, cb) => {         // cb is the call back function and str is users input
  let getResult = patterns.find(item => {   // if pattern  tested and it is real it should return with the intent
    if (XRegExp.test(str, XRegExp(item.pattern, "i"))) {  // test users input and verify it true regular expresions and "i" does not make it case sensitive.
      return true; // This matches patterns to intent.
    }
  });
  if(getResult) {   // If pattern is real that is matched with intent.
    return cb({
      intent: getResult.intent,
      entities: createEntities(str, getResult.pattern)
    });
  } else {         // If pattern isnt real.
    return cb({});
  }
}
module.exports = matchPattern;          // export pattern matcher.
