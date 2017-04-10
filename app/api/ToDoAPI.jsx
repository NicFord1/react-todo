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
  },
  filterToDos: function(toDos, showCompleted, searchText) {
    var filteredToDos = toDos;

    // Filter by showCompleted
    filteredToDos = filteredToDos.filter((toDo) => {
      return !toDo.completed || showCompleted;
    });

    // Filter by searchText
    filteredToDos = filteredToDos.filter((toDo) => {
      return searchText.length === 0 || toDo.text.toLowerCase().indexOf(searchText) >= 0;
    });

    // Sort toDos with Non-Completed First
    filteredToDos.sort((a, b) => {
      if (!a.completed && b.completed) {
        return -1;
      } else if (a.completed && !b.completed) {
        return 1;
      } else {
        return 0;
      }
    });

    return filteredToDos;
  }
};
