function mkLines(src) {
  return src.split(/\r?\n|\r/);
}

function readRules(src) {

  function findMK(lines) {
    var mkLocations = [];
    var mkGlyph = /:mk:/g;
    for (var i = 0; i < lines.length; i++) {
      if (mkGlyph.exec(lines[i]) != null) {
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



  var lines = mkLines(src); // Array where each index is a line number
  var mkLocations = findMK(lines); // Array of line numbers where mk declaration is found
  var patternVals = getVals(mkLocations, lines, 1); // Values of the next line after mk declaration
  var resultsVals = getVals(mkLocations, lines, 2); // Values of the 2nd line after mk declaration


  function buildData(mkLocations, patternVals, resultsVals) {
    var rules = [];
    for (var i = 0; i < mkLocations.length; i++) {
      rules.push({
        startingAt: mkLocations[i] + 3,
        pattern: patternVals[i],
        result: resultsVals[i]
      })
    }
    return (rules);
  }


  var rules = buildData(mkLocations, patternVals, resultsVals);
  return rules;
}

function useRules(src, data) {

  // Add line breaks
  function breakLines(lines) {
    var brokenLines = [];
    for (var i = 0; i < lines.length; i++) {
      brokenLines[i] = lines[i] + '<br />'
    }
    return brokenLines;
  }

  // Comment out rule blocks
  function commOut(brokenLines) {
    //generate list of line numbers to be commented out
    var commNums = [];
    for (var i = 0; i < data.length; i++) {
      commNums.push(data[i].startingAt -3);
      commNums.push(data[i].startingAt -2);
      commNums.push(data[i].startingAt -1);
    }
    //console.log(commNums);
    var commLines = [];
    for (var i = 0; i < brokenLines.length; i++) {
      if ($.inArray(i, commNums) === -1) { // If the index is not in commNums
        commLines[i] = brokenLines[i];
      } else {
        commLines[i] = '<!--' + brokenLines[i] + '-->';
      }
    }
    return commLines;
  }




  // Don't apply rules to comments



  var lines = mkLines(src); // Array where each index is a line number
  var brokenLines = breakLines(lines);
  var commLines = commOut(brokenLines);
  return commLines;
}
