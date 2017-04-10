var $ = require('jquery');

module.exports = {
  setToDos: function(toDos) {
    if ($.isArray(toDos)) {
      localStorage.setItem('toDos', JSON.stringify(toDos));
      return toDos;
    }
  },
  getToDos: function() {
    var stringToDos = localStorage.getItem('toDos');
    var toDos = [];

    try {
      toDos = JSON.parse(stringToDos);
    } catch (e) {

    }

    return $.isArray(toDos) ? toDos : [];
  }
};
