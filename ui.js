function showTree(obj) {
  var str = JSON.stringify(obj)
    .replace(/</g, '&lt;')
    .replace(/,/g, ',\n')
    .replace(/\{/g, '{\n')
    .replace(/\}/g, '\n}');
  $('#data').html('<pre>' + str + '</pre>');
}

function testInput() {
  $('#edit').html('sometext1<br />::mk<br />#::<br />&lt;h1>:&lt;/h1><br />sometext2<br /><!--comment-->');
  update();
}

function update() {
  var input = markour($('#edit').html()); //returns a 2-d array
  console.log(input);
  $('#text').html(input[1])
  showTree(input[0]);
  var final = applyIt(input[1], input[0]);
  $('#rendered').html(final);
}
