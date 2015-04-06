function markour(src) {

  function mkLines(src) {
    return src.split(/\r?\n|\r/);
  }

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
}
