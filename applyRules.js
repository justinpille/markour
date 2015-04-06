function applyIt(text, data) {
/*
  // If the line starts with '<!--', do nothing
  // If the line starts with a user-defined pattern (before the delimiter), and if that pattern specifies '\n' after the delimiter, transform the whole line
  // If the line starts with a user-defined pattern (before the delimiter), and that pattern doesn't specify '\n' after the delimiter, transform only what's inbetween the two sub-patterns
  // If the line has a user-defined pattern embedded...

  // Check for special symbols at the beginning of the line
  // Return all data indexes that match
  function beginsWithSymbol(line) {
    var dataMatch = 0;
    for (var i = 0; i < data.length; i++) {
      var subPatA = data[i].pattern.split(0, '::');
      var regex = /subPatA/g;
      var result = regex.exec(line);
      if (result !== null && result.index === 0) { //If it matches at the beginning of the line
        dataMatch = i;
      }
    }
    return dataMatch;
  }

  for (var i = 0; i < text.length; i++) {
    var dataMatch;
    if (text[i].slice(0, 4) !== '<!--') { // Don't apply rules to comments
      dataMatch = beginsWithSymbol(text[i]);
    }
    //console.log(data[dataMatch].result);
  }
*/
console.log(text);
return text;



}
