var markour = function(src) {

  var myRe = /::nr/g;
  var str = src;
  var each = [];
  var all = [];

  while ((each = myRe.exec(str)) !== null){
    all.push([each.index,myRe.lastIndex]);
  }


};
