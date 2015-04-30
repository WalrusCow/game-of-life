requirejs.config({
  urlArgs: "ts="+new Date().getTime(),
  paths : {
    'life' : './'
  }
});

requirejs(['life/life'], function(Life) {
  var lifeGame = new Life();
});
