function checkChar(char) {
  result = '';
  switch (char) {
    case '*':
      result = '<h1>';
      break;
    case '%':
      result = '</h1>'
      break;
    default:
      result = char;
  }
  return result;
}

var markour = function(src) {
  var result = '';
  var array = src.split('');
  for (var i = 0; i < array.length; i++) {
    var transformed = checkChar(array[i]);
    result += transformed;
  }
  return result;
}
