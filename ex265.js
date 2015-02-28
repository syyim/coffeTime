// Generated by CoffeeScript 1.6.2
(function() {
  var animal, animals, answer, collective;

  animals = 'baboons badgers antelopes cobras crocodile';

  answer = (function() {
    var _i, _len, _ref, _results;

    _ref = animals.split(" ");
    _results = [];
    for (_i = 0, _len = _ref.length; _i < _len; _i++) {
      animal = _ref[_i];
      collective = (function() {
        switch (animal) {
          case "antelopes":
            return "herd";
          case "baboons":
            return "rumpus";
          case "badgers":
            return "cete";
          case "cobras":
            return "quiver";
          case "crocodiles":
            return "baak";
        }
      })();
      _results.push("A " + collective + " of " + animal);
    }
    return _results;
  })();

  console.log(answer);

}).call(this);