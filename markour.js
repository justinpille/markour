// :mk:
// #:\n
// <h1>:</h1>

var markour = function(src) {

  var rules = {};

  // Function storeRule
  // Takes user-defined rules and stores them in an object
  // Used by applyRules()

  function storeRule(pattern, result) {
    console.log(pattern + result);
  }



  // Function applyRules
  // Takes the output of the match function and checks it against stored rules

  function applyRules(inStr) {

  }



  // Function
  // Grab everything between the next two line breaks == user-defined pattern
  // Grab everything between the two line breaks after that == user-defined result
  // Pass them into a rule storing function
  // Pass along what's left of the string to be parsed back into the match function

  function getRule(inStr) {
    var regex = /\r?\n|\r/g;
    var a = regex.exec(inStr);
    var b = regex.exec(inStr);
    var userPattern = inStr.slice(a.index, regex.lastIndex);
    var c = regex.exec(inStr);
    //console.log('a:' + a.index + ' b:' + b.index  + ' c:' + c.index);
    var userResult = inStr.slice(b.index, regex.lastIndex);
    var end = regex.lastIndex;
    outStr = inStr.slice(end);
    storeRule(userPattern, userResult);
    match(end);
  }



  // Function: match
  // Recieves a copy of the string to be parsed
  // Finds a match, which is specified as an argument
  // Adds everything before the match to the overall result, then removes it from the string to be parsed (copy)
  // Deletes the match from the string to be parsed (copy)
  // Executes a function, which is specified as an argument, passing along what's left of the string to be parsed (copy)

  function match(regex, inStr, thenWhat) {
    var result = regex.exec(inStr);
    var start = result.index;
    var end = regex.lastIndex;
    var output = inStr.slice(0, start);
    var outStr = inStr.slice(end);
    applyRules(output);
    thenWhat(outStr);
  }

  match(/:mk:/g, src, getRule);

  //var newRule = /::nr/g;
  //var lineBr = /\r?\n|\r/g;


};
