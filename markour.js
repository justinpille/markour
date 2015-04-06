var markour = function(src) {

  var output = '';

  function log(remaining) {
    console.log(output);
    console.log(remaining);
  }

  // Function
  // Grab everything between the next two line breaks == user-defined pattern
  // Grab everything between the two line breaks after that == user-defined result
  // Pass them into a rule storing function
  // Pass along what's left of the string to be parsed back into the match function


  // Function
  // Takes the output of the match function and checks it against stored rules



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
    output += inStr.slice(0, start);
    var outStr = inStr.slice(end);
    thenWhat(outStr);
  }

  match(/::mk/g, src, log);

  //var newRule = /::nr/g;
  //var lineBr = /\r?\n|\r/g;


};
