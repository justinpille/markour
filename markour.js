function mkLines(str) {
  return str.split(/\r?\n|\r/);
}
function findMK(lines) {
  var mkLocations = [];
  var mkGlyph = /::mk/g;
  for (var i = 0; i < lines.length; i++) {
    if (mkGlyph.exec(lines[i]) !== null) {
      mkLocations.push(i);
    }
  }
  return mkLocations;
}
function getVals(mkLocations, lines, offset) {
  var patternVals = [];
  for (var i = 0; i < mkLocations.length; i++) {
    patternVals[i] = lines[mkLocations[i] + offset];
  }
  return patternVals;
}
function buildData(mkLocations, patternVals, resultsVals) {
  var rules = [];
  for (var i = 0; i < mkLocations.length; i++) {
    rules.push({
      startingAt: mkLocations[i] + 3,
      pattern: patternVals[i],
      result: resultsVals[i]
    });
  }
  return (rules);
}
function breakLines(lines) {
  var brokenLines = [];
  for (var i = 0; i < lines.length; i++) {
    brokenLines[i] = lines[i] + '<br />';
  }
  return brokenLines;
}
function commOut(brokenLines, data) {
  var commNums = []; //generate list of line numbers to be commented out
  for (var i = 0; i < data.length; i++) {
    commNums.push(data[i].startingAt - 3);
    commNums.push(data[i].startingAt - 2);
    commNums.push(data[i].startingAt - 1);
  }
  var commLines = [];
  for (var j = 0; j < brokenLines.length; j++) {
    if ($.inArray(j, commNums) === -1) { // If the index is not in commNums
      commLines[j] = brokenLines[j];
    } else {
      commLines[j] = '<!--' + brokenLines[j] + '-->';
    }
  }
  return commLines;
}




function markour(src) {
  var lines = mkLines(src); // Array where each index is a line number
  function prepData(lines){
    var mkLocations = findMK(lines); // Array of line numbers where mk declaration is found
    var patternVals = getVals(mkLocations, lines, 1); // Values of the next line after mk declaration
    var resultsVals = getVals(mkLocations, lines, 2); // Values of the 2nd line after mk declaration
    return buildData(mkLocations, patternVals, resultsVals);
  }
  function prepText(lines, data){
    var brokenLines = breakLines(lines);
    return commOut(brokenLines, data);
  }
  var data = prepData(lines);
  var text = prepText(lines, data);
  return [data, text];
}



//
