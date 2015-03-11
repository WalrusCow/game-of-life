requirejs.config({
  urlArgs: "ts="+new Date().getTime(),
  paths : { 'require' : 'lib/requirejs' }
});

requirejs(['life'], function(Life) {
  var lifeGame = new Life();
});
