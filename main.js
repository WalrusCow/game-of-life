requirejs.config({
  urlArgs: "ts="+new Date().getTime(),
});

requirejs(['life'], function(Life) {
  var lifeGame = new Life();
});
