function applyIt(text, data) {

  var result = [];

  // Apply each rule, one by one, to each line, one by one.
  for (var i = 0; i < data.length; i++) { //For each rule
    for (var j = 0; j < text.length; j++) { //Look for it on each line of text
      if (j >= data[i].startingAt && text[j].slice(0, 4) !== '<!--') {
        result[j] = applyRule(data[i], text[j]);
      } else {
        result[j] = text[j];
      }
    }
  }

  function applyRule(thisRule, toThisText) {
    switch (true) {

      //The pattern is a block type, and the line of text starts with this pattern
      case /.::/.test(thisRule.pattern) && toThisText.slice(0, thisRule.pattern.split('::')[0].length) === thisRule.pattern.split('::')[0] :
        return 'found .::';
        //return thisRule.result.split(':')[0] + toThisText + thisRule.result.split(':')[1];

        //The pattern is an inline type, and the line of text contains this pattern
      case /.:./.test(thisRule.pattern):
        return 'found .:.';
        //return thisRule.result.split(':')[0] + toThisText + thisRule.result.split(':')[1];

        //The pattern is a replace type, and the line of text contains the replace symbol
      case /:.:/.test(thisRule.pattern):
        return 'found :.:';

        //
      default:
        return toThisText;
    }
  }

  return result;


}
